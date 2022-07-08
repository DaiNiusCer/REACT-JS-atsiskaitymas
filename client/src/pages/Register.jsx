
import React from "react";
import Formregister from "../components/Formregister";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate=useNavigate()
 const registerPerson=(e)=>{
     e.preventDefault()
     const email=e.target.elements.email.value;
     const password=e.target.elements.password.value;
     fetch(' /users',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        email:email,
        password:password,
      })
    })

.then(()=>e.target.reset())
.then(()=>alert('You has been registered !'))
.then(()=>navigate('/'))
console.log('Clicked registration')

 }
  return ( 
    <>
<Header/>
<Formregister registerPerson={registerPerson}/>
    </>
   );
}
 
export default Register;