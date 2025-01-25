import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from React Router
import Home from "./pages/Home"; // Home page component
import AddEditUser from "./pages/AddEditUser"; // Add/Edit User page component
import ErrorBoundary from "./components/ErrorBoundary"; // ErrorBoundary component to handle errors globally

const App = () => {
  return (
    // Wrapping the entire app inside the ErrorBoundary component to catch and display errors
    <ErrorBoundary>
      <Router>
        {/* Main container for the app with full height and padding */}
        <div className="min-h-screen bg-gray-100 p-4">
          {/* Defining Routes for navigation */}
          <Routes>
            {/* Home route: Path "/" maps to Home component */}
            <Route path="/" element={<Home />} />
            {/* Add User route: Path "/add" maps to AddEditUser component (used for adding users) */}
            <Route path="/add" element={<AddEditUser />} />
            {/* Edit User route: Path "/edit/:id" maps to AddEditUser component (used for editing users) */}
            <Route path="/edit/:id" element={<AddEditUser />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
