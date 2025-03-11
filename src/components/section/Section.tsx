'use client';

import React from 'react';
import BookingForm from '../booking/BookingForm';
import Information from '../information/Information';
import AppointmentForm from '../appointment/AppointmentForm';
import NavigationBar from '../nav/NavigationBar';

export const Section = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="flex flex-row">
        <div className="basis-1/3">Side Bar</div>

        <div className="solid basis-1/3">
          <BookingForm></BookingForm>
          <AppointmentForm></AppointmentForm>
        </div>

        <div className="basis-1/3">
          <Information></Information>
        </div>
      </div>
    </div>
  );
};
