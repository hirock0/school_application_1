import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
import { NoticeDataSchema } from "@/lib/model/models";
ConnectionDB();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { pdfName, pdfFile, recentDate } = reqBody;
    const PreSaveData = await new NoticeDataSchema({
      pdfName,
      pdfFile,
      recentDate,
    });
    await PreSaveData.save();
    return NextResponse.json({ message: "File is found", success: true });
  } catch (error: any) {
    return NextResponse.json({ message: "File is not found", success: false });
  }
}

export async function GET(request: NextRequest) {
  try {
    const reqData = await NoticeDataSchema.find().sort({ dateField: -1 });
    return NextResponse.json({
      message: "File is found",
      success: true,
      reqData,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "File is not found", success: false });
  }
}
