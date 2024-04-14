import { SignupSchemaData } from "@/lib/model/models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import Jwt from 'jsonwebtoken'
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB()
export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const{
            name,
            emailOrnumber,
            password,
            address,
            image
        }=reqBody;
        const hashPassword = await bcrypt.hash(password,10)
        const PreSendData = await new SignupSchemaData({
            name,
            emailOrnumber,
            password:hashPassword,
            address,
            image
        })
        const signupdata = await PreSendData.save()
        const tokenData = {
            id:signupdata._id,
            name:signupdata.name
        }
        const token = Jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})
        const response = NextResponse.json({message:"signup successfully",success:true})
        response.cookies.set("token",token,{httpOnly:true})
        return response

    }catch(error:any){
        return NextResponse.json({message:"signup not successfull",success:false})
    }

}
 export async function GET(request:NextRequest){
    try{
        const allSignUpData = await SignupSchemaData.find()
        return NextResponse.json({message:"All signup data found",success:true,allSignUpData});
    }catch(error:any){
        return NextResponse.json({message:"All signup data not found",success:false});
    }

 }