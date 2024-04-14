import { ApplyDateSchema } from "@/lib/model/models";
import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB()
export async function GET(request: NextRequest, res: any) {
  try {
    const reqId = res.params.editdata;
    const findData = await ApplyDateSchema.findById(reqId);
    return NextResponse.json({
      message: "Data is found",
      success: true,
      findData,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "Data is not found", success: false });
  }
}
