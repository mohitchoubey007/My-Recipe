import express from "express";
import cors from 'cors'
import mongoose from 'mongoose';
import {userRouter} from './routes/users.js'
import {recipesRouter} from './routes/recipes.js'
const app=express();
app.use(express.json());
app.use(cors());
app.use("/auth",userRouter);
app.use("/recipes",recipesRouter)
mongoose.connect("mongodb+srv://mohitjdh2021:mohit1234@cluster0.qidowng.mongodb.net/")
app.listen(3001,()=>console.log("server started"));



