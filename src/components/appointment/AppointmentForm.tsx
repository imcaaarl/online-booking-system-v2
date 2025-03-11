import React, { FormEvent } from 'react';

const AppointmentForm = () => {
  return (
    <div className="flex flex-col p-8 space-y-4">
      <div className="solid basis-1/3 font-bold">Service Name:</div>
      <input className="mb-8 p-2 border-1 border-solid rounded-md" />

      <div className="solid basis-1/3 font-bold">Time:</div>
      <input type='time' className="mb-8 p-2 border-1 border-solid rounded-md" />

      <div className="solid basis-1/3 font-bold">Date:</div>
      <input type='date' className="mb-8 p-2 border-1 border-solid rounded-md" />

      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
        onClick={() => {}}
      >
        Submit
      </button>
      </div>
  );
};

export default AppointmentForm;
