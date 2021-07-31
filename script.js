let num = 266219;

let arrNum = ('' + num).split('');

let multNum = 1;

for (let i = 0; i <= arrNum.length - 1; ++i) {
  multNum *= arrNum[i];
}

console.log(multNum);

let multNumCubed = multNum ** 3;

console.log(+(String(multNumCubed).slice(0, 2)));
