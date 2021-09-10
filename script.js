let div2 = document.createElement('div');
div2.style.fontSize = '26px';
div2.style.fontFamily = 'sans-serif';

let div1 = document.createElement('div');
div1.style.fontSize = '26px';
div1.style.fontFamily = 'sans-serif';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const date1 = document.querySelector('.date1');
const date2 = document.querySelector('.date2');


const outputDates = () => {

  let now = new Date();

  let nowDayIndex = +[new Date().getDay()].join('')
  let nowDay
  for (let i = 0; i < week.length; i++) {
    if (i === nowDayIndex - 1) {
      nowDay = week[i];
    }
  }

  let nowDate = now.getDate()

  let nowMonthIndex = now.getMonth() + 1;
  let nowMonth;
  for (let i = 0; i < month.length; i++) {
    if (i === nowMonthIndex - 1) {
      nowMonth = month[i];
    }
  }

  let nowYear = now.getFullYear();

  let nowHourse = now.getHours();

  let nowMinutes = now.getMinutes();

  let nowSeconds = now.getSeconds();

  let hourse = 'час';

  // output a
  const ending = () => {
    if ((nowHourse + 10) % 10 > 1 && (nowHourse + 10) % 10 < 5) {
      hourse = 'часa';
    }
    if ((nowHourse + 10) % 10 > 4) {
      hourse = 'часов';
    }
  }
  ending();

  // output b
  const addZero = () => {
    if (nowMonthIndex < 10) {
      nowMonthIndex = '0' + nowMonthIndex;
    }
    if (nowDate < 10) {
      nowDate = '0' + nowDate;
    }
    if (nowHourse < 10) {
      nowHourse = '0' + nowHourse;
    }
    if (nowMinutes < 10) {
      nowMinutes = '0' + nowMinutes;
    }
    if (nowSeconds < 10) {
      nowSeconds = '0' + nowSeconds;
    }
  };
  addZero();

  div1.innerHTML = `
  Сегодня ${nowDay}, 
  ${nowDate}
  ${nowMonth}
  ${nowYear} года, 
  ${nowHourse} ${hourse} 
  ${nowMinutes} минут  
  ${nowSeconds} секунд  
  `;
  date1.append(div1);

  div2.innerHTML = `
  ${nowDate}.${nowMonthIndex}.${nowYear} - 
  ${nowHourse}:${nowMinutes}:${nowSeconds}  
  `;
  date2.append(div2);
};

setInterval(outputDates, 1000);
