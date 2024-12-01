

// import axios from "axios";

// const login = (email, password) => {
//     console.log("Attempting to log in with:", email, password); // Debug input

//     return axios
//         .post("http://localhost:3000/user/login", { email, password }) // Backend login API
//         .then((response) => {
//             console.log("Login response:", response.data); // Debug response from API
//             return response.data; // Return token and email
//         })
//         .catch((error) => {
//             console.error("Login error:", error.response?.data || error.message); // Debug error if any
//             throw error; // Re-throw the error for further handling
//         });
// };

// const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("type");
//     localStorage.removeItem("email");
// };

// export default {
//     login,
//     logout,
// };

import axios from "axios";

const login = (email, password) => {
    console.log("Attempting to log in with:", email, password); // Debug input

    return axios
        .post("http://localhost:3000/user/login", { email, password }) // Backend login API
        .then((response) => {
            console.log("Login response:", response.data); // Debug response from API

            // Store token and user email in localStorage
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", email); // Store the user's email for later use
            localStorage.setItem("type", response.data.type); // If you need user type, store it

            return response.data; // Return token and email
        })
        .catch((error) => {
            console.error("Login error:", error.response?.data || error.message); // Debug error if any
            throw error; // Re-throw the error for further handling
        });
};

const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    localStorage.removeItem("email");
};

export default {
    login,
    logout,
};
