import mongoose from "mongoose";

// Defining Scheme
const userScheme =new mongoose.Schema({
    name:{type:String, required:true ,trim:true},
    email:{type:String,required:true , trim:true},
    password:{type:String,required:true,trim:true},
    tc:{type:Boolean,required:true}
})
// Model
const UserModel =mongoose.model("user" ,userScheme)
export default UserModel