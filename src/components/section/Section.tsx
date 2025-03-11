'use client';

import React from 'react';
import BookingForm from '../booking/BookingForm';
import Information from '../information/Information';
import AppointmentForm from '../appointment/AppointmentForm';
import NavigationBar from '../nav/NavigationBar';

export const Section = () => {
  return (
    <div className="flex flex-col gap-10"> {/* Ensure flex for gap to work */}
      <NavigationBar />

      {/* Main Layout */}
      <div className="flex flex-row gap-10"> {/* Added gap for columns */}
        <div className="basis-1/3 bg-gray-200 p-4 rounded-lg">Side Bar</div>

        <div className="basis-1/3 space-y-10"> {/* Space between Booking & Appointment Forms */}
          <BookingForm />
        </div>

        <div className="basis-1/3 bg-gray-100 p-4 rounded-lg">
          <Information />
        </div>
      </div>
    </div>
  );
};
