import axios from "axios";

// Base URL for the JSONPlaceholder API
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// Function to fetch all users from the server
// Returns a promise that resolves to the list of users
export const getUsers = () => axios.get(BASE_URL);

// Function to add a new user
// Takes a 'user' object and sends it to the server via a POST request
// Returns a promise that resolves when the user is successfully added
export const addUser = (user) => axios.post(BASE_URL, user);

// Function to edit an existing user's details
// Takes 'id' (user's unique identifier) and 'user' (updated user data) as arguments
// Sends a PUT request to the server to update the user information
// Returns a promise that resolves when the user is successfully updated
export const editUser = (id, user) => axios.put(`${BASE_URL}/${id}`, user);

// Function to delete a user by their unique ID
// Takes 'id' (user's unique identifier) and sends a DELETE request to the server
// Returns a promise that resolves when the user is successfully deleted
export const deleteUser = (id) => axios.delete(`${BASE_URL}/${id}`);
