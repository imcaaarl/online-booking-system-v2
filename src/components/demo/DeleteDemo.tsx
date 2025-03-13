'use client'

import React from 'react';

const DeleteDemo = () => {
  const deleteSchedule = async (id: number) => {
    const params = new URLSearchParams();
    params.append('id', id.toString());
    const response = await fetch(`api/schedule`, {
      method: 'DELETE',
      body: JSON.stringify({id})
    });
  };

  const deleteFeedback = async (id: number) => {
    const params = new URLSearchParams();
    params.append('id', id.toString());
    const response = await fetch(`api/feedback`, {
      method: 'DELETE',
      body: JSON.stringify({id})
    });
  };

  return (
    <div className="mt-50 flex flex-col items-center justify-center">
      <button onClick={() => deleteSchedule(2)} className="m-5 border-1 p-2">DELETE Schedule</button>
      <button onClick={() => deleteFeedback(1)} className="m-5 border-1 p-2">DELETE Feedback</button>
    </div>
  );
};

export default DeleteDemo;
