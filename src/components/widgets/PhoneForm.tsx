import React from 'react';

const PhoneForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center mx-auto max-w-72 bg-slate-100 p-6 rounded-lg">
      <label htmlFor="mobilePhone" className="block text-sm font-medium mr-2 sr-only">
        Mobile Phone
      </label>
      <input
        type="tel"
        name="mobilePhone"
        id="mobilePhone"
        placeholder="Enter your mobile number"
        className="py-2 px-4 block w-full text-md rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-slate-900"
        required
      />
      <button type="button" className="btn-red py-4 px-4 rounded-lg w-full mt-4">
        Text Me
      </button>
    </div>
  );
};

export default PhoneForm;
