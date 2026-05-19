import { useEffect } from "react";
import AOS from "aos";
import Typed from "typed.js";
import GLightbox from "glightbox";

import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";

export function useTemplateEffects() {
  /**
   * AOS
   */
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });

    AOS.refresh();
  }, []);

  /**
   * TYPED.JS
   */
  useEffect(() => {
    const typedElement = document.querySelector(".typed");

    if (!typedElement) return;

    const strings =
      typedElement
        .getAttribute("data-typed-items")
        ?.split(",") || [];

    const typed = new Typed(".typed", {
      strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  /**
   * MOBILE NAV
   */
  useEffect(() => {
    const btn = document.querySelector(".mobile-nav-toggle");

    if (!btn) return;

    const toggleNav = () => {
      document.body.classList.toggle("mobile-nav-active");

      btn.classList.toggle("bi-list");
      btn.classList.toggle("bi-x");
    };

    btn.addEventListener("click", toggleNav);

    return () => {
      btn.removeEventListener("click", toggleNav);
    };
  }, []);

  /**
   * CLOSE MOBILE NAV ON LINK CLICK
   */
  useEffect(() => {
    const links = document.querySelectorAll("#navmenu a");

    const closeNav = () => {
      document.body.classList.remove("mobile-nav-active");
    };

    links.forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", closeNav);
      });
    };
  }, []);

  /**
   * SCROLL TOP
   */
  useEffect(() => {
    const scrollTop = document.querySelector(".scroll-top");

    if (!scrollTop) return;

    const toggleScrollTop = () => {
      if (window.scrollY > 100) {
        scrollTop.classList.add("active");
      } else {
        scrollTop.classList.remove("active");
      }
    };

    const scrollToTop = (e: Event) => {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollTop.addEventListener("click", scrollToTop);

    window.addEventListener("scroll", toggleScrollTop);

    return () => {
      scrollTop.removeEventListener("click", scrollToTop);
      window.removeEventListener("scroll", toggleScrollTop);
    };
  }, []);

  /**
   * GLIGHTBOX
   */
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  /**
   * NAVBAR ACTIVE SCROLLSPY
   */
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(
      "#navmenu a"
    );

    const sections =
      document.querySelectorAll<HTMLElement>("section[id]");

    const onScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          currentSection = section.id;
        }
      });

      links.forEach((link) => {
        link.classList.remove("active");

        if (
          link.getAttribute("href") === `#${currentSection}`
        ) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}