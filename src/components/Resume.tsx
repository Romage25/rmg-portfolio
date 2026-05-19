export default function Resume() {
  return (
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
                  Detail-oriented and passionate Junior Software Engineer with
                  over a year of experience, specializing in web development and
                  building efficient, scalable solutions.
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
                Gained a strong foundation in software development and database
                management. Developed hands-on experience with modern frameworks
                and technologies, preparing for real-world IT challenges.
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
                  1949 San Marcelino St, Malate, Manila, 1004 Metro Manila{" "}
                </em>
              </p>
              <ul>
                <li>
                  Developed and maintained both front-end and back-end
                  components of web systems using PHP, MySQL, Bootstrap, and
                  JQuery.
                </li>
                <li>
                  Designed and implemented scalable database structures using
                  MySQL.
                </li>
                <li>
                  Manage the full project lifecycle from architecture design to
                  deployment and post-launch maintenance (with minimal
                  assistance).
                </li>
                <li>
                  Optimize performance and ensure security best practices across
                  the stack.
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
  );
}
