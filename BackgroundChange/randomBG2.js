const start = document.querySelector("#startBtn");
const stop = document.querySelector("#stopBtn");
const body = document.body;

let color = "#";
const changeColor = () => {
  let hexList = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    color = color + hexList[Math.floor(Math.random() * 16)];
  }
};

// changeColor();
// console.log(color);
let refToStart=null;
start.addEventListener("click", () => {
  clearInterval(refToStart); // Clear any existing interval before starting a new one
  const startChangingColor = () => {
    changeColor();
    body.style.backgroundColor = color;
    color = "#";
  };
  refToStart = setInterval(startChangingColor, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(refToStart); // Clear the interval when the "Stop" button is clicked
});
