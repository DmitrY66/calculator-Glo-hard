let leng;

// leng = 'en';
// leng = 'ru';

let arrDaysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let arrDaysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let date = new Date();

if (leng === 'ru') {
  console.log(arrDaysRu[date.getDay()]);
} else if (leng === 'en') {
  console.log(arrDaysEn[date.getDay()]);
} else if (leng === undefined) {
  console.log('Язык не определён');
}

switch (leng) {
  case 'ru':
    console.log(arrDaysRu[date.getDay()]);
    break;
  case 'en':
    console.log(arrDaysEn[date.getDay()]);
    break;
  default:
    console.log('Язык не определён');
}

let arrsDays = {
  ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  undefined: [
    'Язык не определён',
    'Язык не определён',
    'Язык не определён',
    'Язык не определён',
    'Язык не определён',
    'Язык не определён',
    'Язык не определён',
  ]
};

let days = arrsDays[leng];
console.log(days[date.getDay()]);


let namePerson;
let namePerson2;

// namePerson = 'Артем';
// namePerson = 'Максим';

namePerson === 'Артем' ?
  console.log('Директор') :
  namePerson === 'Максим' ?
    console.log('Преподаватель') :
    console.log('Студент');
