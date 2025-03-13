'use client';
import { useEffect, useState } from 'react';
import './style.css';
import Modal from '../modal/Modal';
import AppointmentForm from '../appointment/AppointmentForm';

type UserType = {
  name: string;
};

export default function BookingForm() {
  const [services, setServices] = useState<UserType[]>([]);
  const [selectservice, setselectservice] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/services');
      const allServices = await response.json();
      setServices(allServices);
    })();
  }, []);

  const handleselect = (service: UserType) => {
    setselectservice(service.name);
  };

  const handleOpen = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="mx-auto max-w-4xl rounded-lg border-2 border-[#016A70] bg-[#FDFDFD] p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Book Your Appointment {selectservice}</h2>

      {/* Service Dropdown */}
      <div className="dropbtn-container relative inline-block">
        <button className="dropbtn rounded-md border-2 border-[#016A70] bg-[#016A70] px-4 py-2 text-white hover:bg-[#024F53]">
          Services
        </button>
        <div className="dropdown-content">
          {services.map((service, index) => (
            <a
              className="block py-1 break-words whitespace-normal"
              onClick={() => handleselect(service)}
              key={index}
              href="#"
            >
              {service.name}
            </a>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="mt-4">
        <h3 className="font-semibold">Select a Date</h3>
        <div className="mt-2 flex gap-2">
          {['2025-03-17', '2025-03-18', '2025-03-19', '2025-03-20', '2025-03-21'].map(
            (day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(day)}
                className={`rounded-lg border px-3 py-1 text-sm hover:bg-gray-200 ${
                  selectedDate === day ? 'bg-gray-300' : 'bg-[#FDFDFD]'
                }`}
              >
                {day}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Time Slots */}
      <div className="mt-4">
        <h3 className="mb-2 font-semibold">Select a Time</h3>
        <div className="grid grid-cols-4 gap-2">
          {[
            '08:00',
            '08:30',
            '09:00',
            '09:30',
            '10:00',
            '10:30',
            '11:00',
            '11:30',
            '12:00',
            '12:30',
            '13:00',
            '13:30',
            '14:00',
            '14:30',
            '15:00',
            '15:30',
          ].map((time) => (
            <button
              onClick={() => handleOpen(selectedDate, time)}
              key={time}
              className="rounded-lg border bg-[#FDFDFD] p-2 text-sm hover:bg-gray-200"
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={handleClose}>
        <AppointmentForm
          selectedService={selectservice}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onClose={handleClose}
        />
      </Modal>
    </div>
  );
}
