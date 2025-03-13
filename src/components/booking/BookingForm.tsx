

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
  const [modalOpen, setModalOpen] = useState(false);

  const handleselect = (service: UserType) => {
    setselectservice(service.name);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/services');
      const allServices = await response.json();
      setServices(allServices);
    })();
  }, []);
  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <div className="mx-auto max-w-4xl rounded-lg ring-2 ring-[#016A70] bg-soft-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold font-playfair text-emerald">
        Book Your Appointment {selectservice}
      </h2>

      {/* Services Dropdown */}
      <div className="dropdown">
        <button className="dropbtn border border-gray-400 bg-emerald text-white hover:bg-emerald-dark">
          Services
        </button>
        <div className="dropdown-content">
          {services.map((service, index) => (
            <a onClick={() => handleselect(service)} key={index} href="#">
              {service.name}
            </a>
          ))}
        </div>
      </div>

      <div className=" flex items-center gap-4 border-b pb-4">
        {services.map((service, index) => (
          <div key={index}>
            <h3 className="font-semibold"></h3>
            <p className="text-sm text-gray-500"></p>
            <span className="font-semibold"></span> <span className="text-gray-500"></span>
          </div>
        ))}
      </div>

      {/* Date Selection */}
      <div className="mt-4">
        <h3 className="font-semibold font-playfair">Monday, March 10</h3>
        <div className="mt-2 flex gap-2">
          {['Mon 17', 'Tue 18', 'Wed 19', 'Thu 20', 'Fri 21'].map((day, index) => (
            <button key={index} className="rounded-lg border bg-white px-3 py-1 text-sm hover:bg-gray-200">
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className="mt-4">
        <h3 className="mb-2 font-semibold font-playfair">Morning</h3>
        <div className="grid grid-cols-4 gap-2">
          {[
            '8:00 AM',
            '8:30 AM',
            '9:00 AM',
            '9:30 AM',
            '10:00 AM',
            '10:30 AM',
            '11:00 AM',
            '11:30 AM',
          ].map((time) => (
            <button
              onClick={handleOpen}
              key={time}
              className="rounded-lg border p-2 text-sm hover:bg-gray-200"
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="mb-2 font-semibold">Afternoon</h3>
        <div className="grid grid-cols-4 gap-2">
          {[
            '12:00 PM',
            '12:30 PM',
            '1:00 PM',
            '1:30 PM',
            '2:00 PM',
            '2:30 PM',
            '3:00 PM',
            '3:30 PM',
          ].map((time) => (
            <button
              onClick={handleOpen}
              key={time}
              className="rounded-lg border p-2 text-sm hover:bg-gray-200"
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={handleClose}>
        <AppointmentForm onClose={handleClose}></AppointmentForm>
      </Modal>
    </div>
  );
}
