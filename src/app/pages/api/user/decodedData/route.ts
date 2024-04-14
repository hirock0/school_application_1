import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB()
export async function GET(request:NextRequest){
    try{
        const token = request.cookies.get("token")?.value || ""
        const decodeddata = Jwt.decode(token);
        return NextResponse.json({message:"Token successfully decodede",success:true,decodeddata})

    }catch(error:any){
        return NextResponse.json({message:"Token not successfully decodede",success:false})
    }
   
}