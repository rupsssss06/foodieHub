import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <section className="contact-header">
        <p className="contact-tagline">WE'D LOVE TO HEAR FROM YOU</p>
        <h1>Get in Touch</h1>
        <p>Have a question, suggestion, or feedback? Send us a message!</p>
      </section>

      <section className="contact-card">
        {submitted ? (
          <div className="contact-success">
            <span>❤️</span>
            <h2>Thank you, {formData.name || "friend"}!</h2>
            <p>Your message has been submitted successfully.</p>
            <button type="button" onClick={() => setSubmitted(false)}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="contact-submit" type="submit">
              Send Message <span>→</span>
            </button>
          </form>
        )}
      </section>

      <p className="contact-note">Made with ❤️ for the FoodieHub community.</p>
    </main>
  );
};

export default Contact;
