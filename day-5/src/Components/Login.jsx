import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import {AppContext} from "../Context/AppContext"
import axios from "axios"
// import { Navigate } from 'react-router-dom';
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const [token ,setToken] = useState(null)
  const {loginUser} = useContext(AppContext);
  
  const navigate = useNavigate();

  const handleEmail=(e)=>{
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  const handlePass=(e)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
  }
  const formData=(e)=>{
    e.preventDefault()
    //let obj={email:email,password:password}
    //console.log(obj)
    axios.post("https://reqres.in/api/login",{
      email:email,
      password:password
    }).then((res)=>setToken(res.data.token))
    alert("Login successful")
    
  }
  if (token) {
    loginUser(token);
    navigate("/");
    //console.log(loginUser)
  }
  console.log(token)
 
  return (
    <div >
      <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",width:"50%",padding:"15px",margin:"auto"}}>
        <form onSubmit={formData}>
          <input style={{border:"1px solid grey",borderRadius:"3px"}} placeholder="Email.." type="email" value={email} onChange={handleEmail}  /><br/><br/>
          <input style={{border:"1px solid grey",borderRadius:"3px"}} placeholder="Password.." type="password" value={password} onChange={handlePass}  /><br/><br/>
          <input type="submit" />
        </form>
      </div>
      
    </div>
  )
}

export default Login