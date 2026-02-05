// 🎁 Mensaje sorpresa
const btn = document.getElementById("surpriseBtn");
const message = document.getElementById("surpriseMessage");

btn.addEventListener("click", () => {
    message.classList.toggle("hidden");
});

// 🎵 Música
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "⏸ Pausar música";
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Música";
    }
});

// 🎉 Confeti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 5 + 1,
}));

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";

    confetti.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
        c.y += c.d;
        if (c.y > canvas.height) c.y = -10;
    });

    requestAnimationFrame(drawConfetti);
}

drawConfetti();
