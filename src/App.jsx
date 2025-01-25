import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEditUser from "./pages/AddEditUser";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddEditUser />} />
            <Route path="/edit/:id" element={<AddEditUser />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
