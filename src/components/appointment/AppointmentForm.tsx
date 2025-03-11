import React from 'react';

const AppointmentForm = () => {
  return (
    <div className="flex flex-col p-8 ...">
      <div className="solid basis-1/3">Full Name:</div>
      <input className="mb-8 border-4 border-double"></input>
      <div className="solid basis-1/3">Phone Number:</div>
      <input className="mb-8 border-4 border-double"></input>
      <div className="solid basis-1/3">Email:</div>
      <input className="mb-8 border-4 border-double"></input>
      <button type="submit" className="bg-green-500 ..." onClick={() => {}}>
        Submit
      </button>
    </div>
  );
};

export default AppointmentForm;
