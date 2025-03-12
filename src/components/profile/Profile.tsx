'use client';
import NavigationBar from '../nav/NavigationBar';
import React, { useState } from 'react';
import BookingForm from '../booking/BookingForm';
import Icon from './Icon';
const Profile = () => {
  const [schedules, setSchedule] = useState([]);

  const getSchedule = async () => {
    const response = await fetch('api/schedule', {
      method: 'GET',
    });
    const data = await response.json();
    setSchedule(data);
  };

  console.log(schedules);

  return (
    <div className="flex h-screen w-full flex-col items-center bg-gray-100 p-4">
      <div className="mt-4 w-full max-w-3xl rounded-2xl bg-white p-4 shadow-md">
        <div className="mt-4 w-full max-w-3xl rounded-2xl border-2 border-4 border-solid border-gray-400 bg-white p-4 shadow-md">
          <div className="mb-5 flex items-start">
            <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold">Personal Information</div>
              <div className="m-1">Name:</div>
              <div className="m-1">Email:</div>
              <div className="m-1">Phone number:</div>
            </div>
          </div>
        </div>

        <div className="mt-5 w-full max-w-3xl rounded-2xl border-2 border-4 border-solid border-gray-400 bg-white p-4 shadow-md">
          <div>
            <div className="mb-2 font-bold">My Appointments</div>
            <div>
              {schedules.map((value: any) => {
                return (
                  <div
                    className="mt-4 flex w-full max-w-3xl flex-row items-center rounded-2xl bg-white p-4 shadow-md"
                    key={value.id}
                  >
                    <Icon service={value.name} />
                    <div>
                      <div className="ml-5 text-lg">{value.name}</div>
                      <div className='ml-5 flex flex-row gap-2'>
                      <div>{value.date}</div> @
                      <div>{value.time}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <button onClick={getSchedule} className="border-1 p-2">
        Get Schedule
      </button>
    </div>
  );
};

export default Profile;
