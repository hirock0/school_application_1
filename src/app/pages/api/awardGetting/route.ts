import { AwardGettingEventsSchema } from "@/lib/model/models";
import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, awardReason, awardGettingPlace, Date, eventPics } = reqBody;

    if (
      name == "" ||
      awardReason == "" ||
      awardGettingPlace == "" ||
      Date == "" ||
      eventPics == ""
    ) {
      return NextResponse.json({
        message: "file is not found",
        success: false,
      });
    } else {
      const PreSaveData = await new AwardGettingEventsSchema({
        name,
        awardReason,
        awardGettingPlace,
        Date,
        eventPics,
      });
      await PreSaveData.save();
      return NextResponse.json({ message: "file is found", success: true });
    }
  } catch (error: any) {
    return NextResponse.json({ message: "file is not found", success: false });
  }
}
export async function GET() {
  try {
    const allEventDetails = await AwardGettingEventsSchema.find();
    return NextResponse.json({
      message: "file is found",
      success: true,
      allEventDetails,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "file is not found", success: false });
  }
}
