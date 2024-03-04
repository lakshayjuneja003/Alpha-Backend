// import {user} from "../db/db.js"
import mongoose from "mongoose";
import { User } from "../models/user.model.js";

const registerUser = async (req,res)=>{
    const {fullname , email , username , password} = req.body;

    if(
        [fullname,email,username,password].some((filed)=>filed?.trim()=== "")
    ){
        console.log("All Fields Are required");
    }
    const existedUser = User.findOne({
        $or:[{username}, {email}]
    })
    if(existedUser){
        console.log("User ALready exists");
    }
    const user = await User.create({
        fullname,
        email,
        password,
        username 
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        console.log("user not created");
    }

    return res.status(201).json({
        success:true,
        message : "User Registred Succesfully"
    })
}

const loginUser = async (req,res)=>{
    console.log("user login Algoritm");
}
const logoutUser = async (req,res)=>{
    console.log("user logout task");
}

export {
    registerUser,
    loginUser,
    logoutUser
}