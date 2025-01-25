import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addUser, editUser, getUsers } from "../services/userService";
import UserForm from "../components/UserForm";
import { validateEmail, validateName } from "../utils/validation"; // Import validation functions

const AddEditUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const [errors, setErrors] = useState({}); // To store error messages

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getUsers()
        .then((response) => {
          const user = response.data.find((user) => user.id === parseInt(id));
          if (user) {
            setFormData({
              firstName: user.firstName || "",
              lastName: user.lastName || "",
              email: user.email || "",
              department: user.department || "",
            });
          }
        })
        .catch(() => alert("Failed to fetch user data"));
    }
  }, [id]);

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const formErrors = {};

    // Validate the name fields
    if (!validateName(formData.firstName)) {
      formErrors.firstName = "First name is required.";
    }
    if (!validateName(formData.lastName)) {
      formErrors.lastName = "Last name is required.";
    }

    // Validate the email
    if (!validateEmail(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    // Check if there are any errors
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Update error state
      return; // Do not submit the form if there are validation errors
    }

    // If no validation errors, proceed to save the user
    const action = id ? editUser(id, formData) : addUser(formData);

    action
      .then(() => {
        alert(`${id ? "User updated" : "User added"} successfully!`);
        navigate("/"); // Navigate to the homepage
      })
      .catch(() => alert("Failed to save user"));
  };

  return (
    <div className="container mx-auto">
      <header className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white py-6 rounded-lg mb-6 shadow-lg w-full max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-center">
          {id ? "Edit User" : "Add User"}
        </h1>
      </header>

      {/* UserForm component with validation */}
      <UserForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        errors={errors} // Pass the errors to the UserForm for display
      />
    </div>
  );
};

export default AddEditUser;
