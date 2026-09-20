import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, timeline, company, message } = body;

    // Basic server-side validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // In a production environment with Resend or Formspree API keys, we forward here:
    // e.g. await resend.emails.send(...) or fetch("https://formspree.io/f/xyz", ...)
    // For now we simulate secure processing and log the lead
    console.log("-----------------------------------------");
    console.log("⚡ [SmartEdge Lead Capture Received] ⚡");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Company: ${company || "N/A"}`);
    console.log(`Service: ${service || "General Inquiry"}`);
    console.log(`Budget: ${budget || "Not Specified"}`);
    console.log(`Timeline: ${timeline || "Immediate"}`);
    console.log(`Notes: ${message || "N/A"}`);
    console.log("-----------------------------------------");

    return NextResponse.json(
      {
        success: true,
        message: "Your project scope has been successfully received by SmartEdge technical architects.",
        leadId: `SE-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "Internal server error. Please retry or contact us directly on WhatsApp." },
      { status: 500 }
    );
  }
}
