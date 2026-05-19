export default function Hero() {
  return (
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
  );
}
