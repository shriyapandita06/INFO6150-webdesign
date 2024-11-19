class UserAlreadyExists extends Error {
    get message() {
        return "User with this email already exists :/";
    }
    get name() {
        return "UserAlreadyExists";
    }
}

class ValidationError extends Error {
    constructor (message) {
        super(message);
    }
    get name() {
        return "ValidationError";
    }
}

class UserDoesNotExist extends Error {
    get message() {
        return "User with this email does not exist :/";
    }
    get name() {
        return "UserDoesNotExist";
    }
}


module.exports = {
    UserAlreadyExists,
    ValidationError,
    UserDoesNotExist
}