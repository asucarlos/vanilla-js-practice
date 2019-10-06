//data set
let typedValue = [];
let operator = null;
let OperatorPressed = false;
let ResultAppeared = false;
let isMinus = false;
let formula = [];

//operator key
$(".operator").on("click", function(e) {
  operator = e.target.innerHTML;
  if (!OperatorPressed) {
    OperatorPressed = true;
    formula = formula.concat(typedValue);
    typedValue = [];
  }
  isMinus = false;
});

//number key
$(".number").on("click", function(e) {
  const newValue = e.target.innerHTML;
  if (OperatorPressed) {
    OperatorPressed = false;
    formula.push(operator);
  }
  typedValue.push(newValue); //update state
  document.querySelector(".monitor").innerHTML = typedValue.join(""); //show on monitor
});

//equal
$(".equal").on("click", function(e) {
  formula.push(typedValue);
  let result = eval(formula.join(""));
  document.querySelector(".monitor").innerHTML = result; //show on monitor
  formula = [result];
  typedValue = [];
  isMinus = false;
});

//AC
$(".AC").on("click", e => {
  typedValue = [];
  formula.length = 0;
  isMinus = false;
  document.querySelector(".monitor").innerHTML = 0; //show on monitor
});

//percent
$(".percent").on("click", e => {
  typedValue[0] = typedValue[0] / 100;
  document.querySelector(".monitor").innerHTML = typedValue.join(""); //show on monitor
});

//minus
$("minus").on("click", e => {
  isMinus = !isMinus;
  if (isMinus) {
    typedValue.splice(0, 0, "-");
  } else {
    typedValue.shift();
  }
  document.querySelector(".monitor").innerHTML = typedValue.join(""); //show on monitor
});
