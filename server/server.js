import express from 'express';
import fetch from 'node-fetch';
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser';

const app=express();
app.use(express.json());
app.use(cookieParser());



app.use(express.urlencoded({
  extended:false
}));

const PORT=5000;
//CRUD operacijos

//Visu irasu pasiemimas pradzia
app.get('/posts', async function(req, res){
  const posts=await fetch('http://localhost:8080/posts').then(data=>data.json())
  res.json(posts)
 });
//Visu irasu pasiemimas pabaiga

//Naujo iraso pridejimas pradzia
app.post('/posts',async function(req,res){
  const addposts=await 
  fetch(' http://localhost:8080/posts',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({title:req.body.title,description:req.body.description})
  })
  res.send(addposts)
  
})
//Naujo iraso pridejimas pabaiga

//CRUD operacijos

//Validacija pradzia

//Registracijos POST pradzia
app.post('/usersregister',async function(req,res){
  const encryptedPass =await bcrypt.hash(req.body.password, 10)
  const users=await 
  fetch(' http://localhost:8080/users',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email:req.body.email,password:encryptedPass})
  })
  res.send(users)
  
})
//Registracijos POST pabaiga

//Login POST pradzia


//Login POST pabaiga
//Login pradzia

//Login pabaiga

//Validacija pabaiga






//Serverio paleidimas
app.listen(PORT, ()=>console.log(`***Server is runing on ${PORT} PORT`))


