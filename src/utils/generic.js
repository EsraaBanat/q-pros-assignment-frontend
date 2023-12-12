function tryCatchWrapper(func) {
    return function (...args) {
      try {
        return func(...args);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
  }
  
  module.exports = {
    tryCatchWrapper,
  };
  