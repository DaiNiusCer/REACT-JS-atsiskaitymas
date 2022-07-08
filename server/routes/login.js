import express  from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import axios from "axios";

const router=express.Router()
router.post('/',async(req,res)=>{
  console.log(req.body)
  const {email,password}=req.body;

  if(!email || !password){
    return res.status(400).json({
      err:"Need email and password"
    })
  }
const all= await axios.get('http://localhost:8080/users');
const user= all.data.find(user=>user.email===email);
if(!user){
  return res.status(400).json({
err:'Email does not exist!'
  })
}
console.log(user)
const isMatch=await bcrypt.compare(password,user.password)
console.log(isMatch)
if(!isMatch){
  return res.status(400).json({
    err:'Wrong password!'
})
}

const token=jwt.sign({id:user.id,email:user.email},'donottellyourmum')
res.json({token})
})

export default router







