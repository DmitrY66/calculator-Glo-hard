'use strict';

document.addEventListener("DOMContentLoaded", () => {
  function DomElement(selector, height, width, bg) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
  }

  DomElement.prototype.createElem = function () {
    if (this.selector.startsWith('.')) {
      let createDiv = document.createElement('div');
      createDiv.className = 'elem';
      createDiv.style.cssText =
        `height: ${this.height}; width: ${this.width}; background: ${this.bg}`;
      document.body.appendChild(createDiv);
    }
  };

  let domElement = new DomElement('.elem', '100px', '100px', 'LightCoral');
  domElement.createElem();
  const elem = document.querySelector('.elem')

  let countVertical = 0
  let countMinusV = () => {
    countVertical -= 10
  };
  let countPlusV = () => {
    countVertical += 10
  };

  let countHorizontal = 0
  let countMinusG = () => {
    countHorizontal -= 10
  };
  let countPlusG = () => {
    countHorizontal += 10
  };

  document.addEventListener('keydown', function (event) {
    if (event.code == 'ArrowUp') {
      if (countVertical > 0) {
        countMinusV();
      }
      elem.style.marginTop = `${countVertical}px`;
    }

    if (event.code == 'ArrowLeft') {
      if (countHorizontal > 0) {
        countMinusG();
      }
      elem.style.marginLeft = `${countHorizontal}px`;
    }

    if (event.code == 'ArrowDown') {
      countPlusV();
      elem.style.marginTop = `${countVertical}px`;
    }

    if (event.code == 'ArrowRight') {
      countPlusG();
      elem.style.marginLeft = `${countHorizontal}px`;
    }
  });
});
