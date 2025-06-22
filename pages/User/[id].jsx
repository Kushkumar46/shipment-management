import UserDetail from "../../Component/UserDetail"
import { useContext } from "react"
import { MyContext } from "@/hooks/UseContext"
import Lodder from "@/Component/loder"
const UserDetailPage=()=>{
    const {lodder}=useContext(MyContext)
    return(
        <>
        {lodder ?(<Lodder/>):(<UserDetail/>)}
        </>
    )
}
export default UserDetailPage