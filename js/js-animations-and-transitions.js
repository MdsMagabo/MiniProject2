import {nav, wrapper, hamburger, navBar, about, mission, vision, aboutBtn, missionBtn, visionBtn} from "./main.js";

// nav
    // function 1 (scroll animation)
    let navScrollAnimation = () => {

        if (window.scrollY > 0) {
            nav.classList.add("animateNav");
        } else {
            nav.classList.remove("animateNav");
        }      
    }

    // function 2 (hamburger Btn) 
    let hamburgerToggle = () => {
        hamburger.classList.toggle("active");
        navBar.classList.toggle("active");
    }
    
// About section
    let showAbout = () => {
        event.preventDefault();

        about.classList.remove("a-active");
        mission.classList.remove("MnV-active");
        vision.classList.remove("MnV-active");
        aboutBtn.classList.add("active-btn");
        missionBtn.classList.remove("active-btn");
        visionBtn.classList.remove("active-btn");
    }
    let showMission = () => {
        event.preventDefault();

        about.classList.add("a-active");
        mission.classList.add("MnV-active");
        vision.classList.remove("MnV-active");
        missionBtn.classList.add("active-btn");
        aboutBtn.classList.remove("active-btn");
        visionBtn.classList.remove("active-btn");
    }
    let showVision = () => {
        event.preventDefault();

        about.classList.add("a-active");
        mission.classList.remove("MnV-active");
        vision.classList.add("MnV-active");
        visionBtn.classList.add("active-btn");
        aboutBtn.classList.remove("active-btn");
        missionBtn.classList.remove("active-btn");
    }

// gallery
    let showGallery = () => {
        let triggerGallery = window.innerHeight / 5 * 4;

        let gallery = wrapper.getBoundingClientRect().top;

        if (gallery < triggerGallery) {
            wrapper.classList.add("showGallery");
        } else {
            wrapper.classList.remove("showGallery");
        }
    }


export {navScrollAnimation, showGallery, hamburgerToggle, showAbout, showMission, showVision}