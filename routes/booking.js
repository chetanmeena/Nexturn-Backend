import express, { application } from "express";
import Booking from "../models/Booking.js";
const router = express.Router();
// create
router.post('/',async (req,res)=>{
    const bookingAdd = new Booking(req.body);
    try{
        const bookingSave = await bookingAdd.save();
        res.status(200).json();
    }
    catch(err){
        res.status(500).json(err);
    }
})
// update
router.put('/:id',async (req,res)=>{
    try{
    const updatedBooking = await User.findByIdAndUpdate(req.params.id ,{$set : req.body})
    res.status(200).json(updatedBooking);
    }
    catch(err){
        res.status(500).json(err);
    }

})
// get
router.get('/',async (req,res)=>{
    try{
    const getBooking = await User.find(req.params.id ,{$set : req.body},{new:true})
    res.status(200).json(getBooking);
    }
    catch(err){
        res.status(500).json(err);
    }

})
export default router; 