import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
import { ApplyDateSchema } from "@/lib/model/models";
ConnectionDB();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      name,
      fatherName,
      motherName,
      dateOfbirth,
      address,
      mobile,
      applicationFor,
      institutionName,
      image,
      useremail,
    } = reqBody;
    const preSavedata = await new ApplyDateSchema({
      name,
      fatherName,
      motherName,
      dateOfbirth,
      address,
      mobile,
      applicationFor,
      institutionName,
      image,
      useremail,
    });
    await preSavedata.save();
    return NextResponse.json({
      message: "Application is accepted",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Application is not accepted",
      success: false,
    });
  }
}

export async function GET() {
  try {
    const allApplyData = await ApplyDateSchema.find().sort({ dateField: -1 });
    return NextResponse.json({
      message: "Apply data is found",
      success: true,
      allApplyData,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Apply data is not found",
      success: false,
    });
  }
}
