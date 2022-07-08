import React from "react";
import Headerhome from "../components/Headerhome";
import Formadd from "../components/Formadd";

const Add = ({postsData}) => {

  const addPost=(e)=>{
  e.preventDefault()
 const title=e.target.elements.title.value;
 const description=e.target.elements.description.value;
fetch(' /addposts',{
  method:'POST',
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({
    title:title,
    description:description,
  })
})
.then(()=>postsData())
.then(()=>e.target.reset())
.then(()=>alert('Post has been added !'))
console.log(title,description)
  

}
  return (  
    <>
    <Headerhome/>
    <Formadd addPost={addPost} />


    </>
  );
}
 
export default Add;