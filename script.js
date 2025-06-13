const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const thankYou = document.getElementById("thankYou");
const content = document.getElementById("content");

noBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".buttons");
  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  content.style.display = "none";
  thankYou.style.display = "flex";
});
