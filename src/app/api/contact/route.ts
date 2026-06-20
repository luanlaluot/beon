import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, phone, email, service, message } = await req.json();

    // Configure the transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Mặc định dùng Gmail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Reply to the customer
      subject: `[BEON Website] Liên hệ mới từ ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-w: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f0f0f0;">
          <!-- Header -->
          <div style="background-color: #0A4A87; padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px;">BEON WEBSITE</h1>
            <p style="color: #A0C6EB; margin: 8px 0 0 0; font-size: 15px;">Thông báo liên hệ mới từ khách hàng</p>
          </div>
          
          <!-- Body -->
          <div style="padding: 40px 30px;">
            <h2 style="color: #333333; font-size: 20px; margin-top: 0; margin-bottom: 25px;">Xin chào đội ngũ BEON,</h2>
            <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
              Một khách hàng vừa gửi yêu cầu tư vấn thông qua form liên hệ trên website. Dưới đây là thông tin chi tiết:
            </p>
            
            <!-- Customer Info Box -->
            <div style="background-color: #f8faff; border: 1px solid #e1e9f4; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
              <h3 style="color: #0A4A87; font-size: 16px; margin-top: 0; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.5px;">📋 Thông tin khách hàng</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>

                  <td style="padding: 10px 0; border-bottom: 1px solid #e1e9f4; color: #222222; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e1e9f4; color: #0A4A87; font-weight: 600;"><a href="tel:${phone}" style="color: #0A4A87; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e1e9f4; color: #0A4A87; font-weight: 600;"><a href="mailto:${email}" style="color: #0A4A87; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #222222; font-weight: 600;">${
                    service === 'elearning' ? 'Chuyển đổi E-learning' :
                    service === 'training' ? 'Đào tạo Dịch vụ Khách hàng' :
                    service === 'consulting' ? 'Tư vấn Doanh nghiệp' :
                    service === 'other' ? 'Khác' : service
                  }</td>
                </tr>
              </table>
            </div>
            
            <!-- Message Box -->
            <h3 style="color: #333333; font-size: 16px; margin-bottom: 15px;">💬 Lời nhắn từ khách hàng:</h3>
            <div style="background-color: #ffffff; border-left: 4px solid #F59E0B; padding: 20px; border-radius: 0 8px 8px 0; color: #444444; font-size: 15px; line-height: 1.7; font-style: italic; border-top: 1px solid #eaeaea; border-right: 1px solid #eaeaea; border-bottom: 1px solid #eaeaea;">
              "${message ? message.replace(/\n/g, '<br/>') : 'Không có lời nhắn đi kèm.'}"
            </div>
            
            <!-- CTA -->
            <div style="text-align: center; margin-top: 40px;">
              <a href="mailto:${email}?subject=Phản hồi từ BEON - Cảm ơn bạn đã liên hệ" style="display: inline-block; background-color: #0A4A87; color: #ffffff; font-weight: 600; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-size: 15px;">Trả lời Email này ngay</a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #eeeeee;">
            <p style="color: #999999; font-size: 13px; margin: 0; line-height: 1.5;">
              Email này được gửi tự động từ hệ thống website BEON.<br/>
              Vui lòng không trả lời trực tiếp email hệ thống này.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Gửi liên hệ thành công!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Lỗi khi gửi email. Vui lòng thử lại sau.' },
      { status: 500 }
    );
  }
}
