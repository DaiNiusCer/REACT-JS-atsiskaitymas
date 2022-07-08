import express from 'express';
import Posts from './routes/postsget.js';
import Postsadd from './routes/postsadd.js';
import Register from './routes/register.js';
import Login from './routes/login.js'
import cookieParser from 'cookie-parser';
import Verify from  './routes/verify.js'

const app=express();
app.use(express.json());
app.use(cookieParser());



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT=5000;
//CRUD operacijos

//Routes
app.use('/allposts',Posts);
app.use('/addposts',Postsadd);
app.use('/register',Register);
app.use('/login',Login);
app.use('/verify',Verify)
//Routes


//Serverio paleidimas
app.listen(PORT, ()=>console.log(`***Server is runing on ${PORT} PORT`))


