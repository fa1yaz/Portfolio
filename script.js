// Hamburger menu toggle
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    const hamburgIcon = document.querySelector(".hamburg");
    const cancelIcon = document.querySelector(".cancel");
    navbar.classList.add("show");
    hamburgIcon.style.display = 'none';
    cancelIcon.style.display = 'block';
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    const hamburgIcon = document.querySelector(".hamburg");
    const cancelIcon = document.querySelector(".cancel");
    navbar.classList.remove("show");
    hamburgIcon.style.display = 'block';
    cancelIcon.style.display = 'none';
}

// Typewriter effect
const texts = [
    "PENETRATION TESTER",
    "ETHICAL HACKER"
];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typewriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typewriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typewriter, 500);
    }
}

window.onload = typewriter;

// Handle Resume download
function showResume() {
    const downloadLink = document.getElementById("downloadResume");
    downloadLink.click(); // Trigger the download
}
