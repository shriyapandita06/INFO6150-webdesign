const { UserInputError } = require("../errors/errors")

testRegex = (pattern, str) => {
    return pattern.test(str)
}

isValidName = (name) => {
    // return testRegex(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/, name)
    //return testRegex(/^([A-Za-z]+(?: [A-Za-z]+)*)$/, name)
    return testRegex(/^([A-Za-z]+(?:[-' ]?[A-Za-z]+)*)$/, name);
    
}

isValidPassword = (password) => {
    return testRegex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/, password)
}

isValidEmail = (email) => {
    return testRegex(/^[A-Za-z0-9._%+-]+@northeastern\.edu$/, email)
}

validateEmailField = (email) => {
    if (email == null) {
        throw new UserInputError("Email required")
    }
    if (email.length > 60) {
        throw new UserInputError("Email is too long")
    }
    if (!isValidEmail(email)) {
        throw new UserInputError("Email validation failed")
    }
}

validateNameField = (name) => {
    if (name == null) {
        throw new UserInputError("Name required")
    }
    if (name.length < 2 || name.length > 60) {
        throw new UserInputError("Name must be between 2 and 60 characters");
    }
    if (!isValidName(name)) {
        throw new UserInputError("Name validation failed")
    }
}

// validatePasswordField = (password) => {
//     if (password == null) {
//         throw new UserInputError("Password required")
//     }
//     if (password.length > 60) {
//         throw new UserInputError("Password is too long")
//     }
//     if (!isValidPassword(password)) {
//         throw new UserInputError("Password validation failed")
//     }
// }

validatePasswordField = (password) => {
    if (password == null) {
        throw new UserInputError("Password required");
    }
    password = password.trim(); // Trim whitespace
    if (password.length < 8 || password.length > 60) {
        throw new UserInputError("Password must be between 8 and 60 characters");
    }
    if (!isValidPassword(password)) {
        throw new UserInputError("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
    }
    if (/(\w)\1\1/.test(password)) {
        throw new UserInputError("Password should not contain three or more consecutive identical characters");
    }
    const commonPasswords = ["password", "123456", "12345678", "qwerty", "abc123"];
    if (commonPasswords.includes(password.toLowerCase())) {
        throw new UserInputError("Password is too common and easy to guess");
    }
}


validateUserFields = (email, name, password) => {
    validateEmailField(email)
    validateNameField(name)
    validatePasswordField(password)
}


module.exports = {
    validateEmailField,
    validateNameField, 
    validatePasswordField,
    validateUserFields
}
