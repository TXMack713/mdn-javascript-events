// MDN JavaScript Events Assessment 1
let btn = document.querySelector('.off');
btn.addEventListener('click', () => {
  if (btn.innerHTML === 'Machine is on') {
    btn.innerHTML = 'Machine is off';
  } else {
    btn.innerHTML = 'Machine is on';
  }
});

// MDN JavaScript Events Assessment 2
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Add your code here
let move = document.querySelector('canvas');
move.addEventListener('keydown', event => {
  const keyName = event.key;
  switch (keyName) {
    case 'w':
      y -= 5;
      if (y < size) {
        y = size;
      }
      drawCircle(x, y, size);
      break;
    case 'a':
      x -= 5;
      if (x < size) {
        x = size;
      }
      drawCircle(x, y, size);
      break;
    case 's':
      y += 5;
      if (y > canvas.height - size) {
        y = canvas.height - size;
      }
      drawCircle(x, y, size);
      break;
    case 'd':
      x += 5;
      if (x > canvas.width - size) {
        x = canvas.width - size;
      }
      drawCircle(x, y, size);
      break;
    default:
      break;
  }
});

// MDN JavaScript Events Assessment 3
let buttonBar = document.querySelector('.button-bar');
let color;

let redBtn = document.querySelector('[data-color="red"]');
let yellowBtn = document.querySelector('[data-color="yellow"]');
let greenBtn = document.querySelector('[data-color="green"]');
let purpleBtn = document.querySelector('[data-color="purple"]');

redBtn.addEventListener('click', () => {
  color = 'red';
});

yellowBtn.addEventListener('click', () => {
  color = 'yellow';
});

greenBtn.addEventListener('click', () => {
  color = 'green';
});

purpleBtn.addEventListener('click', () => {
  color = 'purple';
});

let elements = document.getElementsByClassName('button-bar');

buttonBar.addEventListener('click', () => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = color;
  }
});
  