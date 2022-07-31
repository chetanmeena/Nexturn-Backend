import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import hallsRoute from "./routes/cinemahall.js"
import bookingRoute from "./routes/booking.js"
import cookieParser from "cookie-parser";
const app = express(); 
const PORT = 3001;
const dbURL = "mongodb+srv://movies:manavpk9@cluster0.eyulgjj.mongodb.net/?retryWrites=true&w=majority";
const connect_database = async ()=>{
    console.log("connection connecting")
    try{
    await mongoose.connect(dbURL);
    console.log("Connection Completed");
    }
    catch(error){  
    throw error;
    }
}
// middleware
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/booking",bookingRoute);
app.use("/api/halls",hallsRoute);
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return (res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message:errorMessage,
        stack:err.stack
    }

    ))
})

app.listen(PORT,async ()=>{
    console.log("Server Started");
    await connect_database();
    
})
