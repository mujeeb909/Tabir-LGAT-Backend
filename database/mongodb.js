import mongoose from "mongoose";
import { NODE_ENV, DB_URI } from '../config/env.js';

if(!DB_URI){
  throw new Error("DB_URI is not defined");

}

const connectToDatabase = async ()=>{
  try {
    await mongoose.connect(DB_URI);
  } catch (error) {
    console.error('Error connecting to database', error);
    process.exit(1);
  }
}

export default connectToDatabase;
