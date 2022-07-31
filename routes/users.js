import  express  from "express";
import User from "../models/User.js";
import { verifyToken } from "../util/Jwtsecret.js";
const router = express.Router();


router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("user you are logged in");


 })
// create
router.post("/",async (req,res)=>{
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
   
})
// update
router.put('/:id',async (req,res)=>{
    try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id ,{$set : req.body},{new:true})
    res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(500).json(err);
    }

})
// delete
router.get('/:id',async (req,res)=>{
    try{
    const getUser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json(getUser);
    }
    catch(err){
        res.status(500).json(err);
    }

})
// get
router.get('/:id',async (req,res)=>{
    try{
    const getUser = await User.findById(req.params.id)
    res.status(200).json(getUser);
    }
    catch(err){
        res.status(500).json(err);
    }

})
// getall
router.get('/',async (req,res)=>{
    try{
    const getUser = await User.find()
    res.status(200).json(getUser);
    }
    catch(err){
        res.status(500).json(err);
    }

})
// get admin details


export default router;