import React, { FormEvent } from 'react';

const AppointmentForm = () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        console.log(event)
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-8">
      <div className="solid basis-1/3">Full Name:</div>
      <input name='name' className="mb-8 border-4 border-double"></input>
      <div className="solid basis-1/3">Phone Number:</div>
      <input name='phone' className="mb-8 border-4 border-double"></input>
      <div className="solid basis-1/3">Email:</div>
      <input name='email' className="mb-8 border-4 border-double"></input>
      <button type="submit" className="bg-green-500">
        Submit
      </button>
    </form>
  );
};

export default AppointmentForm;
