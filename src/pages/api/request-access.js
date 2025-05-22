// pages/api/request-access.js
import { db } from "../../auth/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import nodemailer from "nodemailer";
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body;

  const code = crypto.randomBytes(3).toString("hex").toUpperCase();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hrs

  console.log("EMAIL:", process.env.ADMIN_EMAIL);
  console.log("PASS:", process.env.ADMIN_EMAIL_PASS);


  try {
    await addDoc(collection(db, "accessRequests"), {
      name,
      email,
      message,
      code,
      expiresAt,
      createdAt: serverTimestamp(),
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASS,
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "abimael1992g@gmail.com",
      subject: "New Access Request",
      text: `From: ${name} <${email}>\n\nMessage: ${message}\n\nAccess Code: ${code} (expires in 24h)`,
    });


    res.status(200).json({ success: true, code });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}
