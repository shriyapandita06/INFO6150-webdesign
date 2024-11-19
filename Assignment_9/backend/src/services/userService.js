const mongoose = require('mongoose');
import { userSchema } from '../models/userSchema';
import { UserAlreadyExists, UserDoesNotExist, ValidationError } from '../errors/errorHandling';
import { validateUserFields } from './validationService';
import { passwordHashing, comparePassword } from './encryptPassword';
const path = require("path");
var fs = require("fs-extra");

const User = mongoose.model('User', userSchema);
var jwt = require('jsonwebtoken');

export const getUsers = async () => {
    return await User.find().select("-password");
};

export const createNewUser = async (email, name, password, type) => {
    validateUserFields(email, name, password, type);

    const hashedPassword = await passwordHashing(password);
    const userExists = await User.findOne({ email: email });
    if (userExists != null) {
        throw new UserAlreadyExists();
    }
    let user = new User({
        fullname: name,
        email: email,
        password: hashedPassword,
        type: type
    });
    let newUser = await user.save();
    return newUser;
};

export const authenticateAndLogin = async (email, password) => {
    let userExists = await User.findOne({ email: email });
    if (!userExists) {
        throw new UserDoesNotExist();
    }
    if (!await comparePassword(password, userExists.password)) {
        throw new ValidationError("Password authentication failed");
    }
    const token = jwt.sign({ userEmail: email }, "RANDOM-TOKEN", { expiresIn: "3h" });
    return token;
};

