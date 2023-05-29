import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function BarandazWrapper({ children }) {

    const [activeSidebar, setActiveSidebar] = useState(true);
    const [test, setTest] = useState(true);
    // const [categoryId, setcategoryId] = useState(params.id)
    const [isClickedIndex,setClickedIndex]=useState(-1)




  return (
    <AppContext.Provider
      value={{  
        activeSidebar,
        setActiveSidebar,
<<<<<<< HEAD
        auth,
        setAuth,
        username,
        setUsername
        
=======
        test,
        setTest,
        isClickedIndex,
        setClickedIndex
        // categoryId, 
        // setcategoryId
>>>>>>> f6abf3ad9c26b1d37bb1e43ac03b01c8b9ea514d
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useBarandazContext() {
  return useContext(AppContext);
}
