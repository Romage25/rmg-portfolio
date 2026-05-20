import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSent(false);
    setError("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setLoading(false);
      setSent(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // auto hide success after 3 seconds
      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Failed to send message.");
    }
  };
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Feel free to reach out! Whether you have a project idea, a question,
          or just want to connect, I’d love to hear from you.
        </p>
      </div>
      {/* !End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>
                    {" "}
                    #738 San Roque St., San Pedro City, Laguna, Philippines
                  </p>
                </div>
              </div>
            </div>
            {/* !Info Item */}

            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p>+639605154797</p>
                </div>
              </div>
            </div>
            {/* !End Info Item  */}

            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Me</h3>
                  <p>rodelgerodias25@gmail.com</p>
                </div>
              </div>
            </div>
            {/* !End Info Item */}
          </div>
        </div>

        <form
          id="contact-form"
          className="php-email-form"
          data-aos="fade-up"
          data-aos-delay="300"
          onSubmit={handleSubmit}
        >
          <div className="row gy-4">
            <div className="col-md-6">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12">
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12">
              <textarea
                id="message"
                className="form-control"
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-md-12 text-center">
              {loading && <div className="loading">Sending...</div>}

              {!loading && error && (
                <div className="error-message" style={{ color: "red" }}>
                  {error}
                </div>
              )}

              {!loading && sent && (
                <div className="sent-message" style={{ color: "green" }}>
                  Your message has been sent. Thank you!
                </div>
              )}

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
