import "./App.css";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSent(false);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      setSent(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src="assets/img/logo.png" alt="" />
            <h1 className="sitename ">RMG Dev</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home <br />
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>

      <main className="main">
        {/* Hero Section  */}
        <section id="hero" className="hero section dark-background">
          <img src="assets/img/hero-img.jpg" alt="" data-aos="fade-in" />

          <div
            className="container d-flex flex-column align-items-center justify-content-center text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2>I am Rodel Gerodias</h2>
            <p>
              <span
                className="typed"
                data-typed-items="Analyze, Code, Build, Optimize, Innovate"
              ></span>
            </p>
          </div>
        </section>
        {/* !Hero Section */}

        {/* About Section */}
        <section id="about" className="about section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="row justify-content-between gy-4">
                  <div className="col-lg-5">
                    <img
                      src="assets/img/profile-img.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-7 about-info">
                    <p>
                      <strong>Name: </strong> <span>Rodel Gerodias</span>
                    </p>
                    <p>
                      <strong>Profile: </strong>{" "}
                      <span>Full Stack Developer</span>
                    </p>
                    <p>
                      <strong>Email: </strong>{" "}
                      <span>rodelgerodias25@gmail.com</span>
                    </p>
                    <p>
                      <strong>Phone: </strong> <span>+639605154797</span>
                    </p>
                  </div>

                  {/* Download Resume Button (Full Width Below Image & Info) */}
                  <div className="col-12 text-center mt-5">
                    <a
                      href="assets/resume/Rodel-Gerodias-Resume-2025.pdf"
                      download
                      className="btn btn-lg btn-outline-primary px-4 py-3 rounded-pill shadow-sm fw-bold d-inline-flex align-items-center"
                    >
                      <i className="bi bi-download me-2"></i> Download My Resume
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="about-me">
                  <h4>About me</h4>
                  <p>
                    I’m a detail-oriented and passionate developer with a strong
                    foundation in programming, problem-solving, and software
                    development. Proficient in JavaScript, PHP, and MySQL. I
                    have experience building web and software applications.
                  </p>
                  <p>
                    Additionally, I have some experience with C++, Java, Python,
                    Flutter (mobile development), MSSQL, and
                    Backend-as-a-Service (BaaS) platforms like Firebase and
                    Supabase.
                  </p>
                  <p>
                    I thrive in agile environments, writing clean, efficient,
                    and maintainable code. Always eager to learn and innovate,
                    I’m excited to contribute my technical skills to impactful
                    projects and dynamic teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* !About Section */}

        {/* Resume Section */}
        <section id="resume" className="resume section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>
              Passionate about problem-solving, writing clean code, and building
              efficient, scalable solutions in agile environments.
            </p>
          </div>
          {/* !End Section Title */}

          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Summary</h3>

                <div className="resume-item pb-0">
                  <h4>RODEL GERODIAS</h4>
                  <p>
                    <em>
                      Detail-oriented and passionate Junior Software Engineer
                      with over a year of experience, specializing in web
                      development and building efficient, scalable solutions.
                    </em>
                  </p>
                  <ul>
                    <li>
                      📍 #738 San Roque St., San Pedro City, Laguna, Philippines
                    </li>
                    <li>📞 +639605154797</li>
                    <li>📧 rodelgerodias25@gmail.com</li>
                  </ul>
                </div>
                {/* !Resume Item */}

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Bachelor of Science in Information Technology</h4>
                  <h5>2019 - 2023</h5>
                  <p>
                    <em>United Bayanihan Proper Rd, San Pedro, Laguna</em>
                  </p>
                  <p>
                    Gained a strong foundation in software development and
                    database management. Developed hands-on experience with
                    modern frameworks and technologies, preparing for real-world
                    IT challenges.
                  </p>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Junior Software Engineer</h4>
                  <h5>February 2024 - Present</h5>
                  <p>
                    <em>
                      1949 San Marcelino St, Malate, Manila, 1004 Metro
                      Manila{" "}
                    </em>
                  </p>
                  <ul>
                    <li>
                      Developed and maintained both front-end and back-end
                      components of web systems using PHP, MySQL, Bootstrap, and
                      JQuery.
                    </li>
                    <li>
                      Designed and implemented scalable database structures
                      using MySQL.
                    </li>
                    <li>
                      Manage the full project lifecycle from architecture design
                      to deployment and post-launch maintenance (with minimal
                      assistance).
                    </li>
                    <li>
                      Optimize performance and ensure security best practices
                      across the stack.
                    </li>
                    <li>
                      Researched and recommended cutting-edge technologies to
                      streamline workflows and enhance system performance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* !Resume Section */}

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Projects</p>
          </div>
          {/* !Section Title  */}

          <div className="container">
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-personal">Personal</li>
              </ul>
              {/* !Portfolio Filters */}

              <div
                className="row gy-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img
                    src="assets/img/portfolio/app-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>SSV HOA Website</h4>
                    <p>Homeowners Association Website.</p>
                    <a
                      href="assets/img/portfolio/app-1.jpg"
                      title="SSV HOA Website"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="http://ssv.vercel.app/"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* !End Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-personal">
                  <img
                    src="assets/img/portfolio/personal-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Random Quote Machine</h4>
                    <p>Add a quote for other people to see.</p>
                    <a
                      href="assets/img/portfolio/personal-1.jpg"
                      title="Random Quote Machine"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="http://random-quotessss.netlify.app/"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* !Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-personal">
                  <img
                    src="assets/img/portfolio/personal-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Calculator</h4>
                    <p>Calculator.</p>
                    <a
                      href="assets/img/portfolio/personal-2.jpg"
                      title="Calculator"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="http://javascript-calculatorrrr.netlify.app/"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* !Portfolio Item */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-personal">
                  <img
                    src="assets/img/portfolio/personal-3.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Triviona</h4>
                    <p>Triviona Quiz App.</p>
                    <a
                      href="assets/img/portfolio/personal-3.png"
                      title="Calculator"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="https://triviona.vercel.app/"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* !Portfolio Item  */}
              </div>
              {/* !Portfolio Container  */}
            </div>
          </div>
        </section>
        {/* !Portfolio Section */}

        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>
              Feel free to reach out! Whether you have a project idea, a
              question, or just want to connect, I’d love to hear from you.
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
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="col-md-12 text-center">
                    {loading && <div className="loading">Sending...</div>}
                    <div
                      className="error-message"
                      style={{ color: "red", display: "none" }}
                    ></div>
                    {sent && (
                      <div className="sent-message" style={{ color: "green" }}>
                        Your message has been sent. Thank you!
                      </div>
                    )}
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* !Contact Section */}
      </main>

      <footer
        id="footer"
        className="footer accent-background"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="container">
          <div className="copyright text-center">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Rodel Gerodias</strong>{" "}
              <span>All Rights Reserved</span>. Template by{" "}
              <a
                href="https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/?utm_source=chatgpt.com"
                target="_blank"
              >
                BootstrapMade
              </a>
            </p>
          </div>
          <div className="social-links d-flex justify-content-center">
            {/* <a href="#"><i className="bi bi-twitter-x"></i></a>  */}
            <a href="https://www.facebook.com/rodel.gerodias.7/">
              <i className="bi bi-facebook"></i>
            </a>
            {/* <a href="#"><i className="bi bi-instagram"></i></a> */}
            <a href="https://www.linkedin.com/in/rodel-gerodias-b0a49326b/?originalSubdomain=ph">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Preloader */}
      <div id="preloader"></div>
    </>
  );
}

export default App;
