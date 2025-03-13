'use client';

import React, { useEffect, useState } from 'react';
import Modal from '../modal/Modal';
import FeedbackForm from '../feedback/FeedbackForm';
import StarIcon from './StarIcon';

const Information = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  const openFeedback = () => setFeedbackOpen(true);
  const closeFeedback = () => setFeedbackOpen(false);

  // Fetch feedbacks from API
  const getFeedbacks = async () => {
    try {
      const response = await fetch('/api/feedback', { method: 'GET' });
      if (!response.ok) throw new Error('Failed to fetch feedbacks');
      const data = await response.json();
      setFeedbacks(data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  // Delete feedback function
  const deleteFeedback = async (id: number) => {
    try {
      const response = await fetch('/api/feedback', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error('Failed to delete feedback');

      // Remove deleted feedback from the state
      setFeedbacks((prevFeedbacks) => prevFeedbacks.filter((feedback) => feedback.id!== id));
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div className="grid rounded-xl bg-[#FDFDFD] p-10 shadow-xl ring-2 ring-[#016A70]">
      {/* Banner Image */}
      <img
        src="https://res.cloudinary.com/conferences-and-exhibitions-pvt-ltd/image/upload/v1691217378/Salon-Management/2023/July/Eco-Friendly/environmentally-conscious-spacesshutterstock_1800193357_j8cnse.jpg"
        alt="Elite Cuts Salon"
        className="h-48 w-full rounded-t-xl object-cover"
      />

      {/* Salon Name */}
      <b className="p-3 text-2xl text-[#016A70]">Elite Cuts Salon</b>
      <p className="p-3 text-[#2C2C2C]">
        Elite Cuts Salon offers premium hair services tailored to your style. Our experienced
        stylists provide top-notch haircuts, coloring, and styling in a modern, relaxing environment.
      </p>

      {/* Contact Details */}
      <div className="flex flex-row items-center text-[#2C2C2C]">
        <svg
          className="size-8 pl-3 text-[#016A70]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        <p className="p-3">(555) 123-4567</p>
      </div>

      <div className="flex flex-row items-center text-[#2C2C2C]">
        <svg
          className="size-8 pl-3 text-[#016A70]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <p className="p-3">1234 Fashion Avenue, New York, NY 10001</p>
      </div>

      {/* Email */}
      <div className="flex flex-row items-center text-[#2C2C2C]">
        <svg
          className="size-8 pl-3 text-[#016A70]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        <p className="p-3">contact@elitecutssalon.com</p>
      </div>

      {/* Feedback Button */}
      <div className="mt-4 flex w-full justify-center">
        <button
          onClick={openFeedback}
          className="rounded-lg bg-[#016A70] px-4 py-2 text-white hover:bg-[#014D50]"
        >
          Add Feedback
        </button>
      </div>

      {/* Feedback Modal */}
      <Modal isOpen={feedbackOpen} onClose={closeFeedback}>
        <FeedbackForm onClose={closeFeedback} />
      </Modal>

      {/* Feedback List */}
      <div>
        {feedbacks.map((value: any) => (
          <div
            key={value.id}
            className="m-2 grid rounded-lg border p-3 text-[#2C2C2C] shadow-lg"
          >
            <StarIcon rating={value.rating} />
            <b className="text-[#016A70]">{value.name}</b>
            <div className="text-xs">{value.remarks}</div>

            <div className="mt-2 flex justify-center">
              <button onClick={() => deleteFeedback(value.id)} className="border rounded-lg px-4 py-2 text-[#FDFDFD] bg-[#FF0000] hover:bg-[#014D50]">
                Delete Feedback
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
