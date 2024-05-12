import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthClient } from "@dfinity/auth-client";
import { createActor } from '../../../../declarations/dao_canister';


const AuthContext = createContext();

export const useAuthClient = () => {
    const [authClient, setAuthClient] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [identity, setIdentity] = useState(null);
    const [principal, setPrincipal] = useState(null);
    const [backendActor, setBackendActor] = useState(null);

    console.log({ backendActor })

    const backendCanisterId =
        process.env.CANISTER_ID_DAOHOUSE_BACKEND ||
        process.env.BACKEND_CANISTER_CANISTER_ID;



    const frontendCanisterId =
        process.env.CANISTER_ID_DAOHOUSE_FRONTEND ||
        process.env.FRONTEND_CANISTER_CANISTER_ID;


    const clientInfo = async (client) => {
        const isAuthenticated = await client.isAuthenticated();
        const identity = client.getIdentity();
        const principal = identity.getPrincipal();
        setAuthClient(client);
        setIsAuthenticated(isAuthenticated);
        setIdentity(identity);
        setPrincipal(principal);

        if (isAuthenticated && identity && principal && principal.isAnonymous() === false) {
            let backendActor = createActor(backendCanisterId, { agentOptions: { identity: identity } });
            setBackendActor(backendActor);
        }

        return true;
    }

    useEffect(() => {
        (async () => {
            const authClient = await AuthClient.create();
            clientInfo(authClient);
        })();
    }, []);

    const login = async () => {
        return new Promise(async (resolve, reject) => {
            try {
                if (authClient.isAuthenticated() && ((await authClient.getIdentity().getPrincipal().isAnonymous()) === false)) {
                    resolve(clientInfo(authClient));
                } else {
                    await authClient.login({
                        identityProvider: process.env.DFX_NETWORK === "ic"
                            ? "https://identity.ic0.app/"
                            : `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943`,
                        onError: (error) => reject((error)),
                        onSuccess: () => resolve(clientInfo(authClient)),
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    };

    const signInPlug = async (actor) => {
        (async () => {
            const whitelist = [frontendCanisterId, backendCanisterId];
            await window?.ic?.plug?.requestConnect({
                whitelist,
            });
            // const actor = await window.ic.plug.createActor({
            //   canisterId: backEnd,
            //   interfaceFactory: seachanIdlFactory,
            // });
            const plugBalances = await window.ic.plug.requestBalance();
            const icpBalance = plugBalances[0].amount
            const plugAgent = await window.ic.plug.agent;
            console.log({actor,principal,plugBalances,icpBalance})

            // Assuming you have the plugAgent, get the principal
            const principal = await plugAgent.getPrincipal();

            // Assuming you have the authClient initialized in your useAuthClient hook
            const isAuthenticated = await authClient.isAuthenticated();
            
            // Set identity, isAuthenticated, and principal
            setIdentity(plugAgent.getPrincipal());
            setIsAuthenticated(isAuthenticated);
            setPrincipal(principal);


            // Create the actor
            const actor = createActor(backendCanisterId, { agentOptions: { identity: plugAgent.getPrincipal() } });

            // Set backendActor state
            setBackendActor(actor);

            actor.createUser(await plugAgent.getPrincipal(), "plug", icpBalance).then(user => {
                setActor(actor)
                setUser(user[0])
                // navigate("/profile/" + user[0].id.toString());
            })
        }
        )();
    }

    const logout = async () => {
        await authClient?.logout();
    }

    return {
        login, logout, authClient, signInPlug, isAuthenticated, identity, principal, frontendCanisterId, backendCanisterId, backendActor
    };
}

export const AuthProvider = ({ children }) => {
    const auth = useAuthClient();
    if (!auth.isAuthenticated || !auth.backendActor) {
        return (
            <AuthContext.Provider value={auth}>
                {children}

            </AuthContext.Provider>
        )
    }
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);
