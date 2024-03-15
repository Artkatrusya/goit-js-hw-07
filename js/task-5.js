const button = document.querySelector(".change-color");
const span = document.querySelector(".color")

button.addEventListener("click", function() {
  const newColor = getRandomHexColor()
  document.body.style.backgroundColor = newColor;
  span.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
