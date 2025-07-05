import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import ContactMessage from "@/models/ContactMessage";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { ids } = await req.json();

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: "بيانات غير صالحة" }, { status: 400 });
    }

    await ContactMessage.deleteMany({ _id: { $in: ids } });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "خطأ في الخادم" }, { status: 500 });
  }
}
