var zero = document.getElementById('zero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var decimal = document.getElementById('decimal');

var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var equals = document.getElementById('equals');

var clear = document.getElementById('clear');

var result = document.getElementById('result');
var hold = 0;
var lastButton = '';
var numberPressed = false;

decimal.addEventListener('click', function(e){
  if (!numberPressed) {
    result.textContent = '';
  }
  if(result.textContent === ''){
    result.textContent += '0.';
  }
  else if (result.textContent.indexOf(".") > -1){
    result.textContent = result.textContent;
  }
  else {
    result.textContent += '.';
  }
  numberPressed = true;
})

zero.addEventListener('click', function(e){
  if (!numberPressed) {
    result.textContent = '';
  }
  result.textContent += '0';
  numberPressed = true;
})
one.addEventListener('click', function(e){
  if (!numberPressed) {
    result.textContent = '';
  }
  result.textContent += '1';
  numberPressed = true;
})
two.addEventListener('click', function(e){
  if (!numberPressed) {
    result.textContent = '';
  }
  result.textContent += '2';
  numberPressed = true;
})
three.addEventListener('click', function(e){
  if (!numberPressed) {
    result.textContent = '';
  }
  result.textContent += '3';
  numberPressed = true;
})
four.addEventListener('click', function(e){
  if (!numberPressed) {
    result.textContent = '';
  }
  result.textContent += '4';
  numberPressed = true;
})
five.addEventListener('click', function(e){
  if (!numberPressed) {
    result.textContent = '';
  }
  result.textContent += '5';
  numberPressed = true;
})
six.addEventListener('click', function(e){
  if (!numberPressed) {
    result.textContent = '';
  }
  result.textContent += '6';
  numberPressed = true;
})
seven.addEventListener('click', function(e){
  if (!numberPressed) {
    result.textContent = '';
  }
  result.textContent += '7';
  numberPressed = true;
})
eight.addEventListener('click', function(e){
  if (!numberPressed) {
    result.textContent = '';
  }
  result.textContent += '8';
  numberPressed = true;
})
nine.addEventListener('click', function(e){
  if (!numberPressed) {
    result.textContent = '';
  }
  result.textContent += '9';
  numberPressed = true;
})

var calculate = function(currentVal, heldVal, lastButton){

  switch (lastButton) {
    case 'add':
      result.textContent = (result.textContent * 1) + (heldVal * 1);
      break;
    case 'subtract':
      result.textContent = (heldVal * 1) - (result.textContent * 1);
      break;
    case 'multiply':
      result.textContent = (result.textContent * 1) * (heldVal * 1);
      break;
    case 'divide':
      result.textContent = (heldVal * 1) / (result.textContent * 1);
      break;
    case 'equals':
      return result.textContent;
      break;
    default:
      break;
  }
  return result.textContent;
}



add.addEventListener('click', function(e){
  hold = calculate(result.textContent, hold, lastButton);
  lastButton = 'add'
  numberPressed = false;
})
subtract.addEventListener('click', function(e){
  hold = calculate(result.textContent, hold, lastButton);
  lastButton = 'subtract'
  numberPressed = false;
})
multiply.addEventListener('click', function(e){
  hold = calculate(result.textContent, hold, lastButton);
  lastButton = 'multiply'
  numberPressed = false;
})
divide.addEventListener('click', function(e){
  hold = calculate(result.textContent, hold, lastButton);
  lastButton = 'divide'
  numberPressed = false;
})

equals.addEventListener('click', function(e){
  hold = calculate(result.textContent, hold, lastButton);
  lastButton = 'equals'
  numberPressed = false;
})

clear.addEventListener('click', function(e){
  hold = 0;
  result.textContent = '';
  lastButton = '';
  numberPressed = false;
})
