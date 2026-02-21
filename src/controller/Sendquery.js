const nodemailer = require('nodemailer');
const EnqueryModel = require('../modal/sentmailmodel');
const { USERGMAIL, USERAPPPASS } = require('../config/envconfig');

const Sendenquery = async (req, res) => {
  try {
    

    const { fullname, email, phone, message } = req.body;

    // Validation
    if (!fullname || !email) {
      return res.status(400).json({
        success: false,
        message: "Fullname and Email are required"
      });
    }

    // Save to DB
    const enquery = new EnqueryModel({
      fullname,
      email,
      phone,
      message
    });

    await enquery.save();

    // Mail Transport
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USERGMAIL,
        pass: USERAPPPASS,
      }
    });

    // Send Mail
    await transport.sendMail({
      from: `"Website Enquiry" <${USERGMAIL}>`,
      to: USERGMAIL,
      subject: "📩 New Enquiry Received",
      html: `
      <div style="background:#f4f6f8;padding:30px;font-family:Arial;">
        <div style="max-width:600px;margin:auto;background:#fff;border-radius:8px;">
          <div style="background:#1e4d8c;color:#fff;padding:20px;">
            <h2>📨 New Enquiry</h2>
          </div>
          <div style="padding:20px;">
            <p><b>Name:</b> ${fullname}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone || "Not provided"}</p>
            <p><b>Message:</b> ${message || "No message"}</p>
          </div>
        </div>
      </div>
      `
    });

    return res.status(201).json({
      success: true,
      message: "Enquiry  email sent successfully"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  Sendenquery
};