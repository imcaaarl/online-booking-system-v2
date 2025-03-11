'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import './ServiceList.css';
import CreateUserForm from './CreateServiceForm';
import CreateServiceForm from './CreateServiceForm';

type UserType = {
  name: string;

}

export default function UserList() {

  // [getter, setter] = useState(default value)
  const [sample, setSample] = useState('the quick brown fox');

  const [services, setServices] = useState<UserType[]>([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  /**
   * one time data retrieval
   */
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/services');
      const allServices = await response.json();

      setServices(allServices)

      console.log('allServices: ', allServices);

      console.log('services: ', services)
    })()
  }, [])

  const handleCreateservice = () => {
    setIsModalOpen(true);
  }

  const handleClose = () => {
    setIsModalOpen(false);
  }
  

  console.log('services: ', services);
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="table-container">
        <div className="table-header">
          <h6 className="table-title">List of all Services - {sample}
          <button
            onClick={handleCreateservice}
            className="float-right px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Service
          </button>
          </h6>
        </div>
        
        
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                {['Name', 'Username' , 'Action', ''].map((heading, index) => (
                  <th key={index} className="th">
                    <p className="th-text">{heading.toLowerCase()}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index}>
                  <td className="td">
                    <div className="profile-container">
                      <div>
                        <p className="profile-name">{service.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="td">
                    <a href="#" className="edit-link">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <CreateServiceForm isModalOpen={isModalOpen} onClose={handleClose}/>
    </div>
  );
}
