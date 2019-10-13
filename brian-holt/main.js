let runningTotal = 0;
let buffer = "0";
let previousOperator;

const monitor = document.querySelector(".monitor");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
    //this is a number
  } else {
    //this is not a number
    handleNumber(value);
  }
  monitor.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "AC":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      handleEquals();
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}

function handleEquals() {
  if (previousOperator === null) {
    //need you two numbers to do math
    return;
  }
  flushOperation(parseInt(buffer));
  previousOperator = null;
  buffer = runningTotal;
  runningTotal = 0;
}

function handleMath(symbol) {
  if (buffer === "0") {
    // do nothing
    return;
  }

  const intBuffer = +buffer;

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = symbol;

  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= intBuffer;
  }
  console.log(runningTotal);
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document.querySelector(".buttons-container").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
  });
}

init();
