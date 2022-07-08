import express from 'express';
import fetch from 'node-fetch';
const router=express.Router()

router.post('/',async function(req,res){
  const addposts=await 
  fetch(' http://localhost:8080/posts',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({title:req.body.title,description:req.body.description})
  })
  res.send(addposts)
  
})

export default router