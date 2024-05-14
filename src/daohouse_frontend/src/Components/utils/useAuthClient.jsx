import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthClient } from "@dfinity/auth-client";
import { createActor } from '../../../../declarations/daohouse_backend/index';

const AuthContext = createContext();

export const useAuthClient = () => {
    const [authClient, setAuthClient] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [identity, setIdentity] = useState(null);
    const [principal, setPrincipal] = useState(null);
    const [backendActor, setBackendActor] = useState(null);

    const getPrincipalId = (principal) => {
        if (principal) {
            const principalIdArray = Array.from(principal?._arr || []);
            return Buffer.from(principalIdArray).toString('base64');
        }
        return null;
    };

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

    console.log({backendActor})

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
                            : `http://br5f7-7uaaa-aaaaa-qaaca-cai.localhost:4943`,
                        onError: (error) => reject((error)),
                        onSuccess: () => resolve(clientInfo(authClient)),
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    };

    const signInPlug = async () => {
        try {
            const whitelist = [frontendCanisterId, backendCanisterId];
            const isConnected = await window?.ic?.plug?.requestConnect({
                whitelist,
            });

            if (!isConnected) {
                console.log('User denied the connection request.');
                return;
            }
    
      
            console.log(isConnected,'User is connected.');

            try {
                const plugBalances = await window.ic.plug.requestBalance();
                const icpBalance = plugBalances[0].amount || 0;
                // const plugAgent = await window.ic.plug.agent;
                // const principal = await plugAgent.getPrincipal();
                const principal = await window.ic?.plug?.principalId
                console.log({  plugBalances, icpBalance,principal});
                console.log(window.ic)
            } catch (error) {
                console.error('Error fetching plugBalances and plugAgent:', error);
            }

         
    

            setIdentity(window.ic?.principalId);
            setIsAuthenticated(true);
            setPrincipal(window.ic?.principalId);

            // Create the actor
            const actor = createActor(backendCanisterId, { agentOptions: { identity:window.ic?.principalId  } });

            console.log({ actor })

            // Set backendActor state
            setBackendActor(actor);

            // actor.createUser(await  window.ic?.plug?.principalId, "plug", 0).then(user => {
            //     setActor(actor);
                
            //     setUser(user[0]);
                // navigate("/profile/" + user[0].id.toString());
            // });
        } catch (error) {
            // If there's an error, user is not connected
            console.error('Error connecting:', error);
        }
    };


    const logout = async () => {
        await authClient?.logout();
    }

    return {
        login, logout, authClient, signInPlug, isAuthenticated, identity, principal, getPrincipalId,frontendCanisterId, backendCanisterId, backendActor
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
