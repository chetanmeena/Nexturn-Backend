import mongoose from "mongoose";
const {Schema} = mongoose;
const bookingSchema = new Schema({
    "ticket":{
        type:String
    },
    "name":{
        type:[String]
    },
    "no_of_seats":{
        type:Number
    },
    "Confirmed":{
        type:Boolean,
        default:false

    }

})
export default mongoose.model("Booking",bookingSchema)