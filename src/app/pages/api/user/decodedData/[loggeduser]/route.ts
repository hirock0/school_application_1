import { SignupSchemaData } from "@/lib/model/models";
import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB()

export async function GET(request:NextRequest,res:any){
    try{      
    const userId = {_id:res.params.loggeduser};
    const signupData = await SignupSchemaData.findById(userId)
    return NextResponse.json({message:"Data is found",success:true,signupData})
    }catch(error:any){
        return NextResponse.json({message:"Data is not found",success:false})
    }

}