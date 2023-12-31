import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function BarandazWrapper({ children }) {

  const [activeSidebar, setActiveSidebar] = useState(false);
  const [theme, setTheme] = useState("theme1");
    // const [categoryId, setcategoryId] = useState(params.id)
    const [isClickedIndex,setClickedIndex]=useState(-1)
    const [allCategories,setAllCategories]=useState([])
    const [allCities,setAllCities]=useState([])
    const [auth,setAuth]= useState("")
    const [hasLittleSideBar,sethasLittleSideBar]=useState(false)
    const [username, setUsername] = useState("");
    const [filteredCities,setFilteredCities]=useState(0)




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
        allCities,setAllCities,
        hasLittleSideBar,sethasLittleSideBar,
        filteredCities,setFilteredCities
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useBarandazContext() {
  return useContext(AppContext);
}
