window.addEventListener("load", validateForm);

var titleElements = document.getElementsByClassName("titleRadio");
var mail = document.getElementById("emailId");
var phone = document.getElementById("phoneNumber");
var fName = document.getElementById("firstName");
var lName = document.getElementById("lastName");
var address1 = document.getElementById("streetAddress1");
var address2 = document.getElementById("streetAddress2");
var zip = document.getElementById("zipcode");
var city = document.getElementById("city");
var state = document.getElementById("state");
var sourceElements = document.getElementsByClassName("source");
var drinkSize = document.getElementsByClassName("checkBoxContainer");
var drinkName = document.getElementById("drink");
var comments = document.getElementById("comments");
var smallDrink = document.getElementById("drinkCheckSmall");
var mediumDrink = document.getElementById("drinkCheckMed");
var largeDrink = document.getElementById("drinkCheckLarge");
var dynamicTextField = document.getElementById("dynamic_textField");

var checkCount = 0;

var labelSmall = document.getElementById("drinkCheckTextSmall");
var labelMedium = document.getElementById("drinkCheckTextMed");
var labelLarge = document.getElementById("drinkCheckTextLarge");

labelSmall.htmlFor = "drinkCheckBox";
labelMedium.htmlFor = "drinkCheckBox";
labelLarge.htmlFor = "drinkCheckBox";

var selectBox = document.getElementById("drink");

var submitButton = document.getElementById("submitButton");

SmallPriceList = [
  "Small : $1.0 ",
  "Small : $1.2 ",
  "Small : $1.8 ",
  "Small : $1.4 ",
  "Small : $1.6 ",
];
MediumPriceList = [
  "Medium : $2.6 ",
  "Medium : $2.5 ",
  "Medium : $2.4 ",
  "Medium : $2.2 ",
  "Medium : $2.1 ",
];
LargePriceList = [
  "Large : $3.5 ",
  "Large : $3.7 ",
  "Large : $3.2 ",
  "Large : $3.1 ",
  "Large : $3.6 ",
];

var inputs = document.querySelectorAll(
  "#firstName, #lastName, #emailId, #phoneNumber, #streetAddress1, #streetAddress2, #zipcode, #city, #state, #drink, .drinkSize, #comments, .source"
);

selectBox.addEventListener("change", function handleChange(event) {

      // Clear checkboxes by their specific IDs when drink is changed
      document.getElementById("drinkCheckSmall").checked = false;
      document.getElementById("drinkCheckMed").checked = false;
      document.getElementById("drinkCheckLarge").checked = false;
      
  var checkBoxContainer = document.getElementsByClassName("checkBoxContainer");
  for (var i = 0; i < checkBoxContainer.length; i++) {
    checkBoxContainer[i].style.display = "flex";
  }

  var checkboxes = document.querySelectorAll(".drinkSize input[type=checkbox]");
  checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;  // Uncheck all checkboxes
  });


  // Clear and hide the Additional Requirements field
  const additionalRequirementsContainer = document.getElementById("additionalRequirementsContainer");
  const dynamicTextField = document.getElementById("dynamic_textField");
  additionalRequirementsContainer.style.display = "none";  // Hide the additional requirements box
  dynamicTextField.value = "";  // Clear the text in the additional requirements box

  var Drinkitem = document.getElementById("drink").value;

  if (Drinkitem == "Milk") {
    labelSmall.innerHTML = SmallPriceList[0];
    labelMedium.innerHTML = MediumPriceList[0];
    labelLarge.innerHTML = LargePriceList[0];
  } else if (Drinkitem == "Coffee") {
    labelSmall.innerHTML = SmallPriceList[1];
    labelMedium.innerHTML = MediumPriceList[1];
    labelLarge.innerHTML = LargePriceList[1];
  } else if (Drinkitem == "Hot chocolate") {
    labelSmall.innerHTML = SmallPriceList[2];
    labelMedium.innerHTML = MediumPriceList[2];
    labelLarge.innerHTML = LargePriceList[2];
  } else if (Drinkitem == "Tea") {
    labelSmall.innerHTML = SmallPriceList[3];
    labelMedium.innerHTML = MediumPriceList[3];
    labelLarge.innerHTML = LargePriceList[3];
  } else if (Drinkitem == "Green tea") {
    labelSmall.innerHTML = SmallPriceList[3];
    labelMedium.innerHTML = MediumPriceList[3];
    labelLarge.innerHTML = LargePriceList[3];
  }
});

