// Pause auto rotate on hover
let card = document.getElementById("card");

card.addEventListener("mouseenter", () => {
  card.style.animationPlayState = "paused";
});

card.addEventListener("mouseleave", () => {
  card.style.animationPlayState = "running";
});