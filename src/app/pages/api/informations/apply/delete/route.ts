import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
import { ApplyDateSchema } from "@/lib/model/models";
ConnectionDB();

export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const reqID = reqData.applyId;
    const id = { _id: reqID };
    await ApplyDateSchema.findByIdAndDelete(id);
    return NextResponse.json({ message: "file is deleted", success: true });
  } catch (error: any) {
    return NextResponse.json({ message: "file is not deleted", success: false });
  }
}
