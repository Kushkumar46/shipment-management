import { createContext, useEffect, useState } from "react";
import { ShipmentData } from "../Data/ShipmentData";
export const MyContext=createContext()


export const ProviderContext=({children})=>{
  
    const [orginalData, setorginalData]=useState(ShipmentData)
    const [Data, setData]=useState(ShipmentData)
    const [UserDetailData, setUserDetailData]=useState()
    const [lodder, setlodder]=useState(true)

    useEffect(()=>{
     const timeOut=setTimeout(()=>{
       setlodder(false)
    },1000)
    return ()=>clearTimeout(timeOut)
    },[])

   

    const value={Data, setData, orginalData, lodder, setlodder, UserDetailData, setUserDetailData,setorginalData}

    return <MyContext.Provider value={value}>{children}</MyContext.Provider>
    
}
