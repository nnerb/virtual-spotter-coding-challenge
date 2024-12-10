import studiosData from "@/app/data/studios.json"; 
import { NextResponse } from "next/server";

interface StudioIdProps {
  params: Promise<{id: string}>
}

export async function DELETE(
  request: Request,
  { params } : StudioIdProps
) {
  try {

    const { id } = await params; 

    if (!id) {
      return new NextResponse("Studio ID is required" , { status: 400 })
    }

    const studioExists = studiosData.some(studio => studio.id.toString() === id);

    if (!studioExists) {
      // If the studio ID doesn't exist
      return new NextResponse(`Studio with ID ${id} not found`, { status: 404 });
    }

    const updatedStudiosData = studiosData.filter(studio => studio.id.toString() !== id)

    return NextResponse.json(updatedStudiosData);

  } catch (error) {

    console.log("[STUDIOS_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 })
  }
}
