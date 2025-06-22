import SearchBar from "./SearchBar"
import SelectStatus from "./SelectStatus"
import UserList from "./UserList"
import DatePicke from "./DatePicke"
import { useContext } from "react"
import { MyContext } from "@/hooks/UseContext"
import Lodder from "./loder"
const Layout=()=>{
    const {lodder, setlodder}=useContext(MyContext)
    if(lodder==true){
        setTimeout(()=>{
            setlodder(false)
        },1000)
    }
    return(
        <div className="p-[15px] px-[10px] md:px-[20px] flex flex-col justify-center ">

        {/* Header Section */}
         <header>
            <h2 className=" text-[18px] sm:text-2xl font-bold">📦 Shipping Management System  </h2>
            <p className=" text-[16px] sm:text-xl pl-[35px] sm:pl-[40px]">filter, and manage all your shipments</p>
         </header>
       
         {/* SearchFilter Section */}
        <div className=" bg-primaryDark mt-[20px] w-full py-[10px] px-[10px] md:px-[40px] border-primaryOutline border-2 rounded-[10px] flex justify-between  items-center gap-2.5">
         <SearchBar/>
          <div className="flex justify-between gap-2.5 items-center">
         <SelectStatus palceholder={"Status"}/>
         <DatePicke/>
          </div>
         </div>

        {/* UserList Section */}
          
         {lodder ? (<Lodder/>):(<UserList/>)}
         
        </div>
    )
}
export default Layout