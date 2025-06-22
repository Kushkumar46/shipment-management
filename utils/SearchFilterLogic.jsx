
export const SearchLogic=(inputValue,orginalData)=>{
    const searchById= orginalData.filter((obj)=>obj.id.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
     return searchById
} 



export const StatusFilterLogic=(inputValue, orginalData)=>{
    const filterByStatus=inputValue=="All" ? orginalData : orginalData.filter((obj)=>obj.status.includes(inputValue))
     return filterByStatus
}


export const DateFilterLogic=(inputValue, orginalData)=>{
   const filterByDate=orginalData.filter((obj)=>obj.date.includes(inputValue))
    return filterByDate
}


export const UpdateShipmentStatus=(inputValue, setorginalData, shipmentId, setData)=>{
   setorginalData(pre=>
     pre.map((obj)=>{
        if(obj.id==shipmentId){
            return {...obj, status:inputValue}
        }
        return obj
     })
   )
    setData(pre=>
     pre.map((obj)=>{
        if(obj.id==shipmentId){
            return {...obj, status:inputValue}
        }
        return obj
     })
   )

}