function validateLength(input_str) {
  var trimmedInputStr = input_str.trim();
  return trimmedInputStr.length >= 1 && trimmedInputStr.length <= 50;
}

// function validatePhoneNumber(input_str) {
//   var re = /\d{3}-?\d{3}-\d{4}$/;

//   return re.test(input_str);
// }

function validatePhoneNumber(input_str) {
  var re = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
  return re.test(input_str);
}

function validateZip(input_str) {
  var re = /(^\d{5}$)/;
  return re.test(input_str);
}

function validateRadioButton() {
  for (var i = 0; i < drinkSize.length; i++) {
    var drink = drinkSize[i];
    if (drink.querySelector("input[type=checkbox]").checked) {
      return true;
    }
  }
  return false;
}

function validateEmail(mail) {
  return (
    validateLength(mail) &&
    String(mail)
      .toLowerCase()
      .match(/^[A-Za-z0-9._%+-]+@northeastern\.edu$/)
  );
}

function validateName(name) {
  return (
    validateLength(name) &&
    String(name)
      .toLowerCase()
      .match(/^[a-zA-Z]+$/)
  );
}

function validateAddress(address) {
  return /^[a-zA-Z0-9\s,'-/#.]+$/.test(address.trim()) && address.trim().length >= 5 && address.trim().length <= 100;
}

function validateOptionalAddress(address) {
  // Allow the field to be empty, but if it has content, apply the same validation rules as Address Line 1
  if (address.trim() === "") {
    return true; // No validation needed if it's empty
  }
  return /^[a-zA-Z0-9\s,'-/#.]+$/.test(address.trim()) && address.trim().length <= 100;
}

function validateAdditionalRequirements(additionalReq) {
  const trimmedReq = additionalReq.trim();
  
  // Define allowed special characters (comma, period, exclamation mark, question mark, and space)
  const allowedCharacters = /^[a-zA-Z0-9\s,.!?]*$/;

  // Not null, Min length: 5, Max length: 250
  return (
    trimmedReq.length >= 5 && 
    trimmedReq.length <= 250 &&
    allowedCharacters.test(trimmedReq) // Ensure only allowed characters are used
  );
}

function validateComments(comments) {
  const trimmedComments = comments.trim();
  
  // Define allowed special characters (comma, period, exclamation mark, question mark, and space)
  const allowedCharacters = /^[a-zA-Z0-9\s,.!?]*$/;

  // Not null, Min length: 5, Max length: 250
  return (
    trimmedComments.length >= 5 && 
    trimmedComments.length <= 250 &&
    allowedCharacters.test(trimmedComments) // Ensure only allowed characters are used
  );
}

// function validateTextField(value) {
//   if (value.checked) {
//     checkCount++;
//   } else {
//     checkCount--;
//   }

//   if (checkCount == 0) {
//     document.getElementById("dynamic_textField").value = "";
//     document.getElementById("dynamic_textField").style.display = "none";
//   } else {
//     document.getElementById("dynamic_textField").required = true;
//     document.getElementById("dynamic_textField").style.display = "block";
//   }
// }

function validateTextField(checkbox) {
  const additionalRequirementsContainer = document.getElementById("additionalRequirementsContainer");
  const errorMessage = document.getElementById("customizations_error");
  const additionalReqField = document.getElementById("dynamic_textField");
  const checkboxes = document.querySelectorAll(".drinkSize");

  // Track whether any checkbox is selected
  let anyChecked = false;

  checkboxes.forEach(function(box) {
    if (box.checked) {
      anyChecked = true;
    }
  });

  // Show or hide the additional requirements field based on checkbox status
  // if (anyChecked) {
  //   additionalRequirementsContainer.style.display = "block";  // Show the field
  //   document.getElementById("dynamic_textField").required = true; // Make it required
  //   errorMessage.style.display = "block";  // Show the error message
  // } else {
  //   additionalRequirementsContainer.style.display = "none";  // Hide the field
  //   document.getElementById("dynamic_textField").required = false; // Remove required attribute
  //   errorMessage.style.display = "none";  // Hide the error message
  // }
  if (anyChecked) {
    additionalRequirementsContainer.style.display = "block";  // Show the field
    additionalReqField.required = true; // Make it required

    // Validate Additional Requirements field
    if (!validateAdditionalRequirements(additionalReqField.value)) {
      errorMessage.style.display = "block";  // Show the error message
    } else {
      errorMessage.style.display = "none";   // Hide the error message
    }
  } else {
    additionalRequirementsContainer.style.display = "none";  // Hide the field
    additionalReqField.required = false; // Remove required attribute
    errorMessage.style.display = "none";  // Hide the error message
  }
}

// function validateTextField(checkbox) {
//   const additionalRequirementsContainer = document.getElementById("additionalRequirementsContainer");
//   const checkboxes = document.querySelectorAll(".drinkSize");

//   let anyChecked = false;

//   // Check the state of each checkbox
//   checkboxes.forEach(function(box) {
//     if (box.checked) {
//       anyChecked = true;
//     }
//   });

//   // Log to ensure the correct checkboxes are being recognized
//   console.log("Any checkbox selected: ", anyChecked);

//   // Show or hide additional requirements based on whether any checkbox is selected
//   if (anyChecked) {
//     additionalRequirementsContainer.style.display = "block";  // Show the additional requirements field
//     document.getElementById("dynamic_textField").required = true; // Make it required
//     console.log("Showing the additional requirements field.");
//   } else {
//     additionalRequirementsContainer.style.display = "none";   // Hide the additional requirements field
//     document.getElementById("dynamic_textField").required = false; // Remove required attribute
//     console.log("Hiding the additional requirements field.");
//   }
// }

// // Extra debugging helper to ensure the script is being loaded
// console.log("Script loaded successfully.");


mail.onkeyup = function () {
  if (!validateEmail(mail.value)) {
    document.getElementById("email_error").style.display = "block";
  } else {
    document.getElementById("email_error").style.display = "none";
  }
};

phone.onkeyup = function () {
  if (!validatePhoneNumber(phone.value)) {
    document.getElementById("phone_error").style.display = "block";
  } else {
    document.getElementById("phone_error").style.display = "none";
  }
};

fName.onkeyup = function () {
  if (!validateName(fName.value)) {
    document.getElementById("firstname_error").style.display = "block";
  } else {
    document.getElementById("firstname_error").style.display = "none";
  }
};

lName.onkeyup = function () {
  if (!validateName(lName.value)) {
    document.getElementById("lastname_error").style.display = "block";
  } else {
    document.getElementById("lastname_error").style.display = "none";
  }
};

address1.onkeyup = function () {
  if (!validateAddress(address1.value)) {
    document.getElementById("address1_error").style.display = "block";
  } else {
    document.getElementById("address1_error").style.display = "none";
  }
};

address2.onkeyup = function () {
  if (!validateOptionalAddress(address2.value)) {
    document.getElementById("address2_error").style.display = "block";
  } else {
    document.getElementById("address2_error").style.display = "none";
  }
};

city.onkeyup = function () {
  if (!validateName(city.value)) {
    document.getElementById("city_error").style.display = "block";
  } else {
    document.getElementById("city_error").style.display = "none";
  }
};

state.onkeyup = function () {
  if (!validateName(state.value)) {
    document.getElementById("state_error").style.display = "block";
  } else {
    document.getElementById("state_error").style.display = "none";
  }
};

zip.onkeyup = function () {
  if (!validateZip(zip.value)) {
    document.getElementById("zip_error").style.display = "block";
  } else {
    document.getElementById("zip_error").style.display = "none";
  }
};

smallDrink.onclick = function () {
  document.getElementById("radioButton_error").style.display = "none";
};

mediumDrink.onclick = function () {
  document.getElementById("radioButton_error").style.display = "none";
};

largeDrink.onclick = function () {
  document.getElementById("radioButton_error").style.display = "none";
};

comments.onkeyup = function () {
  if (!validateComments(comments.value)) {
    document.getElementById("comments_error").style.display = "block";
  } else {
    document.getElementById("comments_error").style.display = "none";
  }
};

dynamicTextField.onkeyup = function () {
  if (!validateAdditionalRequirements(dynamicTextField.value)) {
    document.getElementById("customizations_error").style.display = "block";
  } else {
    document.getElementById("customizations_error").style.display = "none";
  }
};

// function isValidated() {
//   if (
//     validateZip(zip.value) &&
//     validateName(lName.value) &&
//     validateName(fName.value) &&
//     validatePhoneNumber(phone.value) &&
//     validateEmail(mail.value) &&
//     validateRadioButton() &&
//     validateAddress(address1.value) 
//     /*validateAdditionalRequirements(dynamicTextField.value) */
//     /*validateComments(comments.value) */
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function validateForm() {
//   var form = document.getElementById("myForm");

//   submitButton.disabled = true;

//   form.addEventListener("submit", function (event) {
//     if (!validatePhoneNumber(phone.value)) {
//       document.getElementById("phone_error").style.display = "block";
//     } else {
//       document.getElementById("phone_error").style.display = "none";
//     }

//     if (!validateEmail(mail.value)) {
//       document.getElementById("email_error").style.display = "block";
//     } else {
//       document.getElementById("email_error").style.display = "none";
//     }

//     if (!validateName(fName.value)) {
//       document.getElementById("firstname_error").style.display = "block";
//     } else {
//       document.getElementById("firstname_error").style.display = "none";
//     }
//     if (!validateName(lName.value)) {
//       document.getElementById("lastname_error").style.display = "block";
//     } else {
//       document.getElementById("lastname_error").style.display = "none";
//     }

//     if (!validateName(city.value)) {
//       document.getElementById("city_error").style.display = "block";
//     } else {
//       document.getElementById("city_error").style.display = "none";
//     }

//     if (!validateName(state.value)) {
//       document.getElementById("state_error").style.display = "block";
//     } else {
//       document.getElementById("state_error").style.display = "none";
//     }

//     if (!validateZip(zip.value)) {
//       document.getElementById("zip_error").style.display = "block";
//     } else {
//       document.getElementById("zip_error").style.display = "none";
//     }

//     if (!validateAddress(address1.value)) {
//       document.getElementById("address1_error").style.display = "block";
//       valid = false;
//     } else {
//       document.getElementById("address1_error").style.display = "none";
//     }
    
//     if (!validateOptionalAddress(address2.value)) {
//       document.getElementById("address2_error").style.display = "block"; // Show error if invalid
//     } else {
//       document.getElementById("address2_error").style.display = "none";  // Hide error if valid or empty
//     }
    
//     if (!validateRadioButton()) {
//       document.getElementById("radioButton_error").style.display = "block";
//     } else {
//       document.getElementById("radioButton_error").style.display = "none";
//     }

//     if (!validateComments(comments.value)) {
//       document.getElementById("comments_error").style.display = "block";
//     } else {
//       document.getElementById("comments_error").style.display = "none";
//     }

//     if (isValidated() === true) {
//       var drinkSize = getDrinkName();

//       addRow(
//         titleElements,
//         fName.value,
//         lName.value,
//         mail.value,
//         phone.value,
//         address1.value,
//         address2.value,
//         zip.value,
//         city.value,
//         state.value,
//         drinkName.value,
//         drinkSize,
//         dynamicTextField,
//         sourceElements,
//         comments.value
//       );

//       resetForm();
//     }
//     event.preventDefault();
//   });
// }


function isValidated() {
  if (
    validateZip(zip.value) &&
    validateName(lName.value) &&
    validateName(fName.value) &&
    validatePhoneNumber(phone.value) &&
    validateEmail(mail.value) &&
    validateRadioButton() &&
    validateAddress(address1.value) &&
    validateAdditionalRequirements(dynamicTextField.value) &&  // Added check for additional customizations
    validateComments(comments.value) // Added check for comments
  ) {
    return true;
  } else {
    return false;
  }
}

function validateForm() {
  var form = document.getElementById("myForm");

  // Initially disable the submit button
  submitButton.disabled = true;

  // Function to check if all required fields and additional customizations/comments are valid
  function validateFields() {
    const customizations = document.getElementById("dynamic_textField").value.trim();
    const comments = document.getElementById("comments").value.trim();
    const isFormValid = isValidated();  // Checks all required form fields

    // Enable/disable submit button based on form validity and customizations/comments fields
    if (isFormValid && customizations.length > 0 && comments.length > 0) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  // Add event listeners to all form fields
  mail.addEventListener("keyup", validateFields);
  phone.addEventListener("keyup", validateFields);
  fName.addEventListener("keyup", validateFields);
  lName.addEventListener("keyup", validateFields);
  address1.addEventListener("keyup", validateFields);
  address2.addEventListener("keyup", validateFields);
  zip.addEventListener("keyup", validateFields);
  city.addEventListener("keyup", validateFields);
  state.addEventListener("keyup", validateFields);
  
  // Event listeners for the additional customizations and comments fields
  dynamicTextField.addEventListener("keyup", validateFields);
  comments.addEventListener("keyup", validateFields);

  // Event listeners for drink size checkboxes
  smallDrink.addEventListener("click", validateFields);
  mediumDrink.addEventListener("click", validateFields);
  largeDrink.addEventListener("click", validateFields);

  form.addEventListener("submit", function (event) {
    // Form validation before submitting
    if (!validatePhoneNumber(phone.value)) {
      document.getElementById("phone_error").style.display = "block";
    } else {
      document.getElementById("phone_error").style.display = "none";
    }

    if (!validateEmail(mail.value)) {
      document.getElementById("email_error").style.display = "block";
    } else {
      document.getElementById("email_error").style.display = "none";
    }

    if (!validateName(fName.value)) {
      document.getElementById("firstname_error").style.display = "block";
    } else {
      document.getElementById("firstname_error").style.display = "none";
    }

    if (!validateName(lName.value)) {
      document.getElementById("lastname_error").style.display = "block";
    } else {
      document.getElementById("lastname_error").style.display = "none";
    }

    if (!validateName(city.value)) {
      document.getElementById("city_error").style.display = "block";
    } else {
      document.getElementById("city_error").style.display = "none";
    }

    if (!validateName(state.value)) {
      document.getElementById("state_error").style.display = "block";
    } else {
      document.getElementById("state_error").style.display = "none";
    }

    if (!validateZip(zip.value)) {
      document.getElementById("zip_error").style.display = "block";
    } else {
      document.getElementById("zip_error").style.display = "none";
    }

    if (!validateAddress(address1.value)) {
      document.getElementById("address1_error").style.display = "block";
    } else {
      document.getElementById("address1_error").style.display = "none";
    }

    if (!validateOptionalAddress(address2.value)) {
      document.getElementById("address2_error").style.display = "block"; // Show error if invalid
    } else {
      document.getElementById("address2_error").style.display = "none";  // Hide error if valid or empty
    }

    if (!validateRadioButton()) {
      document.getElementById("radioButton_error").style.display = "block";
    } else {
      document.getElementById("radioButton_error").style.display = "none";
    }

    if (!validateComments(comments.value)) {
      document.getElementById("comments_error").style.display = "block";
    } else {
      document.getElementById("comments_error").style.display = "none";
    }

    // Submit form if everything is validated
    if (isValidated() === true) {
      var drinkSize = getDrinkName();

      addRow(
        titleElements,
        fName.value,
        lName.value,
        mail.value,
        phone.value,
        address1.value,
        address2.value,
        zip.value,
        city.value,
        state.value,
        drinkName.value,
        drinkSize,
        dynamicTextField,
        sourceElements,
        comments.value
      );

      resetForm();
    }
    event.preventDefault();
  });
}


function resetForm() {
  console.log("reset");
  inputs.forEach((input) => {
    if (input.className == "source") {
      input.checked = false;
    } else {
      input.value = "";
      unCheckRadioButton();
    }
  });

  var checkBoxContainer = document.getElementsByClassName("checkBoxContainer");
  for (var i = 0; i < checkBoxContainer.length; i++) {
    checkBoxContainer[i].style.display = "none";
  }

  var titleRadios = document.querySelectorAll('input[name="title"]');

  titleRadios.forEach(function (radio) {
    radio.checked = false;
  });

  submitButton.disabled = true;

  const errorElements = document.querySelectorAll('[id$="_error"]');

  errorElements.forEach(function (element) {
    element.style.display = "none";
  });
}

function unCheckRadioButton() {
  for (var i = 0; i < drinkSize.length; i++) {
    var drink = drinkSize[i];
    if (drink.querySelector("input[type=checkbox]").checked) {
      drink.querySelector("input[type=checkbox]").checked = false;
      validateTextField(false);
    }
  }
}

// selectBox.addEventListener("change", function handleChange(event) {
//   var checkBoxContainer = document.getElementsByClassName("checkBoxContainer");
//   for (var i = 0; i < checkBoxContainer.length; i++) {
//     checkBoxContainer[i].style.display = "flex";
//   }

//   var Drinkitem = document.getElementById("drink").value;

//   if (Drinkitem == "milk") {
//     labelSmall.innerHTML = SmallPriceList[0];
//     labelMedium.innerHTML = MediumPriceList[0];
//     labelLarge.innerHTML = LargePriceList[0];
//   } else if (Drinkitem == "Coffee") {
//     labelSmall.innerHTML = SmallPriceList[1];
//     labelMedium.innerHTML = MediumPriceList[1];
//     labelLarge.innerHTML = LargePriceList[1];
//   } else if (Drinkitem == "Hot chocolate") {
//     labelSmall.innerHTML = SmallPriceList[2];
//     labelMedium.innerHTML = MediumPriceList[2];
//     labelLarge.innerHTML = LargePriceList[2];
//   } else if (Drinkitem == "Tea") {
//     labelSmall.innerHTML = SmallPriceList[3];
//     labelMedium.innerHTML = MediumPriceList[3];
//     labelLarge.innerHTML = LargePriceList[3];
//   } else if (Drinkitem == "Green tea") {
//     labelSmall.innerHTML = SmallPriceList[3];
//     labelMedium.innerHTML = MediumPriceList[3];
//     labelLarge.innerHTML = LargePriceList[3];
//   }
// });

// selectBox.addEventListener("change", function handleChange(event) {
//   // Reset checkboxes when drink is changed
//   var checkboxes = document.querySelectorAll(".drinkSize input[type=checkbox]");
//   checkboxes.forEach(function(checkbox) {
//       checkbox.checked = false;  // Uncheck all checkboxes
//   });

//   // Clear and hide the Additional Requirements field
//   const additionalRequirementsContainer = document.getElementById("additionalRequirementsContainer");
//   const dynamicTextField = document.getElementById("dynamic_textField");
//   additionalRequirementsContainer.style.display = "none";  // Hide the additional requirements box
//   dynamicTextField.value = "";  // Clear the text in the additional requirements box

//   // Update drink price labels based on the new drink selection
//   var Drinkitem = document.getElementById("drink").value;
//   if (Drinkitem == "Milk") {
//       labelSmall.innerHTML = SmallPriceList[0];
//       labelMedium.innerHTML = MediumPriceList[0];
//       labelLarge.innerHTML = LargePriceList[0];
//   } else if (Drinkitem == "Coffee") {
//       labelSmall.innerHTML = SmallPriceList[1];
//       labelMedium.innerHTML = MediumPriceList[1];
//       labelLarge.innerHTML = LargePriceList[1];
//   } else if (Drinkitem == "Hot chocolate") {
//       labelSmall.innerHTML = SmallPriceList[2];
//       labelMedium.innerHTML = MediumPriceList[2];
//       labelLarge.innerHTML = LargePriceList[2];
//   } else if (Drinkitem == "Tea") {
//       labelSmall.innerHTML = SmallPriceList[3];
//       labelMedium.innerHTML = MediumPriceList[3];
//       labelLarge.innerHTML = LargePriceList[3];
//   } else if (Drinkitem == "Green tea") {
//       labelSmall.innerHTML = SmallPriceList[3];
//       labelMedium.innerHTML = MediumPriceList[3];
//       labelLarge.innerHTML = LargePriceList[3];
//   }
// });



// Event listener for checkboxes (Small, Medium, Large)
var checkboxes = document.querySelectorAll(".drinkSize input[type=checkbox]");

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener("change", function () {
    // When changing the checkbox, reset the additional requirements field
    const additionalRequirementsContainer = document.getElementById("additionalRequirementsContainer");
    const dynamicTextField = document.getElementById("dynamic_textField");
    
    // Clear the text field when changing the checkbox
    dynamicTextField.value = "";  // Clear the text in the additional requirements box
    
    // Show the additional requirements field when a checkbox is checked
    if (checkbox.checked) {
      additionalRequirementsContainer.style.display = "block";  // Show the additional requirements box
      dynamicTextField.required = true; // Make it required
    } else {
      additionalRequirementsContainer.style.display = "none";  // Hide the additional requirements box
      dynamicTextField.required = false;  // Make it not required
    }
  });
});

function getDrinkName() {
  var allDrinks = "";
  for (var i = 0; i < drinkSize.length; i++) {
    var drink = drinkSize[i];
    if (drink.querySelector("input[type=checkbox]").checked) {
      allDrinks += drink.querySelector("label[for=drinkCheckBox]").textContent;
    }
  }
  return allDrinks;
}

function addRow(
  titleElements,
  fnameValue,
  lnameValue,
  emailValue,
  phoneValue,
  streetAddress1Value,
  streetAddress2Value,
  zipValue,
  cityValue,
  stateValue,
  drinkNameValue,
  drinkSizeValue,
  dynamicTextFieldValue,
  sourceValue,
  commentsValue
) {
  document.getElementById("myTable").style.display = "block";

  var headerCount = 13;
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;

  var tr = table.insertRow(rowCount);

  const tval = [];
  for (var i = 0; i < headerCount; i++) {
    tval.push(tr.insertCell(i));
  }

  for (var i = 0; i < titleElements.length; i++) {
    if (titleElements[i].checked) {
      tval[0].innerHTML = titleElements[i].value;
      break;
    }
  }

  tval[1].innerHTML = fnameValue;
  tval[2].innerHTML = lnameValue;
  tval[3].innerHTML = emailValue;
  tval[4].innerHTML = phoneValue;
  tval[5].innerHTML = streetAddress1Value;
  tval[6].innerHTML = streetAddress2Value;
  tval[7].innerHTML = cityValue;
  tval[8].innerHTML = stateValue;
  tval[9].innerHTML = zipValue;

  for (var i = 0; sourceValue[i]; i++) {
    if (sourceValue[i].checked) {
      tval[10].innerHTML += sourceValue[i].value;
      if (i < sourceValue.length - 1) {
        tval[10].innerHTML += ", ";
      }
    }
  }
  tval[11].innerHTML += drinkNameValue + " : ";

  tval[11].innerHTML +=
    drinkSizeValue + "Additional Requirements:" + dynamicTextFieldValue.value;

  tval[12].innerHTML = commentsValue;

  event.preventDefault();
}

var checkboxes = document.querySelectorAll(
  ".checkBoxContainer input[type=checkbox]"
);

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    if (isValidated() && isAnyCheckboxSelected()) {
      document.getElementById("submitButton").disabled = false;
    } else {
      document.getElementById("submitButton").disabled = true;
    }
  });
});

function isAnyCheckboxSelected() {
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      return true;
    }
  }
  return false;
}