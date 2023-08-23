import { navScrollAnimation, showGallery, hamburgerToggle, showAbout, showMission, showVision } from "./js-animations-and-transitions.js";

// nav
    let nav = document.querySelector("#nav");
    let hamburger = document.querySelector("#hamburger");
    let navBar = document.querySelector("#navBar");
    let navItem = document.querySelectorAll("#navItem");
    let loginBtn = document.querySelector("#loginBtn");

        // event group 1
        window.addEventListener("scroll", navScrollAnimation);

        // event group 2 (@media query)
        hamburger.addEventListener("click", hamburgerToggle);

        navItem.forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navBar.classList.remove("active");
        }));
        loginBtn.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navBar.classList.remove("active");
        })

// about section
    let about = document.querySelector("#about");
    let mission = document.querySelector("#mission");
    let vision = document.querySelector("#vision");
    let aboutBtn = document.querySelector("#aboutBtn");
    let missionBtn = document.querySelector("#missionBtn");
    let visionBtn = document.querySelector("#visionBtn");

        // events
        aboutBtn.addEventListener("click", showAbout);
        missionBtn.addEventListener("click", showMission);
        visionBtn.addEventListener("click", showVision);
    

// gallery
    let wrapper = document.querySelector("#wrapper");

        // event
        window.addEventListener("scroll", showGallery);

// testimonial
    let testimonialBtn = document.querySelectorAll(".testimonialBtn")
    let slide = document.querySelector("#slide");

        // events 
        testimonialBtn[0].onclick = function() {
            slide.style.transform = "translateX(0px)";
            testimonialBtn[1].classList.remove("active-testimonial");
            testimonialBtn[2].classList.remove("active-testimonial");
            testimonialBtn[3].classList.remove("active-testimonial");
            this.classList.add("active-testimonial");
        }
        testimonialBtn[1].onclick = function() {
            slide.style.transform = "translateX(-800px)";
            testimonialBtn[0].classList.remove("active-testimonial");
            testimonialBtn[2].classList.remove("active-testimonial");
            testimonialBtn[3].classList.remove("active-testimonial");
            this.classList.add("active-testimonial");
        }
        testimonialBtn[2].onclick = function() {
            slide.style.transform = "translateX(-1600px)";
            testimonialBtn[0].classList.remove("active-testimonial");
            testimonialBtn[1].classList.remove("active-testimonial");
            testimonialBtn[3].classList.remove("active-testimonial");
            this.classList.add("active-testimonial");
        }
        testimonialBtn[3].onclick = function() {
            slide.style.transform = "translateX(-2400px)";
            testimonialBtn[0].classList.remove("active-testimonial");
            testimonialBtn[1].classList.remove("active-testimonial");
            testimonialBtn[2].classList.remove("active-testimonial");
            this.classList.add("active-testimonial");
        }

export {nav, wrapper, hamburger, navBar, about, mission, vision, aboutBtn, missionBtn, visionBtn}

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=10;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});