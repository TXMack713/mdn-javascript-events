const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol =
    'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

// function bgChange(e) {
//   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   e.target.style.backgroundColor = rndCol;
//   console.log(e);
// }

btn.addEventListener('click', bgChange);

// btn.onclick = bgChange;
btn.addEventListener('click', bgChange);
