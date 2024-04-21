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
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Check if the media query matches initially
    if (mediaQuery.matches) {
      gsap.to(".services__cards", {
        scrollTrigger: {
          trigger: ".logo-section",
          start: "bottom 10%",
          pin: ".services",
          end: () => {
            const wrapperWidth =
              document.querySelector(".services__cards").offsetWidth;
            const translatedWidth = wrapperWidth * 2; // Considering 50% translation
            return "+=" + (wrapperWidth + translatedWidth); // Adjusting the end position
          },
          scrub: true, // Smooth scrolling
        },
        x: -document.querySelector(".services__cards").offsetWidth - 1500,
      });

      gsap.to(".advantages__cards", {
        scrollTrigger: {
          trigger: ".advantages",
          start: "bottom bottom",
          pin: ".advantages",
          end: () => {
            const wrapperWidth =
              document.querySelector(".advantages__cards").offsetWidth;
            const translatedWidth = wrapperWidth * 4; // Considering 50% translation
            return "+=" + (wrapperWidth + translatedWidth); // Adjusting the end position
          },
          scrub: true, // Smooth scrolling
        },
        x: document.querySelector(".advantages__cards").offsetWidth + 2000,
      });

      gsap.to(".values__cards", {
        scrollTrigger: {
          trigger: ".values",
          start: "bottom bottom",
          pin: ".values",
          end: () => {
            const wrapperWidth =
              document.querySelector(".values__cards").offsetWidth;
            const translatedWidth = wrapperWidth * 2; // Considering 50% translation
            return "+=" + (wrapperWidth + translatedWidth); // Adjusting the end position
          },
          scrub: true, // Smooth scrolling
        },
        x: -document.querySelector(".values").offsetWidth - 600,
      });

      gsap.to(".portfolio-wrapper", {
        scrollTrigger: {
          trigger: ".portfolio",
          start: "top 20%",
          pin: ".portfolio", // Pin the portfolio section
          end: () => {
            const wrapperWidth =
              document.querySelector(".portfolio-wrapper").offsetWidth;
            const translatedWidth = wrapperWidth * 16; // Considering 50% translation
            return "+=" + (wrapperWidth + translatedWidth); // Adjusting the end position
          },
          scrub: true, // Smooth scrolling
        },
        x: -document.querySelector(".portfolio-wrapper").offsetWidth - 3800, // Move portfolio-wrapper to the left
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

      const logoContainers = document.querySelectorAll(".logo-container");

      // Function to create GSAP animations for each logo
      function animateLogos() {
        // Loop through each logo container
        logoContainers.forEach((container, index) => {
          // Create a GSAP timeline for each logo
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top bottom-=100", // Trigger animation when 100px from the bottom of the viewport
              end: "+=100", // Adjust the end position as needed
              scrub: 1,
            },
          });

          // Add animation to each logo
          tl.fromTo(
            container,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, ease: "power2.out" },
            index * 0.2
          ); // Staggering effect with 0.2s delay
        });
      }

      // Call the function to animate logos
      animateLogos();
    } else {
      gsap.to(".services__cards", {
        scrollTrigger: {
          trigger: ".logo-section",
          start: "bottom 10%",
          pin: ".services",
          end: () => {
            const wrapperWidth =
              document.querySelector(".services__cards").offsetWidth;
            const translatedWidth = wrapperWidth * 2; // Considering 50% translation
            return "+=" + (wrapperWidth + translatedWidth); // Adjusting the end position
          },
          scrub: true, // Smooth scrolling
        },
        x: -document.querySelector(".services__cards").offsetWidth - 1500,
      });

      gsap.to(".advantages__cards", {
        scrollTrigger: {
          trigger: ".advantages",
          start: "bottom bottom",
          pin: ".advantages",
          end: () => {
            const wrapperWidth =
              document.querySelector(".advantages__cards").offsetWidth;
            const translatedWidth = wrapperWidth * 4; // Considering 50% translation
            return "+=" + (wrapperWidth + translatedWidth); // Adjusting the end position
          },
          scrub: true, // Smooth scrolling
        },
        x: document.querySelector(".advantages__cards").offsetWidth + 2000,
      });

      gsap.to(".values__cards", {
        scrollTrigger: {
          trigger: ".values",
          start: "bottom bottom",
          pin: ".values",
          end: () => {
            const wrapperWidth =
              document.querySelector(".values__cards").offsetWidth;
            const translatedWidth = wrapperWidth * 2; // Considering 50% translation
            return "+=" + (wrapperWidth + translatedWidth); // Adjusting the end position
          },
          scrub: true, // Smooth scrolling
        },
        x: -document.querySelector(".values").offsetWidth - 600,
      });

      gsap.to(".portfolio-wrapper", {
        scrollTrigger: {
          trigger: ".portfolio",
          start: "bottom bottom",
          pin: ".portfolio", // Pin the portfolio section
          end: () => {
            const wrapperWidth =
              document.querySelector(".portfolio-wrapper").offsetWidth;
            const translatedWidth = wrapperWidth * 4; // Considering 50% translation
            return "+=" + (wrapperWidth + translatedWidth); // Adjusting the end position
          },
          scrub: true, // Smooth scrolling
        },
        x: -document.querySelector(".portfolio-wrapper").offsetWidth - 7300, // Move portfolio-wrapper to the left
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

      const logoContainers = document.querySelectorAll(".logo-container");

      // Function to create GSAP animations for each logo
      function animateLogos() {
        // Loop through each logo container
        logoContainers.forEach((container, index) => {
          // Create a GSAP timeline for each logo
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top bottom-=100", // Trigger animation when 100px from the bottom of the viewport
              end: "+=100", // Adjust the end position as needed
              scrub: 1,
            },
          });

          // Add animation to each logo
          tl.fromTo(
            container,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, ease: "power2.out" },
            index * 0.2
          ); // Staggering effect with 0.2s delay
        });
      }

      // Call the function to animate logos
      animateLogos();
    }
    mediaQuery.addEventListener("change", (event) => {
      if (event.matches) {
        // Media query matches
        console.log("Viewport width is now less than or equal to 768px");
      } else {
        // Media query does not match
        console.log("Viewport width is now greater than 768px");
      }
    });
  }
}
checkingGsap();
