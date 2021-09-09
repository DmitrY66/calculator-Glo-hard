const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
const output = document.querySelector('.output');

let nowDay = +[new Date().getDay()].join('')

for (let i = 0; i < week.length; i++) {
  let div = document.createElement('div');
  div.style.fontSize = '26px';
  div.style.fontFamily = 'sans-serif';
  div.innerHTML = week[i];
  output.append(div);
  if (i === 5 || i === 6) {
    div.style.fontStyle = 'oblique';
  }
  if (i === nowDay) {
    div.style.fontWeight = 'bold';
  }
}
