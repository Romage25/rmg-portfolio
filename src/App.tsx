import "./App.css";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useTemplateEffects } from "./hooks/useTemplaceEffects";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const preloader = document.querySelector("#preloader");

    if (preloader) {
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }

    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  useTemplateEffects();
  return (
    <>
      <Header />

      <main className="main">
        {/* Hero Section  */}
        <Hero />
        {/* !Hero Section */}

        {/* About Section */}
        <About />
        {/* !About Section */}

        {/* Resume Section */}
        <Resume />
        {/* !Resume Section */}

        {/* Portfolio Section */}
        <Portfolio />
        {/* !Portfolio Section */}

        {/* Contact Section */}
        <Contact />
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
