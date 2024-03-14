import React from "react";

const Input = ({ label, required, error, id, ...rest }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label + required ? "*" : ""}
      </label>
      <div className="mt-2">
        <input
          id={id}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...rest}
        />
      </div>
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
