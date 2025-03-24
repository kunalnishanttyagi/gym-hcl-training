// this is the one that will make users
import bcrypt from 'bcryptjs';
// import { signup } from "@/schema/signupschema";
import dbconnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import usermodel from "@/modal/user";
// import { boolean } from "zod";
interface data{
    fullname:string,
    password: string;
    email: string;
    height: number;
    weight:number;
    goalweight:number;
    level:string;
    age:number;
}
export async function POST(req:Request,res:Response) {
    await dbconnect();
    try{
        const body = await req.json();
        console.log(body);
    // console.log("Received data:", body.fullname);
    // const hashedpassword=await bcrypt.hash(body.password,(process.env.SALT || 10))
    const hashedpassword=await bcrypt.hash(body.password,10);
    // here create user in database
    const data: data ={
        fullname: body.fullName,
        email: body.email,
        password: hashedpassword,
        age: body.age,
        weight: body.weight,
        height: body.height,
        goalweight: body.goalweight,
        level: body.level,
    }
    // const validationResult = data.safeParse(body);
    // if (!validationResult.success) {
    //   console.log("Data sent was not upto date");
    //   return NextResponse.json(
    //     { success: false, errors: validationResult.error.errors },
    //     { status: 400 }
    //   );
    // }
    // console.log(data.firstname);
    const existinguserfound = await usermodel.findOne({email:data.email});
    if(existinguserfound){
      
            return NextResponse.json({success:false, message: "User email already exist!" }, { status: 201 });
    
          }
        // return NextResponse.json({success:true, message: "User signed up successfully!" }, { status: 201 });
      
      // then create by updating content if is verified is false;
    
    else{
        console.log("data is ",data);
      console.log("NO exisiting user found trying to make new user")
      const newuser=new usermodel(data)
      console.log("user formed is", newuser)
      if(newuser) console.log("User formed just saving left",newuser.email);
      //  async function saving(){
        
          const result=await newuser.save();
          if(result){
            console.log("User formed just saving done");
            // return NextResponse.json({success:true, message: "User signed up successfully!" }, { status: 201 });
    
          }
          else{
            console.log("User formed saving not done");
            // return NextResponse.json({success:true, message: "User signed up unsuccessfull!" }, { status: 201 });
    
          }
        
      // }
      // console.log("funciton m nhi gya")
      
      return NextResponse.json({success:true, message: "User signed up successfully!" }, { status: 201 });
    
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success:false, error: error }, { status: 500 });
  }
}