import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
import { SignupSchemaData } from "@/lib/model/models";
import bctypt from 'bcryptjs'
import Jwt from "jsonwebtoken";
ConnectionDB()
export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json()
        const{
            emailOrnumber,
            password,
        }=reqBody

        const findData = await SignupSchemaData?.findOne({emailOrnumber:emailOrnumber})||null
        if(!findData){
            return NextResponse.json({message1:"Email is incorrect!",success:false})
        }else{
            const verifyPassword = await bctypt.compare(password,findData.password)
            if(!verifyPassword){
                return NextResponse.json({message2:"Password is incorrect!",success:false})
            }else{
                const tokenData = {
                    id:findData._id,
                    name:findData.name
                }
                const token = Jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})
                const response = NextResponse.json({message:"Login successfully",success:true})
                response.cookies.set("token",token,{httpOnly:true})
                return response
            
            }
        }

        

    }catch(error:any){
        return NextResponse.json({message:"Login not successfull",success:false})
    }

}