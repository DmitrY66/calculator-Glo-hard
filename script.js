let arr = ['3564', '2678', '4785', '1726', '4899', '2266', '9028'];

for (let i = 0; i < arr.length; ++i) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}


console.log('простые числа в диапозоне от 1 до 100');
let n = 100;

for (let i = 2; i <= n; i++) {
  let mark = 1;
  if (i > 2 && i % 2 != 0) {

    for (let j = 3; j * j <= i; j = j + 2) {
      if (i % j == 0) {
        mark = 0;
        continue;
      }
    }
  }
  else if (i != 2) mark = 0;
  if (mark === 1) {
    console.log(i + ' делители этого числа: 1 и ' + i);
  }
};
