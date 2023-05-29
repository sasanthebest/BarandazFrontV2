import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function BarandazWrapper({ children }) {

  const [activeSidebar, setActiveSidebar] = useState(true);
  const [auth, setAuth] = useState("");
  const [username, setUsername] = useState("");



  return (
    <AppContext.Provider
      value={{  
        activeSidebar,
        setActiveSidebar,
        auth,
        setAuth,
        username,
        setUsername
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useBarandazContext() {
  return useContext(AppContext);
}
