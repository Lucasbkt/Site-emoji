// Animation au scroll
document.addEventListener("DOMContentLoaded", () => {
  // Cartes emojis
  const emojiCards = document.querySelectorAll(".emoji-card");
  const teamCards = document.querySelectorAll(".team-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  [...emojiCards, ...teamCards].forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
  });

  // Effet hover sur les emojis
  const emojis = document.querySelectorAll(
    ".emoji-3d, .emoji-2d, .emoji-retro"
  );

  emojis.forEach((emoji) => {
    emoji.addEventListener("mouseenter", () => {
      emoji.style.transform = "scale(1.1) rotate(5deg)";
    });

    emoji.addEventListener("mouseleave", () => {
      emoji.style.transform = "scale(1) rotate(0)";
    });
  });
});
