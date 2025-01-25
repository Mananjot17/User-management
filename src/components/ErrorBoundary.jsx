import React, { Component } from "react";

// ErrorBoundary is a class component that catches JavaScript errors anywhere in the child component tree.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    // The state hasError is used to track if there was an error.
    this.state = { hasError: false };
  }

  // This lifecycle method is called when an error is thrown in any child components.
  static getDerivedStateFromError() {
    // It updates the state to indicate that an error occurred.
    return { hasError: true };
  }

  // This lifecycle method is  called after an error is thrown.
  componentDidCatch(error, errorInfo) {
    // Log the error and error information for debugging purposes.
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    // If there's an error, display a fallback UI.
    if (this.state.hasError) {
      return <h1 className="text-red-500">Something went wrong.</h1>;
    }

    // Otherwise, render the children components as usual.
    return this.props.children;
  }
}

export default ErrorBoundary;
