import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function BarandazWrapper({ children }) {

    const [activeSidebar, setActiveSidebar] = useState(true);
    // const [categoryId, setcategoryId] = useState(params.id)
  const [isClickedIndex, setClickedIndex] = useState(-1)
  const [auth, setAuth] = useState("");
  const [username, setUsername] = useState("");




  return (
    <AppContext.Provider
      value={{
        activeSidebar,
        setActiveSidebar,
        isClickedIndex,
        setClickedIndex,
        auth,
        setAuth,
        username,
        setUsername,
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
