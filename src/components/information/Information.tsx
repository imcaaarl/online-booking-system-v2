'use client';

import React, { useState } from 'react';
import Modal from '../modal/Modal';
import FeedbackForm from '../feedback/FeedbackForm';

const Information = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  const openFeedback = () => {
    setFeedbackOpen(true);
  };
  const closeFeedback = () => {
    setFeedbackOpen(false);
  };

  const getFeedbacks = async () => {
    const response = await fetch('api/feedback', {
      method: 'GET',
    });
    const data = await response.json();
    setFeedbacks(data);
  };
  console.log(feedbacks);

  return (
    <div className="grid rounded-xl p-10 shadow-xl ring-2 ring-cyan-500/50">
      <b className="p-3 text-xl">Elite Cuts Salon</b>
      <p className="p-3">
        Elite Cuts Salon offers premium hair services tailored to your style. Our experienced
        stylists provide top-notch haircuts, coloring, and styling in a modern, relaxing
        environment.
      </p>

      {/* Phone Number */}
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8 pl-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        <p className="p-3">(555) 123-4567</p>
      </div>

      {/* Address */}
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8 pl-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <p className="p-3">1234 Fashion Avenue, New York, NY 10001</p>
      </div>

      {/* Email */}
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8 pl-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        <p className="p-3">contact@elitecutssalon.com</p>
      </div>

      {/* Opening Hours */}
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8 pl-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p className="p-3">Open until 5pm</p>
      </div>

      {/* Feedback Button */}
      <div className="mt-4 flex w-full justify-center">
        <button
          onClick={openFeedback}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add Feedback
        </button>
      </div>

      {/* Feedback Modal */}
      <Modal isOpen={feedbackOpen} onClose={closeFeedback}>
        <FeedbackForm onClose={closeFeedback} />
      </Modal>

      <button onClick={getFeedbacks}
      className='mt-2 mb-2 flex w-full justify-center gap-3 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'>Get Feedback</button>
      <div>
        {feedbacks.map((value: any) => {
          return (
            <div key={value.id} className="grid rounded-lg border-1 border-black-500/50 m-2 p-3">
              <div>{value.name}</div>
              <div>{value.rating}</div>
              <div>{value.remarks}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
