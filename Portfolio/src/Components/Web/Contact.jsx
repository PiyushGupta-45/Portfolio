import React, { useState } from "react";

const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL || "").trim();
const FORM_ENDPOINT = CONTACT_EMAIL ? `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}` : "";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = name === "contact" ? value.replace(/\D/g, "") : value;

    setMessage("");
    setIsError(false);
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      setMessage("Contact form is not configured. Set VITE_CONTACT_EMAIL in frontend env.");
      setIsError(true);
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          email: formData.email,
          _subject: "New Portfolio Contact Submission",
          _template: "table",
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setMessage(data.message || "Message sent successfully!");
        setIsError(false);
        setFormData({ name: "", contact: "", email: "" });
      } else {
        setMessage(data.message || "Failed to send. Please try again later.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Network error. Please try again.");
      setIsError(true);
    }
  };

  return (
    <section className="page-shell page-contact">
      <div className="page-card contact-card page-animate">
        <p className="page-kicker">Contact</p>
        <h1 className="page-title">Let&apos;s build something great</h1>
        <p className="page-text contact-lead">
          Enter your details and I will get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="e.g. John Doe"
            required
          />

          <label htmlFor="contact">Contact Number</label>
          <input
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            type="text"
            inputMode="numeric"
            placeholder="e.g. 9876543210"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="e.g. john@example.com"
            required
          />

          <button type="submit" className="page-btn page-btn-primary contact-submit">Send Message</button>
        </form>

        {message && (
          <div className={`contact-message ${isError ? "contact-message-error" : "contact-message-success"}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
