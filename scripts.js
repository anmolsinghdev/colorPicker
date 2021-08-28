var red = document.querySelector('.red');
var cyan = document.querySelector('.cyan');
var violet = document.querySelector('.violet');
var orange = document.querySelector('.orange');
var pink = document.querySelector('.pink');
var yellow = document.querySelector('.yellow');
var center = document.querySelector('.center');

//getcomputedstyle need a element which u want to change or rqst to styling properties and where in css '-' is replace to camel code like "background-color" = "backgroundColor"

// console.log(window.getComputedStyle(pink).backgroundColor);

//let create a function which get the color the gave us to color code

const getColor = (color) => {
  return window.getComputedStyle(color).backgroundColor;
};

// red.addEventListener('mouseenter', () => {
//   center.style.backgroundColor = 'red';
// });

const magicColor = (element, color) => {
  return element.addEventListener('mouseenter', () => {
    center.style.backgroundColor = color;
  });
};

magicColor(red, getColor(red));
magicColor(cyan, getColor(cyan));
magicColor(violet, getColor(violet));
magicColor(orange, getColor(orange));
magicColor(pink, getColor(pink));
magicColor(yellow, getColor(yellow));
