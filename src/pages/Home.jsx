import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/userService";
import UserList from "../components/UserList";
import { Link } from "react-router-dom";

// Home component handles displaying users, pagination, and user deletion
const Home = () => {
  // State for storing the list of users fetched from the server
  const [users, setUsers] = useState([]);
  // State for managing any error message if fetching users fails
  const [error, setError] = useState(null);
  // State for managing the current page number for pagination
  const [currentPage, setCurrentPage] = useState(1);
  // State for defining how many users to display per page
  const [usersPerPage] = useState(5); // Display 5 users per page

  // Fetch users when the component mounts
  useEffect(() => {
    getUsers()
      .then((response) => setUsers(response.data)) // Store users data in state
      .catch(() => setError("Failed to fetch users")); // Handle any errors during fetching
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to handle the deletion of a user
  const handleDelete = (id) => {
    deleteUser(id) // Call deleteUser API to delete the user
      .then(() => {
        setUsers(users.filter((user) => user.id !== id)); // Remove the deleted user from state
        alert("User deleted successfully!"); // Show success message
      })
      .catch(() => alert("Failed to delete user")); // Handle any errors during deletion
  };

  // If there is an error, display it
  if (error) return <div>{error}</div>;

  // Pagination Logic
  // Calculate indices for slicing the users array based on the current page
  const indexOfLastUser = currentPage * usersPerPage; // Last user on the current page
  const indexOfFirstUser = indexOfLastUser - usersPerPage; // First user on the current page
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser); // Get the users for the current page

  // Calculate total number of pages for pagination
  const totalPages = Math.ceil(users.length / usersPerPage);

  // Function to handle page navigation
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white py-6 rounded-lg mb-6 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center">User Management</h1>
      </header>

      {/* Link to navigate to the "Add User" page */}
      <div>
        <Link
          to="/add"
          className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-lg py-2 mb-4 inline-block w-full text-center"
        >
          + Add a new User
        </Link>
      </div>

      {/* Render the list of current users */}
      <UserList users={currentUsers} onDelete={handleDelete} />

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage(currentPage - 1)} // Decrease the page number to go to the previous page
          disabled={currentPage === 1} // Disable if we are on the first page
          className="bg-teal-500 text-white py-2 px-4 rounded-l-lg disabled:opacity-50"
        >
          Prev
        </button>

        {/* Pagination Page Number Buttons  */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1} // Generate a button for each page number
            onClick={() => paginate(index + 1)} // Navigate to the corresponding page
            className={`py-2 px-4 ${
              currentPage === index + 1 // Highlight the active page
                ? "bg-teal-500 text-white"
                : "bg-gray-200"
            } mx-1 rounded-lg`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage(currentPage + 1)} // Increase the page number to go to the next page
          disabled={currentPage === totalPages} // Disable if we are on the last page
          className="bg-teal-500 text-white py-2 px-4 rounded-r-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
