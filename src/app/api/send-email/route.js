import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fullName, phoneNumber, email, message } = await req.json();

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || 'srsb.barcode@gmail.com',
      subject: `New Inquiry from ${fullName}`,
      text: `Name: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}`,
      html: `<h2>New Inquiry</h2><p><b>Name:</b> ${fullName}</p><p><b>Phone:</b> ${phoneNumber}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
