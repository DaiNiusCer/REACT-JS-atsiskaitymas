import React from "react";
import Formlogin from "../components/Formlogin";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";



const Login = () => {

  return ( 
  <>
  <Header/>
  <Formlogin/>
  </> 
  );
}
 
export default Login;