import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function BarandazWrapper({ children }) {

    const [activeSidebar, setActiveSidebar] = useState(true);
      const [test, setTest] = useState(true);



  return (
    <AppContext.Provider
      value={{  
        activeSidebar,
              setActiveSidebar,
              test,
        setTest
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useBarandazContext() {
  return useContext(AppContext);
}
