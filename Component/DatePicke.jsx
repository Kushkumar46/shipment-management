import { useContext } from "react";
import { MyContext } from "../hooks/UseContext";
import { DateFilterLogic } from "../utils/SearchFilterLogic";

const DatePicke=()=> {
    const {setData, orginalData, setlodder}=useContext(MyContext)

    const handelFunc=(e)=>{
      setlodder(true)
      const value=e.target.value
      setTimeout(()=>{
       const updateDateByFilter=DateFilterLogic(value,orginalData)
      setData(updateDateByFilter)
      setlodder(false)
      },1000)
    }
  return (
    <div className=" overflow-hidden">
      <input onChange={handelFunc} type="date" className="px-[10px] py-[15px] rounded-[10px] border-2 border-primaryOutline focus:outline-none  w-[44px] sm:w-[150px]"  style={{ colorScheme: 'light' }}/>
    </div>
  );
}
export default DatePicke