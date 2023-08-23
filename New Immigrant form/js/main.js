function validateForm(event) {
    event.preventDefault();

    const educationalLevel = document.querySelector('select[name="educational-level"]').value;
    const age = document.querySelector('select[name="age"]').value;
    const ielts = document.querySelector('select[name="ielts"]').value;
    const relatives = document.querySelector('select[name="relatives"]').value;
    const workingExperience = document.querySelector('select[name="workingExperience"]').value;
    const speakFrench = document.querySelector('select[name="speak"]').value;
    const form = document.getElementById("immigration-form");

    let totalPoints = 0;

    // Educational Level points
    if (educationalLevel === "Bachelor") {
        totalPoints += 10;
    } else if (educationalLevel === "Masteral") {
        totalPoints += 15;
    } else if (educationalLevel === "Doctoral") {
        totalPoints += 20;
    }
    // Age
    if (age === "23 - 50 years old") {
        totalPoints += 10;
    } else if (age === "50 and above") {
        totalPoints += 5;
    }
    // ielts
    if (ielts === "Yes") {
        totalPoints += 15;
    } else if (ielts === "No") {
        totalPoints += 0;
    }
    // relatives
    if (relatives === "Yes") {
        totalPoints += 10;
    } else if (relatives === "No") {
        totalPoints += 5;
    }
    //workingExperience
    if (workingExperience === "1 - 3 years") {
        totalPoints += 10;
    } else if (workingExperience === "3 - 5 years") {
        totalPoints += 15;
    } else if (workingExperience === "5 years and above") {
        totalPoints += 20;
    }
    //speak French
    if (speakFrench === "Yes") {
        totalPoints += 10;
    } else if (speakFrench === "No") {
        totalPoints += 5;
    }

    if (totalPoints >= 53) {
        alert("Congratulations! You have passed with " + totalPoints + " points.");
    } else {
        alert("Sorry, you have not passed. Your total points are " + totalPoints + " points.");
    }

}

const form = document.getElementById("immigration-form");
form.addEventListener("submit", validateForm);

