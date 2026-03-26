document.querySelectorAll(".mood-card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Mood selected!");
  });
});