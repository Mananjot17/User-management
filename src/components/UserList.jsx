import React from "react";
import { Link } from "react-router-dom";

// UserList is a functional component that renders a table of users.
const UserList = ({ users, onDelete }) => {
  return (
    <div className="overflow-x-auto mb-6">
      {/* Table to display the user information */}
      <table className="table-auto w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          {/* Table header with column names */}
          <tr className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white">
            <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              First Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Last Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Department
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through the users and display their details in the table rows */}
          {users.map((user) => (
            <tr
              key={user.id} // Each row is uniquely identified by the user's ID
              className="hover:bg-indigo-50 transition duration-200 ease-in-out" // Hover effect on the row
            >
              {/* User's ID */}
              <td className="border-t px-6 py-4 text-sm font-medium">
                {user.id}
              </td>
              {/* User's First Name */}
              <td className="border-t px-6 py-4 text-sm">{user.firstName}</td>
              {/* User's Last Name */}
              <td className="border-t px-6 py-4 text-sm">{user.lastName}</td>
              {/* User's Email */}
              <td className="border-t px-6 py-4 text-sm">{user.email}</td>
              {/* User's Department */}
              <td className="border-t px-6 py-4 text-sm">{user.department}</td>
              {/* Action buttons */}
              <td className="border-t px-6 py-4 space-x-2">
                {/* Edit button that links to the edit page for the user */}
                <Link
                  to={`/edit/${user.id}`} // Navigates to the edit page for the specific user
                  className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-teal-400 hover:to-indigo-400 transition duration-150 ease-in-out"
                >
                  Edit
                </Link>
                {/* Delete button that triggers the onDelete function */}
                <button
                  onClick={() => onDelete(user.id)} // Calls onDelete with the user's ID
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-400 hover:to-red-500 transition duration-150 ease-in-out"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
