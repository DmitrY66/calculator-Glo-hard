const button = document.querySelector('button');
const body = document.querySelector('body');
const color16 = document.querySelector('.color16');


const change = () => {
  let color;
  r = Math.floor(Math.random() * (256)),
  g = Math.floor(Math.random() * (256)),
  b = Math.floor(Math.random() * (256)),
  color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  body.style.background = color;
  color16.textContent = color;
};

button.addEventListener('click', () => {
  change();
})
