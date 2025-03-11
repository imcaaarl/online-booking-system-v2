'use client';

import React from 'react';
import BookingForm from '../booking/BookingForm';
import Information from '../information/Information';
import AppointmentForm from '../appointment/AppointmentForm';
export const Section = () => {
  return (
    <div>
      <div className="border-2 border-solid">Navigation Bar</div>

      <div className="flex flex-row">
        <div className="basis-1/3 border-2 border-solid"></div>

        <div className="solid basis-1/3 border border-2">
          <BookingForm></BookingForm>
          <AppointmentForm></AppointmentForm>
        </div>
        <div className="basis-1/3 border-2 border-solid">
          <Information></Information>
        </div>
      </div>
    </div>
  );
};
