// Utility functions
const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const sanitizeInput = (input) => {
  return input.trim();
};

module.exports = {
  formatDate,
  validateEmail,
  sanitizeInput,
}; 