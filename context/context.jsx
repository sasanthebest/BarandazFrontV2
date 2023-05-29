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
        test,
        setTest,
        isClickedIndex,
        setClickedIndex
        // categoryId, 
        // setcategoryId
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useBarandazContext() {
  return useContext(AppContext);
}
