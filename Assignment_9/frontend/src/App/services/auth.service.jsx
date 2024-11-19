
import axios from 'axios';

const API_URL = "http://localhost:3000/user/";

const login = async (email, password) => {
    try {
        console.log("Sending login request:", { email, password }); // Debugging

        const response = await axios.post(API_URL + "login", { email, password });

        console.log("Response from API:", response.data); // Debugging API response

        // Save token to localStorage if it exists
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            console.log("Token saved to localStorage"); // Debugging
        } else {
            console.error("Token missing from API response");
            throw new Error("Authentication failed: Token missing");
        }

        return response.data; // Return the entire response for further use
    } catch (error) {
        console.error("Error during login request:", error.response?.data || error.message); // Debugging
        throw error;
    }
};

const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    console.log("User logged out, token removed from localStorage"); // Debugging
};

export default {
    login,
    logout,
};
