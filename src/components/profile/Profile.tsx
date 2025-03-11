'use client';

import React from 'react';
import BookingForm from '../booking/BookingForm';
const Profile = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-gray-100 p-4">
      <div className="mt-4 w-full max-w-3xl rounded-2xl bg-white p-4 shadow-md">
        <div className="mt-4 w-full max-w-3xl rounded-2xl bg-white p-4 shadow-md">
          <div className="mb-4 flex items-start">
            <div className="mr-4 h-16 w-16 rounded-2xl bg-gray-300"></div>
            <div>
              <div className="font-bold">Personal Information</div>
              <div>Name:</div>
              <div>Email:</div>
              <div>Phone number:</div>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full max-w-3xl rounded-2xl bg-white p-4 shadow-md">
          <div>
            <div className="mb-2 font-bold">My Appointments</div>
            <div>Time & Date - Service</div>
            <div>Time & Date - Service</div>
            <div>Time & Date - Service</div>
            <div>Time & Date - Service</div>
            <div>Time & Date - Service</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
