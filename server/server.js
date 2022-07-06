import express from 'express';
import fetch from 'node-fetch';

const app=express();

app.use(express.json());

app.use(express.urlencoded({
  extended:false
}));

const PORT=5000;
//CRUD operacijos










//CRUD operacijos

//Serverio paleidimas
app.listen(PORT, ()=>console.log(`***Server is runing on ${PORT} PORT`))