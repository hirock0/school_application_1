import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
import { NoticeDataSchema } from "@/lib/model/models";
ConnectionDB();
export async function DELETE(request: NextRequest, res: any) {
  try {
    const reqId = res.params.delete_pdf;
    const id = { _id: reqId };
    await NoticeDataSchema.findByIdAndDelete(id);
    return NextResponse.json({ message: "File is deleted", success: true });
  } catch (error: any) {
    return NextResponse.json({
      message: "File is not deleted",
      success: false,
    });
  }
}
