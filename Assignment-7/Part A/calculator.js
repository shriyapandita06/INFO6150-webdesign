
const username = localStorage.getItem("username");

// Update the main label with the username if available
// if (username) {
//   $("#main-label").text(`Simple Calculator - Welcome, ${username}`);
// }
if (username) {
  $("#main-label").text(`Hello, ${username}! Ready to Calculate?`);
}

// Function to validate if the input is a valid number
const isValidNum = (value) => {
  return !isNaN(value) && isFinite(value) && value.trim() !== "";
};

// Function to validate input and display error messages
const validateInput = (input, errorId) => {
  const errorElement = $(`#${errorId}`);
  if (input.trim() === "") {
    errorElement.text("This field is required").show();
    return false;
  }
  if (!isValidNum(input)) {
    errorElement.text("Enter a valid number format").show();
    return false;
  }
  errorElement.hide();
  return true;
};

// Single function to handle all arithmetic operations
const performOperation = (operation) => {
  const num1 = $("#number1").val();
  const num2 = $("#number2").val();

  // Validate both inputs
  const isNum1Valid = validateInput(num1, "number1-error");
  const isNum2Valid = validateInput(num2, "number2-error");

  if (isNum1Valid && isNum2Valid) {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
    let result;

    // Perform the operation based on the parameter
    switch (operation) {
      case "add":
        result = parsedNum1 + parsedNum2;
        break;
      case "subtract":
        result = parsedNum1 - parsedNum2;
        break;
      case "multiply":
        result = parsedNum1 * parsedNum2;
        break;
      case "divide":
        if (parsedNum2 === 0) {
          $("#result-error").text("Cannot divide by zero").show();
          $("#result").val("");
          return;
        } else {
          result = parsedNum1 / parsedNum2;
        }
        break;
      default:
        return;
    }

    // Check for infinity or invalid result
    if (!isFinite(result)) {
      $("#result-error").text("Result is infinite").show();
      $("#result").val("");
    } else {
      $("#result").val(result);
      $("#result-error").hide();
    }
  }
};



