import express from "express";
import mongoose from "mongoose";
import userModel from "./userModel.js";
import dotenv from 'dotenv';

const app = express();
const port = 3001;
app.use(express.json());

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_url)
    ;
    console.log("Connection to mongoDB is successfull!");
  } catch (error) {
    console.log(error);
  }
};

app.post('/create', async (req, res) => {
   try {
      const newUser = new userModel(req.body);
   await newUser.save();
   res.status(201).send('new user is created');
   } catch(error) {
      console.log(error)
   }
})
app.listen(port, () => {
  connectionToDB();1
});
