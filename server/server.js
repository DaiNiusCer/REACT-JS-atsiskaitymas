import express from 'express';
import fetch from 'node-fetch';

const app=express();

app.use(express.json());

app.use(express.urlencoded({
  extended:false
}));

const PORT=5000;
//CRUD operacijos

//Visu irasu pasiemimas
app.get('/posts', async function(req, res){
  const posts=await fetch('http://localhost:8080/posts').then(data=>data.json())
  res.json(posts)
 });

 app.get('/users', async function(req, res){
  const posts=await fetch('http://localhost:8080/users').then(data=>data.json())
  res.json(posts)
 });


//Visu irasu pasiemimas








//CRUD operacijos

//Serverio paleidimas
app.listen(PORT, ()=>console.log(`***Server is runing on ${PORT} PORT`))