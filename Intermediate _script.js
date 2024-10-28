let currentOperand = '';
let previousOperand = '';
let operator = '';

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number;
  updateDisplay();
}

function appendDot() {
  if (!currentOperand.includes('.')) {
    currentOperand += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentOperand = '';
  updateDisplay();
}

function resetCalculator() {
  currentOperand = '';
  previousOperand = '';
  operator = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = currentOperand || '0';
}

function chooseOperator(selectedOperator) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    calculate();
  }
  operator = selectedOperator;
  previousOperand = currentOperand;
  currentOperand = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    default:
      return;
  }

  currentOperand = result.toString();
  operator = '';
  previousOperand = '';
  updateDisplay();
}
