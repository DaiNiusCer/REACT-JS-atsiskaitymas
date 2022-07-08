import express from 'express';
import Posts from './routes/postsget.js';
import Postsadd from './routes/postsadd.js';
import Register from './routes/register.js';
import Login from './routes/login.js'
import cookieParser from 'cookie-parser';

const app=express();
app.use(express.json());
app.use(cookieParser());



app.use(express.urlencoded({
  extended:false
}));

const PORT=5000;
//CRUD operacijos

//Routes
app.use('/posts',Posts);
app.use('/posts',Postsadd);
app.use('/users',Register);
app.use('/',Login)
//Routes










//Serverio paleidimas
app.listen(PORT, ()=>console.log(`***Server is runing on ${PORT} PORT`))


