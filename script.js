
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const bearGif = document.getElementById("bearGif");
const message = document.getElementById("message");
const buttons = document.getElementById("buttons");

let accepted = false;

// Move No button away
function moveNo() {
  if (accepted) return;

  noBtn.style.position = "fixed";

  const maxX = Math.max(0, window.innerWidth - noBtn.offsetWidth);
  const maxY = Math.max(0, window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
  noBtn.style.zIndex = "20";
}

noBtn.addEventListener("mouseenter", moveNo);

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNo();
}, { passive: false });

noBtn.addEventListener("click", moveNo);

// Yes button
yesBtn.addEventListener("click", () => {
  accepted = true;

  question.textContent = "Yayyyy! 💖🥰";
  message.textContent = "I knew it! I love you too! ❤️";
  bearGif.src = "happy.gif";

  buttons.style.display = "none";

  // Heart celebration
  for (let i = 0; i < 45; i++) {
    setTimeout(createHeart, i * 80);
  }
});

// Floating hearts
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = ["❤️", "💕", "💗", "💖"][Math.floor(Math.random() * 4)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 650);

// Heart cursor trail
document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.35) return;

  const heart = document.createElement("span");
  heart.className = "cursor-heart";
  heart.textContent = "💕";

  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 800);
});
