const chat = document.getElementById("chat");
const bgMusic = document.getElementById("bgMusic");
const overlay = document.getElementById("overlay");

// TIME
setInterval(() => {
    let d = new Date();
    document.getElementById("lockTime").innerText =
        d.getHours() + ":" + String(d.getMinutes()).padStart(2, '0');
}, 1000);

// FADE
function fadeOut(id) {
    document.getElementById(id).style.opacity = 0;
    setTimeout(() => document.getElementById(id).classList.add("hidden"), 500);
}
function fadeIn(id) {
    let el = document.getElementById(id);
    el.classList.remove("hidden");
    el.style.opacity = 0;
    setTimeout(() => el.style.opacity = 1, 10);
}

// UNLOCK (with animation + music fade)
function unlock() {

    overlay.classList.remove("hidden");
    overlay.classList.add("active");

    setTimeout(() => {

        fadeOut("lockscreen");

        bgMusic.volume = 0;
        bgMusic.play();

        let volume = 0;
        let fade = setInterval(() => {
            if (volume < 1) {
                volume += 0.03;
                bgMusic.volume = volume;
            } else {
                clearInterval(fade);
            }
        }, 200);

        setTimeout(() => {
            document.getElementById("phone").classList.remove("hidden");
            showNextMessage();
        }, 500);

    }, 300);
}

// MESSAGES
const messages = [
    "Hola Pookie",
    "Desde que tuvimos nuestra primera cita supe que lo nuestro sería especial",
    "Este año juntos ha sido maravilloso",
    "Conocerte es lo mejor que me pudo haber pasado",
    "Asi que quise hacer esto para ti...❤️"
];

let i = 0;

function showNextMessage() {
    if (i < messages.length) {

        let typing = document.createElement("div");
        typing.className = "typing";
        typing.innerHTML = `<div class="dot"></div><div class="dot"></div><div class="dot"></div>`;
        chat.appendChild(typing);

        setTimeout(() => {
            typing.remove();

            let msg = document.createElement("div");
            msg.className = "message";
            msg.innerText = messages[i];
            chat.appendChild(msg);

            chat.scrollTop = chat.scrollHeight;

            i++;
            setTimeout(showNextMessage, 1400);

        }, 1000);

    } else {
        document.getElementById("openBtn").classList.remove("hidden");
    }
}

// FLOW
function showStory() { fadeOut("chat"); setTimeout(() => fadeIn("story"), 400); }
function startCall() { fadeOut("story"); setTimeout(() => fadeIn("call"), 400); }
function acceptCall() {
    fadeOut("call");
    setTimeout(() => {
        fadeIn("connecting");
        setTimeout(() => {
            fadeOut("connecting");
            setTimeout(() => fadeIn("question"), 500);
        }, 2000);
    }, 400);
}

// COUNTDOWN
function startCountdown() {
    const targetDate = new Date(2026, 3, 11, 0, 0, 0);

    function update() {
        let diff = targetDate - new Date();
        if (diff <= 0) {
            document.getElementById("countdown").innerText = "Es nuestro día ❤️";
            return;
        }
        let d = Math.floor(diff / (1000 * 60 * 60 * 24));
        let h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let m = Math.floor((diff / (1000 * 60)) % 60);
        let s = Math.floor((diff / 1000) % 60);

        document.getElementById("countdown").innerText =
            `${d}d ${h}h ${m}m ${s}s`;
    }
    update();
    setInterval(update, 1000);
}

// YES
function yesClicked() {
    document.getElementById("response").innerText = "Te amo mi MonkeyGf❤️";

    for (let i = 0; i < 25; i++) {
        let h = document.createElement("div");
        h.innerText = "❤️";
        h.className = "heart";
        h.style.left = Math.random() * 300 + "px";
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 3000);
    }

    setTimeout(() => {
        fadeIn("secret");
        startCountdown();
    }, 2000);
}

// RUNAWAY
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    noBtn.style.left = Math.random() * 250 + "px";
    noBtn.style.top = Math.random() * 500 + "px";
});