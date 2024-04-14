import { ConnectionDB } from "@/connection/connectionDB";
import { TalentedStudentSchema } from "@/lib/model/models";
import { NextRequest, NextResponse } from "next/server";
ConnectionDB();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, age, Class, awardFor, desciptions, address, img } = reqBody;
    if (
      name == "" ||
      age == "" ||
      Class == "" ||
      awardFor == "" ||
      desciptions == "" ||
      address == "" ||
      img == ""
    ) {
      return NextResponse.json({
        message: "File is not found",
        success: false,
      });
    } else {
      const PresaveData = await new TalentedStudentSchema({
        name,
        age,
        Class,
        awardFor,
        desciptions,
        address,
        img,
      });
      await PresaveData.save();
      return NextResponse.json({ message: "File is found", success: true });
    }
  } catch (error: any) {
    return NextResponse.json({ message: "File is not found", success: false });
  }
}

export async function GET() {
  try {
    const allTalents = await TalentedStudentSchema.find();
    return NextResponse.json({
      message: "Data is found",
      success: true,
      allTalents,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "Data is not found", success: false });
  }
}
