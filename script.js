'use strict';

let str1 = '   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus assumenda minus vitae tenetur.     ';

function сompactString(strcomp) {
  if (typeof strcomp !== 'string') {
    alert('This argument is not a string');
  } else {
    strcomp = strcomp.trim();
    if (strcomp.length > 30) {
      strcomp = strcomp.substr(0, 30) + '...';
    }
  }
  console.log(strcomp);
}

сompactString(str1);

