import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
import { AdminSignupSchemaData, SignupSchemaData } from "@/lib/model/models";
import bctypt from "bcryptjs";
ConnectionDB();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { emailOrnumber, password } = reqBody;

    const findData =
      (await AdminSignupSchemaData?.findOne({
        emailOrnumber: emailOrnumber,
      })) || null;
    if (!findData) {
      return NextResponse.json({
        message: "Email is incorrect!",
        success: false,
      });
    } else {
      const verifyPassword = await bctypt.compare(password, findData.password);
      if (!verifyPassword) {
        return NextResponse.json({
          message: "Password is incorrect!",
          success: false,
        });
      } else {
        return NextResponse.json({
          message: "Password is correct!",
          success: true,
          findData,
        });
      }
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Login not successfull",
      success: false,
    });
  }
}
