import { Navigate,Outlet,useLocation,useNavigate} from "react-router-dom"

const ProtectedRoute = () =>{
    const isLogin =  localStorage.getItem("isLogin") === 'true' ? true : false
    const route =  useLocation()

   
    
    
    if(!isLogin){
        console.log('id')
       return <Navigate to="/login" replace/>
    }
   
    return <Outlet/>

}

export default ProtectedRoute