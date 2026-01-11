import React from 'react';

const Button = ({ children, variant = 'primary', disabled, onClick }) => {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200"
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full py-3 px-6 rounded-xl font-bold transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;