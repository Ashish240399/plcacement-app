import { createContext, useState } from "react";

export const SearchedContext=createContext();
const SearchedContextProvider=({children})=>{
    const [searched,setSearched]=useState("");
    const searchResult=(value)=>{
        setSearched(value)
    }
    return <SearchedContext.Provider value={{searched,searchResult}}>{children}</SearchedContext.Provider>
}

export default SearchedContextProvider