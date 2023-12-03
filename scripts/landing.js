gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    gsap.to(".sidebar", {
        scrollTrigger: {
            trigger: ".sidebar",
            start: "top 80px",
            end: () => "+=" + (document.querySelector("#article").offsetHeight-240),
            toggleActions: "play none none none",
            pin: true, // Enable pinning
            pinSpacing: false // Optional: disables the addition of spacing around the pinned element
        }
    });

  });
