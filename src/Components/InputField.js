import React from 'react';

export const SignUpInputField = ({ label, type, name, id, value, onChange, options = [], ariaLabel }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    {type === 'select' ? (
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        aria-label={ariaLabel}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    ) : (
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        aria-label={ariaLabel}
      />
    )}
  </div>
);

export const LoginInputField = ({ label, type, name, id, value, onChange, ariaLabel }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      aria-label={ariaLabel}
    />
  </div>
);
