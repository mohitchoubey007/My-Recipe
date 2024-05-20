import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/Users.js';
const router =express.Router()

router.post("/register",async(req,res)=>{
    const {username,password}=req.body;
    const user=await UserModel.findOne({username});
    if(user){
     return res.json({message:"user already exist"});   
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const newUser=new UserModel({username,password:hashedPassword});
    await newUser.save();
    res.json({meassage : "user registered succesfully"});
});
router.post("/login",async(req,res)=>{
    const {username,password}=req.body;
    const user=await UserModel.findOne({username});
    if(!user){
        return res.json({message:"user doesnot exist !!"});
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.json({message:"username or password is incorrect"});

    }
    const token =jwt.sign({id:user._id},"secret");
    res.json({token,userID: user._id});
});

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      jwt.verify(authHeader, "secret", (err) => {
        if (err) {
          return res.sendStatus(403);
        }
        next();
      });
    } else {
      res.sendStatus(401);
    }
  };
  






export {router as userRouter};
