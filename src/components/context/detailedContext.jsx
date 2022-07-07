import { createContext, useState } from "react";

export const DetailedContext=createContext();
const DetailedContextProvider=({children})=>{

    const [details,setDetails]=useState();
    const findDetails=(value)=>{
        //console.log(value)
        setDetails(value)
    }

    return <DetailedContext.Provider value={{details,findDetails}}>{children}</DetailedContext.Provider>
}

export default DetailedContextProvider;