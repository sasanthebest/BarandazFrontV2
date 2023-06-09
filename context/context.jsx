import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function BarandazWrapper({ children }) {

  const [activeSidebar, setActiveSidebar] = useState(true);
  const [theme, setTheme] = useState("theme1");
    // const [categoryId, setcategoryId] = useState(params.id)
    const [isClickedIndex,setClickedIndex]=useState(-1)
    const [allCategories,setAllCategories]=useState([])
    const [allCities,setAllCities]=useState([])
    const [auth,setAuth]= useState("")
    const [username, setUsername] = useState("");




  return (
    <AppContext.Provider
      value={{
        activeSidebar,setActiveSidebar,
        theme, setTheme,
        isClickedIndex,setClickedIndex,
        auth,setAuth,
        username,setUsername,
        // categoryId, setcategoryId,
        allCategories,setAllCategories,
        allCities,setAllCities
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useBarandazContext() {
  return useContext(AppContext);
}
