import React, { FormEvent } from 'react';

interface FormProps{
  onClose: () => void
}

const AppointmentForm = (properties: FormProps) => {
  const submit = async(event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    const formdata = new FormData(event.currentTarget);
    const formName = formdata.get('name')
    const formTime = formdata.get('time')
    const formDate = formdata.get('date')

    const formBody = {
      name: formName,
      time: formTime,
      date: formDate
    }
    const response = await fetch("api/schedule", {
      method: "POST",
      headers: {"Content-Type": "applicaiton/json"},
      body: JSON.stringify(formBody)
    })
    console.log(response)
    window.alert('Save Succesfully')
    properties.onClose();
  }


 
  return (
    <form onSubmit={submit} className="flex flex-col p-8 space-y-4">
      <div className="solid basis-1/3 font-bold">Service Name:</div>
      <input required name='name' className="mb-8 p-2 border-1 border-solid rounded-md" />

      <div className="solid basis-1/3 font-bold">Time:</div>
      <input required name='time' type='time' className="mb-8 p-2 border-1 border-solid rounded-md" />

      <div className="solid basis-1/3 font-bold">Date:</div>
      <input required name='date' type='date' className="mb-8 p-2 border-1 border-solid rounded-md" />

      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
      
      >
        Submit
      </button>
      </form>
  );
};

export default AppointmentForm;
