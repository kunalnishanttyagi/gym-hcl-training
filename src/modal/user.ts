// now lets start by creating a user in database

// import { Schema } from "inspector/promises";
import mongoose from "mongoose";
import { Schema } from "mongoose";
import Document from "mongoose";

// export interface Message{
//     content: string;
//     createdate: Date;
//     sender:string;
//     realsender:string;
// }

export interface User{
    fullname:string,
    password: string;
    email: string;
    height: number;
    weight:number;
    goalweight:number;
    level:string;
    age:number;
}

// now i have my interfaces ready now lets create them in database

// now make schemas

const userschema : Schema<User> =new mongoose.Schema ({
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    height:{
        type: Number,
        required: true,
    },
    
    weight:{
        type: Number,
        required: true,
    },
    goalweight:{
        type: Number,
        required: true,
    },
    level:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    
})

const usermodel = (mongoose.models.user as mongoose.Model<User>) || (mongoose.model<User>("user",userschema));
export default usermodel;