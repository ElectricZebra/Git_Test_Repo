const container = document.getElementById('container');
const counter = document.querySelector('h1');
const plus = document.getElementById('plus');
const minus = document.querySelector('#minus');

const display = {
  number: 0
}

const render = () => {
  counter.innerHTML = display.number
}

function addCounter () {
  display.number += 1;
  render();
}
function minusCounter() {
  display.number -= 1;
  render();
}

plus.addEventListener('click', addCounter)
minus.addEventListener('click', minusCounter);

render();

