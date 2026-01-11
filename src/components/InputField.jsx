import React from 'react';

const InputField = ({ label, error, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-2 border rounded-lg transition-all outline-none focus:ring-2 
          ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
      />
      {error && <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
};

export default InputField;