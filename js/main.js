'use strict'
function innit() {
  fizzBuzz();
  window.output = document.getElementById('output');
  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', clearField);
  const submitCustom = document.getElementById('buzzit');
  submitCustom.addEventListener('click', generate);
}

function getElementValue(id) {
  return document.getElementById(id).value
}

function setCell(outputContainer, name, firstValue) {
  outputContainer.appendChild(document.createTextNode(firstValue || name));
  outputContainer.setAttribute('class', name);
}

function fizzBuzz() {
  clearField();
  for(let i = 1; i<101; i++){
    let outputContainer = document.createElement('div');
    let outputContainerName = document.createElement('h2');
    outputContainer.appendChild(outputContainerName);
    output.appendChild(outputContainer).setAttribute('id', 'myid_');

    if (i % 3 ===0 && i % 5 === 0) {
      setCell(outputContainer,'fizzbuzz');
    } else if (i % 3 === 0 && i % 5 !== 0) {
      setCell(outputContainer,'fizz');
    } else if (i % 5 === 0 && i % 3 !== 0){
      setCell(outputContainer,'buzz');
    } else if (i % 3 !== 0 && i % 5 !== 0){
      setCell(outputContainer,'number', i);
    }
  }
}

function clearField() {
  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
}

function generate() {
  clearField();

  let inputFirstValue = getElementValue('startValue');
  let inputSecondValue = getElementValue('endValue');
  let fizzValue = getElementValue('fizzValue');
  let buzzValue = getElementValue('buzzValue');

  for (inputFirstValue; inputFirstValue <= inputSecondValue; inputFirstValue++) {
    const outputContainer = document.createElement('div');
    const outputContainerName = document.createElement('h2');
    outputContainer.appendChild(outputContainerName);
    output.appendChild(outputContainer).setAttribute('id', 'myid_');

    if (inputFirstValue % fizzValue === 0 && inputFirstValue % buzzValue === 0){
      setCell(outputContainer,'fizzbuzz');
    } else if (inputFirstValue % fizzValue === 0 && inputFirstValue % buzzValue !== 0) {
      setCell(outputContainer,'fizz');
    } else if (inputFirstValue % buzzValue === 0 && inputFirstValue % fizzValue !== 0){
      setCell(outputContainer,'buzz');
    } else if (inputFirstValue % fizzValue !== 0 && inputFirstValue % buzzValue !== 0){
      setCell(outputContainer,'number', inputFirstValue);
    }
  }
}

innit();
