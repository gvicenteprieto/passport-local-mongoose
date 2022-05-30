import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const url = 'mongodb://localhost:27017/passportlocal2';

mongoose.connect(url, (err) => {
  if (err) {
    console.log("Error:" + err);
  } else {
    console.log("Connected to MongoDB");
  }
});

