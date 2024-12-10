import { NextResponse } from "next/server";
import studiosData from "@/app/data/studios.json"; 

export async function GET() {
  try {
    if (!studiosData || studiosData.length === 0) {
      return new NextResponse("No studios data available.", { status: 204 });
    }

    return NextResponse.json(studiosData);
  } catch (error) {

    console.log("[STUDIOS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 })
  }
}

