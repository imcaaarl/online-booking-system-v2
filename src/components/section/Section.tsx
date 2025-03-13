'use client';

import React from 'react';
import BookingForm from '../booking/BookingForm';
import Information from '../information/Information';
import Sidebar from '../sidebar/Sidebar';

export const Section = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen p-10"> 
      <div className="flex flex-row gap-10">
        <div className="basis-1/9 rounded-lg shadow-md">
          <Sidebar />
        </div>

        <div className="basis-5/9 space-y-10 rounded-lg shadow-md"> 
          <BookingForm />
        </div>

        <div className="basis-1/3 rounded-lg shadow-md">
          <Information />
        </div>
      </div>
    </div>
  );
};
