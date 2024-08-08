import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { createActor, idlFactory as BackendidlFactory } from "../../../../declarations/daohouse_backend/index";
import { Principal } from "@dfinity/principal";
import { HttpAgent, Actor } from "@dfinity/agent";
//import { NFID } from "@nfid/embed";
import { idlFactory as DaoFactory } from "../../../../declarations/dao_canister/index";

const AuthContext = createContext();

const defaultOptions = {
  createOptions: {
    idleOptions: {
      idleTimeout: 1000 * 60 * 30, // set to 30 minutes
      disableDefaultIdleCallback: true, // disable the default reload behavior
    },
  },
  loginOptionsIcp: {
    identityProvider:
      process.env.DFX_NETWORK === "ic"
                ? "https://identity.ic0.app/#authorize"
                : `http://${process.env.CANISTER_ID_INTERNET_IDENTITY}.localhost:4943`,
  },
  loginOptionsNfid: {
    identityProvider:
      process.env.DFX_NETWORK === "ic"
        ? `https://nfid.one/authenticate/?applicationName=my-ic-app#authorize`
        : `https://nfid.one/authenticate/?applicationName=my-ic-app#authorize`
  },
};


export const useAuthClient = (options = defaultOptions) => {
  const [authClient, setAuthClient] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [identity, setIdentity] = useState(null);
  const [principal, setPrincipal] = useState(null);
  const [backendActor, setBackendActor] = useState(null);
  const [stringPrincipal, setStringPrincipal] = useState(null);
  const [nfid, setNfid] = useState(null);
  const [error, setError] = useState(null);

  const getPrincipalId = (principal) => {
    if (principal) {
      const principalIdArray = Array.from(principal?._arr || []);
      return Buffer.from(principalIdArray).toString("base64");
    }
    return null;
  };
  

  const backendCanisterId =
    process.env.CANISTER_ID_DAOHOUSE_BACKEND ||
    process.env.BACKEND_CANISTER_CANISTER_ID;

  const frontendCanisterId =
    process.env.CANISTER_ID_DAOHOUSE_FRONTEND ||
    process.env.FRONTEND_CANISTER_CANISTER_ID;

  const clientInfo = async (client, identity) => {
    const isAuthenticated = await client.isAuthenticated();
    const principal = identity.getPrincipal();
    setAuthClient(client);
    setIsAuthenticated(isAuthenticated);
    setIdentity(identity);
    setPrincipal(principal);
    setStringPrincipal(principal.toString());
    console.log(principal.toString());
    

    if (isAuthenticated && identity && principal && principal.isAnonymous() === false) {
      const backendActor = createActor(backendCanisterId, { agentOptions: { identity: identity } });
      setBackendActor(backendActor);
    }

    return true;
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const authClient = await AuthClient.create(options.createOptions);
      await clientInfo(authClient, authClient.getIdentity());
      if (window.ic?.plug) {
        const isPlugConnected = await window.ic.plug.isConnected();
        if (isPlugConnected) {
          if (!window.ic.plug.agent) {
            await window.ic.plug.createAgent();
          }
          const principal = await window.ic.plug.agent.getPrincipal();
          const backendActor = await window.ic.plug.createActor({
            canisterId: backendCanisterId,
            interfaceFactory: BackendidlFactory,
          });
          setBackendActor(backendActor);
          setIdentity(window.ic.plug);
          setIsAuthenticated(true);
          setPrincipal(principal);
        } else {
          console.log("Plug wallet is not connected.");
        }
        
      }
        
      
    };

    initializeAuth();
  }, []);


  
  

  const login = async (val) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (
          authClient.isAuthenticated() &&
          (await authClient.getIdentity().getPrincipal().isAnonymous()) ===
          false
        ) {
          resolve(clientInfo(authClient, authClient.getIdentity()));
        } else {
            const opt = val === "Icp" ? "loginOptionsIcp" : "loginOptionsNfid";
            await authClient.login({
              ...options[opt],
              onError: (error) => reject(error),
              onSuccess: () => resolve(clientInfo(authClient, authClient.getIdentity())),
            });
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const signInPlug = async () => {
    if (!window.ic?.plug) {
      window.open("https://plugwallet.ooo", "_blank");
      return;
    }

    const whitelist = [frontendCanisterId, backendCanisterId];
    const hasAllowed = await window.ic.plug.requestConnect({ whitelist });

    if (!hasAllowed) {
      console.error("Connection was refused.");
      return;
    }
    try {
      const principal = await window.ic.plug.agent.getPrincipal();
      const backendActor = await window.ic.plug.createActor({
        canisterId: backendCanisterId,
        interfaceFactory: BackendidlFactory,
      });

      setBackendActor(backendActor);
      setIdentity(principal);
      setIsAuthenticated(true);
      setPrincipal(principal);

      await clientInfo({
        isAuthenticated: () => true,
        getIdentity: () => ({ getPrincipal: () => principal })
      }, principal);

      console.log("Integration actor initialized successfully.");
    } catch (e) {
      console.error("Failed to initialize the actor with Plug.", e);
    }
  };

  useEffect(() => {
    const initNFID = async () => {
      try {
        const nfIDInstance = await NFID.init({
          application: {
            name: "NFID Login",
            logo: "https://dev.nfid.one/static/media/id.300eb72f3335b50f5653a7d6ad5467b3.svg"
          }
        });
        setNfid(nfIDInstance);
      } catch (error) {
        console.error("Error initializing NFID:", error);
        setError("Failed to initialize NFID.");
      }
    };

    initNFID();
  }, []);

  // const signInNFID = async () => {
  //   if (!nfid) {
  //     console.error("NFID is not initialized.");
  //     return;
  //   }
  
  //   const canisterArray = [process.env.CANISTER_ID_INTERNET_IDENTITY];
    
  //   try {
  //     const delegationResult = await nfid.getDelegation({ targets: canisterArray });
  //     const theUserPrincipal = Principal.from(delegationResult.getPrincipal()).toText();
  //     console.log("The User principal", theUserPrincipal);
  
  //     // Create an identity from the delegation result
  //     // const identity = delegationResult.getIdentity();
  //     const agent = new HttpAgent({ identity });
  
  //     // Fetch root key if in development
  //     if (process.env.DFX_NETWORK !== 'ic') {
  //       await agent.fetchRootKey();
  //     }
  
  //     // Create the backend actor
  //     const backendActor = Actor.createActor({
  //       canisterId: backendCanisterId,
  //       interfaceFactory: BackendidlFactory,
  //     });

      
  
  //     // Update state with authenticated user details
  //     setBackendActor(backendActor);
  //     setIdentity(theUserPrincipal);
  //     setIsAuthenticated(true);
  //     setPrincipal(theUserPrincipal);
  
  //     // Optionally, call `clientInfo` to update authentication client state
  //     await clientInfo({ 
  //       isAuthenticated: () => true, 
  //       getIdentity: () => ({ getPrincipal: () => theUserPrincipal })
  //     }, theUserPrincipal);
  
  //     console.log("NFID authentication successful.");
  //   } catch (error) {
  //     console.error("Error during NFID authentication:", error);
  //     setError("Failed to authenticate with NFID. Please check the canister ID and network settings.");
  //   }
  // };
  

  const createDaoActor = (canisterId) => {
    try {
      const agent = new HttpAgent({ identity });

      if (process.env.DFX_NETWORK !== 'production') {
        agent.fetchRootKey().catch(err => {
          console.warn('Unable to fetch root key. Check to ensure that your local replica is running');
          console.error(err);
        });
      }

      return Actor.createActor(DaoFactory, { agent, canisterId });
    } catch (err) {
      console.error("Error creating DAO actor:", err);
    }
  };

  const disconnectPlug = async () => {
    if (window.ic?.plug) {
      try {
        await window.ic.plug.disconnect();
        setIsAuthenticated(false);
        setIdentity(null);
        setPrincipal(null);
        setBackendActor(null);
        console.log("Disconnected from Plug wallet.");
      } catch (error) {
        console.error("Failed to disconnect from Plug wallet:", error);
      }
    }
  };

  const logout = async () => {
    await authClient?.logout();
    disconnectPlug();
  };

  return {
    login,
    logout,
    authClient,
    signInPlug,
    // signInNFID,
    isAuthenticated,
    identity,
    principal,
    getPrincipalId,
    frontendCanisterId,
    backendCanisterId,
    backendActor,
    stringPrincipal,
    createDaoActor,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useAuthClient();
  if (!auth.isAuthenticated || !auth.backendActor) {
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
  }
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
