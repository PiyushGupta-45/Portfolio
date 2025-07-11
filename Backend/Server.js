require('dotenv').config(); // Load environment variables

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Optional: root route for Render health check
app.get('/', (req, res) => {
  res.send('✅ Email backend is running!');
});

// POST route to receive contact form data and send email
app.post('/send-email', async (req, res) => {
  const { name, contact, email } = req.body;

  if (!name || !contact || !email) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,  // from .env or Render env vars
      pass: process.env.GMAIL_PASS   // from .env or Render env vars
    }
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: '📬 New Contact Form Submission',
    text: `Name: ${name}\nContact: ${contact}\nEmail: ${email}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: '✅ Email sent successfully!' });
  } catch (error) {
    console.error('❌ Email send error:', error);
    res.status(500).json({ message: '❌ Failed to send email. Please try again later.' });
  }
});

// Use dynamic port for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
