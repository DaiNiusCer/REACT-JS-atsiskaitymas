import React from "react";
import Formlogin from "../components/Formlogin";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate=useNavigate()

const loginPerson=(e)=>{
e.preventDefault()
const email=e.target.elements.email.value;
const password=e.target.elements.password.value
  fetch('/users',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      email:email,
      password:password
    })
  })
  .then(res=>res.json())
  .then(res=>{
    if(res.err) return alert(res.err)
    if(res.token){
      localStorage.setItem('yoursToken',res.token)
      navigate('/home')
    }
  })
  


}
  return ( 
  <>
  <Header/>
  <Formlogin loginPerson={loginPerson}/>
  </> 
  );
}
 
export default Login;