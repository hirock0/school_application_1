import { SignupSchemaData } from "@/lib/model/models";
import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB()
export async function POST(request:NextRequest){
    try{
    const reqBody = await request.json();
    const{
        userId,
        userImage
    }=reqBody
    const id = {_id:userId}
    const img = {image:userImage};
    if(img.image == ""){
        return NextResponse.json({message:"Image is blank",success:false})
    }else{
         await SignupSchemaData.findByIdAndUpdate(id,img)
        return NextResponse.json({message:"Image is updated",success:true})
    }    
}catch(error:any){
        return NextResponse.json({message:"Image is not updated",success:false})
    }
}