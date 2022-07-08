import './App.css';
import React from 'react';
import {Routes,Route} from "react-router-dom";
import {useState,useEffect} from 'react';
import Register from './pages/Register';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Add from "./pages/Add"


function App() {
  //All hooks
 const[posts,setPosts]=useState([])
 //All hooks

 //Posts fetch
 const postsData=()=>{
  fetch('/allposts')
  .then(res=>res.json())
  .then(data=>setPosts(data))
 
}
useEffect(()=>{
  postsData()
},[])
  return (
   <>
<Routes>
<Route path="/"element={<Login/>}/>
<Route path="/register"element={<Register/>}/>
<Route path="/home"element={<Home data={posts}/>}/>
<Route path="/addpost"element={<Add postsData={postsData}/>}/>

</Routes>
   </>
  );
}

export default App;
