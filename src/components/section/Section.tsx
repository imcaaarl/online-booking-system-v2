'use client';

import React from 'react';
import BookingForm from '../booking/BookingForm';
import Information from '../information/Information';
import AppointmentForm from '../appointment/AppointmentForm';
import NavigationBar from '../nav/NavigationBar';
import Sidebar from '../sidebar/Sidebar';

export const Section = () => {
  return (
    <div className="flex flex-col gap-10"> 
      <div className="flex flex-row gap-10">
        <div className="basis-1/9 bg-gray-200 p-4 rounded-lg">
        <Sidebar />
        </div>

        <div className="basis-5/9 space-y-10"> 
          <BookingForm />
        </div>

        <div className="basis-1/3 bg-gray-100 p-4 rounded-lg">
          <Information />
        </div>
      </div>
    </div>
  );
};
