import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Record from "@/models/Record";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const rec = await Record.findById(params.id).lean();
  if (!rec) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(rec);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const data = await request.json();
  const updated = await Record.findByIdAndUpdate(params.id, data, { new: true });
  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(updated);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  await Record.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Deleted" });
}
