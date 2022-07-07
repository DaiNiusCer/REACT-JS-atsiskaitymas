import React from "react";
import "./Formregister.css"
const Formregister = () => {
  return ( 
    <div className="container">
    <form>
      <h3>Registration form </h3>
      <label htmlFor="">Enter Your's email</label>
      <br />
      <input type="email" />
      <br />
      <label>Enter Your's password</label>
      <br />
      <input type="password" />
      <br />
      <label>Repeat Your's password</label>
      <br />
      <input type="password" />
      <input className="submitBtn" type="submit" value="Submit" />
    </form>
    </div>
   );
}
 
export default Formregister;