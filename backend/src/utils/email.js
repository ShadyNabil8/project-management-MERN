const { transporter } = require("../config/transporter");
const { CustomError } = require("../middlewares/errorHandler");
require("dotenv").config();

const sendVerificationCode = async (receiverEmail, verificationCode) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.TRANSPORTER_EMAIL,
      to: receiverEmail,
      subject: "Verification Code",
      text: `Your verification code is: ${verificationCode}. Or click the link: http://localhost:5173/verify-email?verificationCode=${verificationCode}`,
    });
  } catch (error) {
    throw new CustomError("Failed to send verification email", 500);
  }
};

module.exports = { sendVerificationCode };
