'use client'

import React from 'react';
import BookingForm from '../booking/BookingForm';
export const Section = () => {
  return (
    <div>
      <div className="border-2 border-solid">Navigation Bar</div>

      <div className="flex flex-row">
        <div className="basis-1/3 border-2 border-solid"></div>

        <div className="solid basis-1/3 border border-2">
          <BookingForm></BookingForm>
          <div className="flex flex-col p-8 ...">
            <div className="solid basis-1/3">Full Name:</div>
            <input className="border-4 border-double mb-8"></input>
            <div className="solid basis-1/3">Phone Number:</div>
            <input className="border-4 border-double mb-8"></input>
            <div className="solid basis-1/3">Email:</div>
            <input className="border-4 border-double mb-8"></input>
            <button type="submit" className="bg-green-500 ..." onClick={()=>{}} >Submit</button>
          </div>
        </div>
        <div className="basis-1/3 border-2 border-solid"></div>
      </div>
    </div>
  );
};
