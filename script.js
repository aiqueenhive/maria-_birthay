// ==============================
// Happy Birthday Maria Website
// ==============================

// Typing Effect
const message =
"Dear Maria ❤️, Happy Birthday! You are an amazing friend. I hope this year brings you happiness, success and countless smiles. Enjoy your gifts and have the most wonderful birthday ever! 🎂🎉";

let i = 0;
const typing = document.getElementById("typing");

function typeWriter() {
    if (typing && i < message.length) {
        typing.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

// Start typing after Netflix intro
setTimeout(typeWriter, 4200);

// Button Animation
const btn = document.getElementById("startBtn");

if (btn) {
    btn.addEventListener("click", () => {

        alert("🎉 Surprise Time Maria! ❤️");

        document.querySelector(".gift-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    });
}

// Gift Click Effect
const gifts = document.querySelectorAll(".gift");

gifts.forEach((gift) => {

    gift.addEventListener("click", () => {

        gift.style.transform = "scale(1.15)";
        gift.style.background = "#ff0033";

        setTimeout(() => {

            gift.style.transform = "";

        }, 400);

    });

});

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    heart.style.transition = "5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.top = "-100px";
        heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 5200);

}

setInterval(createHeart, 500);

// Button Glow Effect
setInterval(() => {

    if (btn) {

        btn.style.boxShadow = "0 0 35px red";

        setTimeout(() => {

            btn.style.boxShadow = "0 0 10px crimson";

        }, 500);

    }

}, 2000);

console.log("❤️ Happy Birthday Maria Website Loaded ❤️");
