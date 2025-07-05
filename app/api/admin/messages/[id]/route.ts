import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Chat from "@/models/Chat";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (!id || typeof id !== "string") {
    return NextResponse.json(
      { message: "Missing or invalid ID" },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    const deleted = await Chat.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { message: "Message not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Message deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
