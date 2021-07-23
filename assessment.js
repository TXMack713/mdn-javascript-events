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
let move = document.querySelector('canvas')
