import './index.css'
import {  useState } from 'react';

import axios from 'axios';

const api = axios.create({
  baseURL:'https://ticketsstgnew.ceipal.com/cakeapi/',
  timeout: 10000,
})

const Login = () => {
   const [form,setForm] = useState({email:'',password:''})
   const [formType,setFormType]=useState(0)
   const [emailErrors,setEmailErrors]=useState({valid:false,msg:''})
   const [passwordErrors,setPasswordErrors]=useState({valid:false,msg:''})

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
        const res = await api.post("Users/login",form);
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