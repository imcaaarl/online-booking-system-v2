import React, { FormEvent } from 'react';

interface FormProps {
  selectedService: string;
  selectedDate: string;
  selectedTime: string;
  onClose: () => void;
}

const AppointmentForm = ({ selectedService, selectedDate, selectedTime, onClose }: FormProps) => {
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const formName = formdata.get('name');
    const formTime = formdata.get('time');
    const formDate = formdata.get('date');

    const formBody = {
      name: formName,
      time: formTime,
      date: formDate,
    };

    const response = await fetch('/api/schedule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formBody),
    });

    console.log(response);
    window.alert('Saved Successfully');
    onClose();
  };

  return (
    <form onSubmit={submit} className="flex flex-col p-8 space-y-4">
      {/* Service Name */}
      <div className="solid basis-1/3 font-bold">Service Name:</div>
      <input
        required
        name="name"
        value={selectedService}
        readOnly
        className="mb-8 p-2 border-1 border-solid rounded-md bg-gray-100"
      />

      {/* Date */}
      <div className="solid basis-1/3 font-bold">Date:</div>
      <input
        required
        name="date"
        type="date"
        value={selectedDate}
        readOnly
        className="mb-8 p-2 border-1 border-solid rounded-md bg-gray-100"
      />

      {/* Time */}
      <div className="solid basis-1/3 font-bold">Time:</div>
      <input
        required
        name="time"
        type="time"
        value={selectedTime}
        readOnly
        className="mb-8 p-2 border-1 border-solid rounded-md bg-gray-100"
      />

      {/* Submit Button */}
      <button type="submit" className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
        Submit
      </button>
    </form>
  );
};

export default AppointmentForm;