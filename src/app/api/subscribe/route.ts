import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, name } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey  = process.env.CONVERTKIT_API_KEY;
  const formId  = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const ckRes = await fetch(
    "https://api.kit.com/v4/subscribers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": apiKey,
      },
      body: JSON.stringify({
        email_address: email,
        first_name:    name || "",
        form_id:       Number(formId),
      }),
    }
  );

  if (!ckRes.ok) {
    const err = await ckRes.text();
    console.error("ConvertKit error:", err);
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
