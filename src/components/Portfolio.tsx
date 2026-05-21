import Isotope from "isotope-layout";
import { useEffect } from "react";
import App1Img from "../assets/img/portfolio/app-1.jpg";
import Personal1Img from "../assets/img/portfolio/personal-1.jpg";
import Personal2Img from "../assets/img/portfolio/personal-2.jpg";
import Personal3Img from "../assets/img/portfolio/personal-3.png";

export default function Portfolio() {
  useEffect(() => {
    const iso = new Isotope(".isotope-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "masonry",
    });

    const filters = document.querySelectorAll(".portfolio-filters li");

    filters.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const target = e.currentTarget as HTMLElement;

        filters.forEach((el) => el.classList.remove("filter-active"));
        target.classList.add("filter-active");

        const filterValue = target.getAttribute("data-filter") || "*";
        iso.arrange({ filter: filterValue });
      });
    });

    return () => iso.destroy();
  }, []);

  return (
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
              <img src={App1Img} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>SSV HOA Website</h4>
                <p>Homeowners Association Website.</p>
                <a
                  href={App1Img}
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
              <img src={Personal1Img} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Random Quote Machine</h4>
                <p>Add a quote for other people to see.</p>
                <a
                  href={Personal1Img}
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
              <img src={Personal2Img} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Calculator</h4>
                <p>Calculator.</p>
                <a
                  href={Personal2Img}
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
              <img src={Personal3Img} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Triviona</h4>
                <p>Triviona Quiz App.</p>
                <a
                  href={Personal3Img}
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
  );
}
