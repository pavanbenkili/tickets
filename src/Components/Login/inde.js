import './index.css'
import {  useEffect, useState } from 'react';
import { ProjectContext } from '../ProjectContext';
import { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const api = axios.create({
  baseURL:'https://ticketsstgnew.ceipal.com/cakeapi/',
  timeout: 10000,
})

const Login = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") === "true";
    if (isLogin) {
      navigate("/", { replace: true });
    }
  }, [navigate]);
  
   const [form,setForm] = useState({email:'',password:''})
   const [formType,setFormType]=useState(0)
   const [emailErrors,setEmailErrors]=useState({valid:false,msg:''})
   const [passwordErrors,setPasswordErrors]=useState({valid:false,msg:''})

   const {setPr} = useContext(ProjectContext);

   const elementSelection = (e) =>{
     e.target.name === 'email' ? validatingEmail() : validatingPassword()
   }

   const validatingEmail = () =>{
     const {email} = form
     const errors = {valid:false,msg:''}
     const email_pattern =  /^\S+@\S+\.\S+$/.test(email)
     if(email.trim() === ''){
        errors['valid'] = false
        errors['msg']= "Required"
     }else if(!email_pattern){
        errors['valid'] = false
        errors['msg']= "Incorrect Email"
     }else{
         errors['valid'] = true
        errors['msg']= ""
     }
     setEmailErrors((prev)=>({
      ...prev,...errors
     }))
      
   }

   const validatingPassword = () =>{
    const {password} = form
    const password_pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}/.test(password)
    console.log(password_pattern)
    const errors = {valid:false,msg:''}
    if(password.trim() === ''){
        errors['valid'] = false
        errors['msg']= "Required"
     }else if(!password_pattern){
        errors['valid'] = false
        errors['msg']= "Invalid Password"
     }else{
         errors['valid'] = true
        errors['msg']= ""
     }
     setPasswordErrors((prev)=>({
      ...prev,...errors
     }))
   }

   const handleChange = (e) =>{
    console.log(e.target.value)
     setForm({...form,[e.target.name]:e.target.value})
     e.target.name==='email' ? validatingEmail() : validatingPassword()
   }

   const onSubmitForm = async(e) =>{
    e.preventDefault()
    const valid = formType===0 ? emailErrors.valid && passwordErrors.valid : emailErrors.valid
    if(valid){
       try {
        // const res = await api.post("Users/login",form);

        const res = {
        "success": true,
        "message": "Login Successful",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJiZWFyZXIiOiJqdXNsMDdhbmIwanUxbHNhbHI3cG45OTJhMCIsImV4cCI6MTc2NjAwODM5Miwicm9sZV9pZCI6MSwidXNlcl9pZCI6Ik1qUTJURE5UVWpkNVoweDVibTkxVlZwTGNESlZkejA5In0.vh1MpKNylIxI3l2qg0rvPvrlfNBgRHY8_lbWuazXSE8",
        "projectId": "Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09",
        "user_projects": [
            {
                "id": "Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09",
                "label": "ATS"
            },
            {
                "id": "UGtpQkJSTEZ3Z0xBaDdsN1QwOXBIUT09",
                "label": "WorkForce"
            },
            {
                "id": "S3dUMVNKYkRseEdmNHZxNTRPN0VwUT09",
                "label": "Procurewise"
            }
        ]
        }
         localStorage.setItem("token",res["token"]);
         localStorage.setItem("isLogin",true);
         setPr(1)
        navigate("/", { replace: true });


        console.log("API DATA:", res.data);
      } catch (err) {
        console.error("API ERROR:", err);
      }
    }else{
      validatingEmail()
      validatingPassword()
    }

    
   }
   

   const ChangeFormType =  ()=>{
    setFormType((prev)=>prev===0 ? 1 : 0)
    setForm({email:'',password:''})
    setEmailErrors({valid:false,msg:''})
    setPasswordErrors({valid:false,msg:''})
   }

   

   




   return (
    <div className="login-container">
      <form className="login-box" onSubmit={onSubmitForm}>
        <h2>{formType===0 ? 'Login' : 'Forgot Password'}</h2>

        <input
          name="email"
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          onBlur={elementSelection}
          onFocus={elementSelection}
        />
        {!emailErrors.valid  && <span className='error-text'>{emailErrors.msg}</span>}

        {formType===0  && 
        (
          <>
         <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          onBlur={elementSelection}
          onFocus={elementSelection}
        />
         {!passwordErrors.valid && <span className='error-text'>{passwordErrors.msg}</span>}
         </>
        )
        }
        

        <button type="submit"  > {formType===0 ? 'Login' : 'Reset Password'} </button>
        <span 
            className="changing-anchor"
            onClick={ChangeFormType}
            >
            {formType===0 ? 'Forgot Password' : 'Back To Login'} 
        </span>
      </form>
    </div>
  );
}
export default  Login