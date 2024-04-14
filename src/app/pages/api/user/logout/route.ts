import { NextRequest,NextResponse } from "next/server";

export async function GET(){
    try{

        const response = NextResponse.json({message:"Logout successfully",success:true})
        response.cookies.delete("token")
        return response
    

    }catch(error:any){
        NextResponse.json({message:"Logout not successfull",success:false})
    }
}