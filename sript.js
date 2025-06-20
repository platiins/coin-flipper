document.addEventListener("DOMContentLoaded", () => {
  const coin = document.getElementById("coin");
  const button = document.getElementById("flipButton");

  let totalRotation = 0;

  button.addEventListener("click", () => {
    const isHeads = Math.random() < 0.5;

    // Each flip spins 3 full turns + optional 180 for tails
    totalRotation += 1080; // 3 full spins

    if (!isHeads) {
      totalRotation += 180; // extra half turn to land on tails
    }

    coin.style.transform = `rotateY(${totalRotation}deg)`;
  });
});
