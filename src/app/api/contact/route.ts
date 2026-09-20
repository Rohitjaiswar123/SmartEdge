import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, services, budget, timeline, company, message } = body;

    // Basic server-side validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // Support both multi-service array and single service string
    const selectedServicesList: string[] =
      Array.isArray(services) && services.length > 0
        ? services
        : service
        ? [service]
        : ["Website Development"];

    const servicesFormatted = selectedServicesList.join(", ");

    // Parse recipient emails from environment variable (comma-separated)
    const defaultRecipients = ["sahilshaikh446@gmail.com", "rohit.s.jaiswar@gmail.com"];
    const envEmails = process.env.NOTIFICATION_EMAILS;
    const recipientEmails = envEmails
      ? envEmails.split(",").map((e) => e.trim()).filter(Boolean)
      : defaultRecipients;

    const leadId = `SE-${Date.now().toString().slice(-6)}`;
    const submissionTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    const waPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
    const whatsappUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(
      `Hi ${name}, thank you for reaching out to SmartEdge regarding your project scope (${servicesFormatted}).`
    )}`;

    // Build Service Pills HTML for email
    const servicesPillsHtml = selectedServicesList
      .map(
        (s) =>
          `<span style="display: inline-block; background: #dbeafe; color: #1e40af; font-size: 13px; font-weight: 700; padding: 6px 12px; border-radius: 8px; margin: 3px 6px 3px 0;">${s}</span>`
      )
      .join("");

    // Premium HTML Email Template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SmartEdge Lead Notification</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #0f172a; margin: 0; padding: 30px 15px; -webkit-font-smoothing: antialiased;">
          
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04);">
            
            <!-- Sleek Top Header -->
            <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 36px 32px; text-align: center; border-bottom: 3px solid #2563eb; position: relative;">
              <div style="display: inline-block; background: rgba(37, 99, 235, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); color: #60a5fa; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
                🚀 New Project Lead (${selectedServicesList.length} Services Requested)
              </div>
              <h1 style="color: #ffffff; font-size: 26px; font-weight: 800; margin: 0 0 6px 0; letter-spacing: -0.5px;">
                SmartEdge Lead Blueprint
              </h1>
              <p style="color: #94a3b8; font-size: 13px; margin: 0;">
                Reference Tag: <span style="color: #38bdf8; font-family: monospace; font-weight: 700;">${leadId}</span> &bull; ${submissionTime} IST
              </p>
            </div>

            <!-- Main Content Container -->
            <div style="padding: 32px 28px;">
              
              <!-- Quick Response Buttons Bar -->
              <div style="text-align: center; margin-bottom: 28px;">
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td width="49%" align="center">
                      <a href="mailto:${email}" style="display: block; background: #2563eb; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; padding: 12px 16px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);">
                        ✉️ Email Client
                      </a>
                    </td>
                    <td width="2%"></td>
                    <td width="49%" align="center">
                      <a href="${whatsappUrl}" target="_blank" style="display: block; background: #059669; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; padding: 12px 16px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(5, 150, 105, 0.2);">
                        💬 Chat on WhatsApp
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Key Metrics Grid -->
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; margin-bottom: 28px;">
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td style="padding: 6px 0; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                      SELECTED SERVICES (${selectedServicesList.length})
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 16px;">
                      <div>${servicesPillsHtml}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table width="100%" cellPadding="0" cellSpacing="0">
                        <tr>
                          <td width="50%" style="vertical-align: top;">
                            <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                              TARGET BUDGET
                            </div>
                            <div style="font-size: 14px; font-weight: 700; color: #047857; background: #ecfdf5; display: inline-block; padding: 4px 10px; border-radius: 6px; border: 1px solid #a7f3d0;">
                              💰 ${budget || "Not Specified"}
                            </div>
                          </td>
                          <td width="50%" style="vertical-align: top;">
                            <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                              DESIRED TIMELINE
                            </div>
                            <div style="font-size: 14px; font-weight: 700; color: #4338ca; background: #eef2ff; display: inline-block; padding: 4px 10px; border-radius: 6px; border: 1px solid #c7d2fe;">
                              ⏱️ ${timeline || "Immediate"}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Client Information Section -->
              <div style="margin-bottom: 28px;">
                <h3 style="font-size: 13px; font-weight: 800; text-transform: uppercase; color: #475569; letter-spacing: 0.8px; margin: 0 0 12px 4px;">
                  👤 Client Contact Card
                </h3>
                <div style="border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
                  <table width="100%" cellPadding="0" cellSpacing="0" style="border-collapse: collapse;">
                    <tr style="background: #ffffff; border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #64748b; width: 35%;">Client Name</td>
                      <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #0f172a;">${name}</td>
                    </tr>
                    <tr style="background: #f8fafc; border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #64748b;">Business Email</td>
                      <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #2563eb;">
                        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                    <tr style="background: #ffffff; border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #64748b;">Phone / WhatsApp</td>
                      <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #0f172a;">
                        <a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>
                      </td>
                    </tr>
                    <tr style="background: #f8fafc;">
                      <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #64748b;">Company / Brand</td>
                      <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #0f172a;">${company || "N/A (Individual)"}</td>
                    </tr>
                  </table>
                </div>
              </div>

              <!-- Project Notes Section -->
              <div style="margin-bottom: 16px;">
                <h3 style="font-size: 13px; font-weight: 800; text-transform: uppercase; color: #475569; letter-spacing: 0.8px; margin: 0 0 12px 4px;">
                  📌 Specific Objectives & Requirements
                </h3>
                <div style="background: #f0f9ff; border-left: 4px solid #0284c7; border-radius: 0 14px 14px 0; padding: 18px 20px; font-size: 14px; color: #0369a1; line-height: 1.6;">
                  ${message ? message.replace(/\n/g, "<br>") : "<em>No specific project notes provided by client.</em>"}
                </div>
              </div>

            </div>

            <!-- Modern Footer -->
            <div style="background: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; line-height: 1.5;">
              <p style="margin: 0 0 4px 0;">⚡ <strong>SmartEdge Lead Intelligence System</strong></p>
              <p style="margin: 0;">Automated lead routing active for <span style="color: #64748b;">${recipientEmails.join(", ")}</span></p>
            </div>

          </div>

        </body>
      </html>
    `;

    console.log("-----------------------------------------");
    console.log("⚡ [SmartEdge Lead Capture Received] ⚡");
    console.log(`Lead ID: ${leadId}`);
    console.log(`Recipients configured:`, recipientEmails);
    console.log(`Name: ${name} | Email: ${email} | Phone: ${phone}`);
    console.log(`Services (${selectedServicesList.length}): ${servicesFormatted} | Budget: ${budget} | Timeline: ${timeline}`);
    console.log("-----------------------------------------");

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const resendApiKey = process.env.RESEND_API_KEY;

    // Check if SMTP credentials are provided (e.g. Gmail App Password)
    if (smtpUser && smtpPass) {
      console.log("📧 Dispatching lead email via SMTP / Gmail Nodemailer...");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"SmartEdge Leads" <${smtpUser}>`,
        to: recipientEmails.join(", "),
        subject: `⚡ New Project Request from ${name} [${selectedServicesList.length} Services]`,
        html: emailHtml,
      });

      console.log(`✅ Email successfully sent via SMTP to ALL recipients: ${recipientEmails.join(", ")}`);
    } else if (resendApiKey) {
      console.log("📧 Dispatching lead email via Resend API...");
      const resend = new Resend(resendApiKey);

      // Try sending to all configured recipients
      let { data, error } = await resend.emails.send({
        from: "SmartEdge Leads <onboarding@resend.dev>",
        to: recipientEmails,
        subject: `⚡ New Project Request from ${name} [${selectedServicesList.length} Services]`,
        html: emailHtml,
      });

      // Handle Resend onboarding testing domain limitation
      if (error && (error as { statusCode?: number }).statusCode === 403) {
        console.warn(
          "⚠️ RESEND RESTRICTION: Resend's free testing domain (onboarding@resend.dev) ONLY allows sending emails to the account owner (rohit.s.jaiswar@gmail.com)."
        );
        console.warn(
          "⚠️ It BLOCKS sending emails to sahilshaikh446@gmail.com until you add a custom domain on resend.com/domains or provide Gmail SMTP credentials in .env.local!"
        );

        const fallbackRes = await resend.emails.send({
          from: "SmartEdge Leads <onboarding@resend.dev>",
          to: "rohit.s.jaiswar@gmail.com",
          subject: `⚡ [TEST] New Project Request from ${name} [${selectedServicesList.length} Services]`,
          html: emailHtml,
        });

        if (fallbackRes.error) {
          console.error("Resend Fallback Error:", fallbackRes.error);
        } else {
          console.log(
            "✅ Email delivered to account owner (rohit.s.jaiswar@gmail.com):",
            fallbackRes.data
          );
        }
      } else if (error) {
        console.error("Resend Email Dispatch Error:", error);
      } else {
        console.log("✅ Email successfully dispatched via Resend:", data);
      }
    } else {
      console.log("ℹ️ Neither SMTP credentials nor RESEND_API_KEY set in .env.local.");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your project scope has been successfully received by SmartEdge technical architects.",
        leadId,
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
