import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
import { ApplyDateSchema } from "@/lib/model/models";
ConnectionDB();

export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const reqID = reqData.applyId;
    const id = { _id: reqID };
    const reqEdit = reqData.editData;
    await ApplyDateSchema.findByIdAndUpdate(id, reqEdit);
    return NextResponse.json({ message: "file is found", success: true });
  } catch (error: any) {
    return NextResponse.json({ message: "file is not found", success: false });
  }
}
