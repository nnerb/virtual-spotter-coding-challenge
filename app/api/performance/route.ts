import { NextResponse } from "next/server";
import performanceData from "@/app/data/studio-performance-data.json"; 

export async function GET() {
  try {
    if (!performanceData || performanceData.length === 0) {
      return new NextResponse("No performance data available.", { status: 204 });
    }

    return NextResponse.json(performanceData);
  } catch (error) {

    console.log("[PERFORMANCE_GET]", error);
    return new NextResponse("Internal Error", { status: 500 })
  }
}
