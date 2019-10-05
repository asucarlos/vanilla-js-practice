//data set
let typedValue = [];
let operator = null;
let OperatorPressed = false;
let ResultAppeared = false;
let isMinus = false;
let formula = [];

//get buttons
let monitor = document.querySelector(".monitor").innerHTML;
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");
const AC = document.querySelector(".AC");
const percent = document.querySelector(".percent");
const minus = document.querySelector(".minus");

//operator key
operators.forEach(elem => {
  elem.addEventListener("click", function(e) {
    operator = e.target.innerHTML;
    if (!OperatorPressed) {
      OperatorPressed = true;
      formula = formula.concat(typedValue);
      typedValue = [];
    }
    isMinus = false;
  });
});

//number key
numbers.forEach(elem => {
  elem.addEventListener("click", function(e) {
    if (OperatorPressed) {
      OperatorPressed = false;
      formula.push(operator);
    }
    const newValue = e.target.innerHTML;
    typedValue.push(newValue); //update state
    document.querySelector(".monitor").innerHTML = typedValue.join(""); //show on monitor
  });
});

//equal
equal.addEventListener("click", e => {
  formula.push(typedValue);
  let result = eval(formula.join(""));
  document.querySelector(".monitor").innerHTML = result; //show on monitor
  formula = [result];
  typedValue = [];
  isMinus = false;
});

//AC
AC.addEventListener("click", e => {
  typedValue = [];
  formula.length = 0;
  isMinus = false;
  document.querySelector(".monitor").innerHTML = 0; //show on monitor
});

//percent
percent.addEventListener("click", e => {
  typedValue[0] = typedValue[0] / 100;
  document.querySelector(".monitor").innerHTML = typedValue.join(""); //show on monitor
});

//minus
minus.addEventListener("click", e => {
  isMinus = !isMinus;
  if (isMinus) {
    typedValue.splice(0, 0, "-");
  } else {
    typedValue.shift();
  }
  document.querySelector(".monitor").innerHTML = typedValue.join(""); //show on monitor
});
