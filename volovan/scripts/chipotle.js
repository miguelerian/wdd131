/* Typing effect */
const text = "Mariana, ¿Quieres ser mi San Valentin?";
const typeTarget = document.getElementById("typeText");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typeTarget.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();

/* Elements */
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const successScreen = document.getElementById("successScreen");
const music = document.getElementById("music");

/* No button dodges touch */
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

/* Trigger on touch + hover (iOS safe) */
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseenter", moveNoButton);

/* Yes button */
yesBtn.addEventListener("click", () => {
    successScreen.style.display = "flex";
    noBtn.style.display = "none";
    fadeInMusic();
    startConfetti();
});

/* Music fade-in */
function fadeInMusic() {
    music.volume = 0;
    music.play();
    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 0.5) {
            vol += 0.02;
            music.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 150);
}

/* Continuous confetti */
function startConfetti() {
    const hearts = ["❤️", "💖", "💘", "💕", "💗"];
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "confetti-heart";
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = 18 + Math.random() * 28 + "px";
        heart.style.animationDuration = 4 + Math.random() * 5 + "s";
        successScreen.appendChild(heart);
        setTimeout(() => heart.remove(), 9000);
    }, 200);
}
