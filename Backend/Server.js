const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('✅ Email backend is running');
});

app.post('/send-email', async (req, res) => {
  const { name, contact, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pgupta3883@gmail.com',         // Your Gmail
      pass: 'srzotugzinvwfmxd'              // Your App Password (NO SPACES)
    }
  });

  const mailOptions = {
    from: 'pgupta3883@gmail.com',
    to: 'pgupta3883@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nContact: ${contact}\nEmail: ${email}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('❌ Email send error:', err);
    res.status(500).send({ message: 'Error sending email' });
  }
});

app.listen(5000, () => {
  console.log('🚀 Server started on http://localhost:5000');
});
