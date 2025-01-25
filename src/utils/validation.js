// Function to validate an email address
// Uses a regular expression (emailRegex) to check if the email follows the standard email format
// Returns true if the email is valid, otherwise returns false
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate the format of the email
  return emailRegex.test(email); // test() method returns true if the email matches the regex
};

// Function to validate a name
// Checks if the name is not empty or just whitespace by trimming leading/trailing spaces
// Returns true if the name is valid (not empty), otherwise returns false
export const validateName = (name) => {
  return name.trim().length > 0; // trim() removes spaces, and length > 0 ensures the name is not empty
};
