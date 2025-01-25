const UserForm = ({ formData, setFormData, onSubmit, errors }) => {
  return (
    // Form element that handles form submission
    <form
      onSubmit={onSubmit} // Calls the onSubmit function passed as prop when the form is submitted
      className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto"
    >
      {/* First Name Input */}
      <div className="mb-6">
        <label className="block text-indigo-900 text-sm font-semibold mb-2">
          First Name
        </label>
        <input
          type="text"
          className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.firstName} // Binds first name from  formData to input value
          onChange={
            (e) => setFormData({ ...formData, firstName: e.target.value }) // Updates formData on change
          }
        />
        {/* Display error message for firstName if validation fails */}
        {errors.firstName && (
          <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
        )}
      </div>

      {/* Last Name Input */}
      <div className="mb-6">
        <label className="block text-indigo-900 text-sm font-semibold mb-2">
          Last Name
        </label>
        <input
          type="text"
          className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.lastName} // Binds last name from formData to input value
          onChange={
            (e) => setFormData({ ...formData, lastName: e.target.value }) // Updates formData on change
          }
        />
        {/* Display error message for lastName if validation fails */}
        {errors.lastName && (
          <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
        )}
      </div>

      {/* Email Input */}
      <div className="mb-6">
        <label className="block text-indigo-900 text-sm font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.email} // Binds email from formData to input value
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} // Updates formData on change
        />
        {/* Display error message for email if validation fails */}
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Department Input */}
      <div className="mb-6">
        <label className="block text-indigo-900 text-sm font-semibold mb-2">
          Department
        </label>
        <input
          type="text"
          className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.department} // Binds department from formData to input value
          onChange={
            (e) => setFormData({ ...formData, department: e.target.value }) // Updates formData on change
          }
          required // Ensures department field is not left empty
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit" // Trigger form submission
        className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-lg w-full hover:from-teal-400 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150 ease-in-out"
      >
        Save
      </button>
    </form>
  );
};

export default UserForm;
