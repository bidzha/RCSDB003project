function innit () {
  document.getElementById('output');
  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', clearField);
  const submitCustom = document.getElementById('buzzit');
  submitCustom.addEventListener('click', generate);
}

const fizzBuzz = function () {
  clearField();
  for(let i = 1; i<101; i++){
    let outputContainer = document.createElement('div');
    let outputContainerName = document.createElement('h2');
    outputContainer.appendChild(outputContainerName);
    output.appendChild(outputContainer).setAttribute('id', 'myid_');


    if (i % 3 ===0 && i % 5 === 0) {
      outputContainer.appendChild(document.createTextNode('fizzbuzz'));
      outputContainer.setAttribute('class', "fizzbuzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      outputContainer.appendChild(document.createTextNode('fizz'));
      outputContainer.setAttribute('class', "fizz");
    } else if (i % 5 === 0 && i % 3 !== 0){
      outputContainer.appendChild(document.createTextNode('buzz'));
      outputContainer.setAttribute('class', "buzz");
    } else if (i % 3 !== 0 && i % 5 !== 0){
      outputContainer.appendChild(document.createTextNode(i));
      outputContainer.setAttribute('class', 'number');
    }
  }
};

fizzBuzz();

function clearField () {
  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
}

function generate() {
  clearField();

  let inputFirstValue = document.getElementById('startValue').value;
  let inputSecondValue = document.getElementById('endValue').value;
  let fizzValue = document.getElementById('fizzValue').value;
  let buzzValue = document.getElementById('buzzValue').value;
  let a = inputFirstValue;
  let b = inputSecondValue;

  for (a; a<=b; a++){
    const outputContainer = document.createElement('div');
    const outputContainerName = document.createElement('h2');
    outputContainer.appendChild(outputContainerName);
    output.appendChild(outputContainer).setAttribute('id', 'myid_');

    if (a % fizzValue === 0 && a % buzzValue === 0){
      outputContainer.appendChild(document.createTextNode(' fizzbuzz'));
      outputContainer.setAttribute('class', 'fizzbuzz');
    }
      else if (a % fizzValue === 0 && a % buzzValue !== 0) {
      outputContainer.appendChild(document.createTextNode('fizz'));
      outputContainer.setAttribute('class', 'fizz');
    }
      else if (a % buzzValue === 0 && a % fizzValue !== 0){
      outputContainer.appendChild(document.createTextNode('buzz'));
      outputContainer.setAttribute('class', 'buzz');
    }
      else if (a % fizzValue !== 0 && a % buzzValue !== 0){
      outputContainer.appendChild(document.createTextNode(a));
      outputContainer.setAttribute('class', 'number');
    }
  }
}

innit();