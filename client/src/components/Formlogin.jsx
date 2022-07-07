import React from "react";
import "./Formregister.css"
const Formlogin = () => {
  return ( 
    <div className="container">
    <form>
      <h3>Login form </h3>
      <label htmlFor="">Enter Your's email</label>
      <br />
      <input type="email" />
      <br />
      <label>Provide Your's password</label>
      <br />
      <input type="password" />
      <input className="submitBtn" type="submit" value="Submit" />
    </form>
    </div>
   );
}
 
export default Formlogin;