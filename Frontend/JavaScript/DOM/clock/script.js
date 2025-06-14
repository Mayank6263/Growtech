const hourhand = document.getElementById("hour");
const minhand = document.getElementById("min");
const sechand = document.getElementById("sec");

function update() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = seconds * 6;
  const minutedeg = minutes * 6 + seconds * 0.1;
  const hoursdeg = (hour % 12) * 30 + minutes * 0.5;

  sechand.style.transform = ` rotate(${secondDeg}deg)`;
  minhand.style.transform = ` rotate(${minutedeg}deg)`;
  hourhand.style.transform = ` rotate(${hoursdeg}deg)`;
}
setInterval(update,1000);
update();
