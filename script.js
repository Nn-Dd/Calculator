document.addEventListener("DOMContentLoaded", function () {
  let operation = document.getElementById("operation");
  let resultSpan = document.getElementById("result"); // Assuming you have an element with id "result"

  let operators = document.querySelectorAll(".operator");
  let plusMinusOperation = document.getElementById("plus-minus");
  let numbers = document.querySelectorAll(".numbers");

  let deleteBtn = document.getElementById("delete-btn");
  let resetBtn = document.getElementById("reset-btn");
  let resultBtn = document.getElementById("result-btn");

  resetBtn.addEventListener("click", () => {
    operation.innerText = "0";
    resultSpan.innerText = "0";
  });

  deleteBtn.addEventListener("click", () => {
    if (operation.innerText === "0") {
      operation.innerText = "0";
    } else if (operation.innerText.length === 1) {
      operation.innerText = "0";
    } else {
      operation.innerText = operation.innerText.slice(0, -1);
    }
  });

  plusMinusOperation.addEventListener("click", () => {
    if (
      operation.innerHTML.endsWith("+") ||
      operation.innerHTML.endsWith("-") ||
      operation.innerHTML.endsWith("*") ||
      operation.innerHTML.endsWith("÷") ||
      operation.innerHTML.endsWith("%")
    )
      operation.innerText = operation.innerHTML;
    else if (operation.innerHTML.startsWith("-")) {
      operation.innerHTML = operation.innerHTML.slice(1); // Remove the minus sign
    } else {
      operation.innerHTML = "-" + operation.innerHTML;
    }
  });

  resultBtn.addEventListener("click", () => {
    resultString = operation.innerHTML;
    var calculate = new Function("return " + resultString);
    let resultToFix;
    // Call the function to get the result
    var result = calculate();
    if (result % 1 != 0) {
      resultToFix = result.toFixed(2);
      resultSpan.innerText = resultToFix;
    } else {
      resultSpan.innerText = result;
    }

    // Print the result
    operation.innerText = "0";
  });

  // Add event listeners for number buttons
  numbers.forEach(function (number) {
    number.addEventListener("click", function () {
      // Append the clicked number to the operation display
      if (operation.innerText === "0") {
        operation.innerText = number.innerHTML;
      } else {
        operation.innerText += number.innerHTML;
      }
    });
  });

  operators.forEach(function (operator) {
    operator.addEventListener("click", function () {
      if (operation.innerText === "0") {
        operation.innerText = operator.innerHTML;
      } else if (
        operation.innerHTML.endsWith("+") ||
        operation.innerHTML.endsWith("-") ||
        operation.innerHTML.endsWith("*") ||
        operation.innerHTML.endsWith("÷")
      ) {
        operation.innerText =
          operation.innerText.slice(0, -1) + operator.innerText;
      } else {
        operation.innerText += operator.innerText;
      }
    });
  });

  // You may want to add event listeners for operators and implement their functionality.
});
