import bcrypt from 'bcryptjs'
import {Createerror} from '../util/Createerror.js'
import User from '../models/User.js';
import jwt from 'jsonwebtoken'
const jwttoken = '6bc43ea8423a9db4eca8332f9516eeadfa44c5794dc7c93f8bbbb9a625d4d22fd09ef0';
export const register = async (req,res,next)=>{
    try{
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.Password,salt);
        const newUser = new User({
            Username:req.body.Username,
            Password:hash,
            Email : req.body.Email
        })
        await newUser.save();
        res.status(200).send("User has been saved");
    }
    catch(err){
        next(err);

    }
}

export const login = async (req,res,next)=>{
        try{
            const Finduser = await User.findOne({Username:req.body.Username})
            if(!Finduser) return (next(Createerror(404,"Username not found")));
            
            const isPasswordCorrect = await bcrypt.compare(req.body.Password, Finduser.Password)
            if(!isPasswordCorrect) return (next(Createerror(404,"Username or password is incorrect")))

            const token = jwt.sign(
                { id : Finduser._id ,isAdmin:Finduser.isAdmin},jwttoken
            )
            const {Password,isAdmin,...othersdetails} = Finduser._doc;
            res.cookie("acess_token",token,{httpOnly:true,}).status(400).json({...othersdetails})

        }
        catch(err){
            next(err);
    
        }
    }
