import {
  AwardGettingEventsSchema,
  TalentedStudentSchema,
} from "@/lib/model/models";
import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB();
export async function DELETE(request: NextRequest, res: any) {
  const UserId = res.params.delete;
  const Id = { _id: UserId };
  const alltalentedData = await TalentedStudentSchema.findById(Id);
  if (alltalentedData == null) {
    await AwardGettingEventsSchema.findByIdAndDelete(Id);
  } else {
    await TalentedStudentSchema.findByIdAndDelete(Id);
  }
  return NextResponse.json({ message: "file is deleted", success: true });
}
