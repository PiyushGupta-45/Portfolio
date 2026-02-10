require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const { GMAIL_USER, GMAIL_PASS } = process.env;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Email backend is running!');
});

app.post('/send-email', async (req, res) => {
  const { name, contact, email } = req.body;

  if (!name || !contact || !email) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  if (!GMAIL_USER || !GMAIL_PASS) {
    return res.status(500).json({ message: 'Email service is not configured on server.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: GMAIL_USER,
    to: GMAIL_USER,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nContact: ${contact}\nEmail: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error?.code || '', error?.message || error);

    if (error?.code === 'EAUTH') {
      return res.status(500).json({
        message: 'Email auth failed. Check GMAIL_USER and GMAIL_PASS (use Gmail App Password).',
      });
    }

    return res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
