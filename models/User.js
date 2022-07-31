import mongoose from "mongoose";
const {Schema}  = mongoose;
const UserSchema = new Schema({
    "Firstname":{
        type:String
    },
    "Lastname":{
        type:String
    },
    "Username":{
        type:String,
        unique:true
    },
    "Password":{
        type:String
    },
    "Email":{
        type:String,
        unique:true
    },
    "isAdmin":{
        type:Boolean,
        default:false
    }
})
export default mongoose.model("User", UserSchema)