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

start.addEventListener("click", () => {
  changeColor();
  body.style.backgroundColor = color;
});

stop.addEventListener("click", () => {
  color = "#ffffff";
  body.style.backgroundColor = color;
  color = "#";
});
