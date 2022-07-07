import React from "react";
import "./Formregister.css";

const Formadd = () => {
  return ( 
    <div className="container">
    <form>
      <h3>Add a new post</h3>
      <label htmlFor="">Enter Your's title</label>
      <br />
      <input type="text" name="title" />
      <br />
      <label>Enter Your's description</label>
      <br />
      <textarea name="description" id="" cols="60" rows="10"></textarea>
      <input className="submitBtn" type="submit" value="Submit" />
    </form>
    </div> 
    );
}
 
export default Formadd;