document.addEventListener("DOMContentLoaded", () => {
  const coin = document.getElementById("coin");
  const button = document.getElementById("flipButton");

  button.addEventListener("click", () => {
    // Add spin class to trigger animation
    coin.classList.add("spin");

    // Wait for spin to finish
    setTimeout(() => {
      // Randomly decide heads or tails
      const isHeads = Math.random() < 0.5;
      const imgSrc = isHeads
        ? "./assets/pics/heads.png" // Path to heads image
        : "./assets/pics/tails.png"; // Path to tails image

      // Update coin image
      coin.src = imgSrc;

      // Remove spin class for next flip
      coin.classList.remove("spin");
    }, 1000); // matches CSS animation time
  });
});
