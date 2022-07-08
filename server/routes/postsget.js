import express from 'express'
import fetch from 'node-fetch';
const router=express.Router()

router.get('/', async function(req, res){
  const posts=await fetch('http://localhost:8080/posts').then(data=>data.json())
  res.json(posts)
 });

 export default router