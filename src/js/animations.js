function checkingGsap() {
  // wait until gsap & ScrollTrigger available
  console.log("function");
  let chck_if_gsap_loaded = setInterval(function () {
    if (window.gsap && window.ScrollTrigger) {
      // register scrolTrigger
      gsap.registerPlugin(ScrollTrigger);

      // ... do your thing
      my_stuff();

      // clear interval
      clearInterval(chck_if_gsap_loaded);
    }
    {
      console.log("not found");
    }
  }, 500);

  function my_stuff() {
    gsap.to(".portfolio-wrapper", {
      scrollTrigger: {
        trigger: ".advantages",
        start: "bottom top",
        pin: ".portfolio", // Pin the portfolio section
        end: () => {
          const wrapperWidth =
            document.querySelector(".portfolio-wrapper").offsetWidth;
          const translatedWidth = wrapperWidth * 0.1; // Considering 50% translation
          return "+=" + (wrapperWidth - translatedWidth); // Adjusting the end position
        },
        scrub: true, // Smooth scrolling
      },
      x: -document.querySelector(".portfolio-wrapper").offsetWidth + 1000, // Move portfolio-wrapper to the left
    });

    gsap.from(".footer__main_heading", {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: ".footer__main_heading",
        start: "top 60%",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap.utils.toArray(".footer__col, .footer__heading").forEach((col) => {
      gsap.from(col, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: col,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    });

    const footerTimeline = gsap.timeline();

    footerTimeline.to(".footer", {
      opacity: 1,
    });

    ScrollTrigger.create({
      trigger: ".footer",
      start: "top bottom", // Trigger when the top of the contact section hits the bottom of the viewport
      end: "center bottom",
      scrub: true,
      animation: footerTimeline,
    });

    // Animation for form section
    gsap.from(".form", {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: ".form",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Animation for map section
    gsap.from(".mapa", {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: ".mapa",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }
}
checkingGsap();
