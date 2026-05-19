export default function About() {
  return (
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
                  <strong>Profile: </strong> <span>Full Stack Developer</span>
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
                development. Proficient in JavaScript, PHP, and MySQL. I have
                experience building web and software applications.
              </p>
              <p>
                Additionally, I have some experience with C++, Java, Python,
                Flutter (mobile development), MSSQL, and Backend-as-a-Service
                (BaaS) platforms like Firebase and Supabase.
              </p>
              <p>
                I thrive in agile environments, writing clean, efficient, and
                maintainable code. Always eager to learn and innovate, I’m
                excited to contribute my technical skills to impactful projects
                and dynamic teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
