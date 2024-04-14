import { AdminSignupSchemaData } from "@/lib/model/models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, emailOrnumber, password, address, image } = reqBody;
    const hashPassword = await bcrypt.hash(password, 10);
    const PresaveData = await new AdminSignupSchemaData({
      name,
      emailOrnumber,
      password: hashPassword,
      address,
      image,
    });
    await PresaveData.save();
    return NextResponse.json({ message: "signup successfully", success: true });
  } catch (error: any) {
    return NextResponse.json({
      message: "signup not successfull",
      success: false,
    });
  }
}
export async function GET() {
  try {
    const adminSignupData = await AdminSignupSchemaData.find();
    return NextResponse.json({
      message: "All signup data found",
      success: true,
      adminSignupData,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "All signup data not found",
      success: false,
    });
  }
}
