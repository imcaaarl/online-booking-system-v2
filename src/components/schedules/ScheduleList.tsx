'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import './ScheduleList.css';
import CreateUserForm from './CreateScheduleForm';
import CreateScheduleForm from './CreateScheduleForm';

type UserType = {
  name: string;

}

export default function UserList() {

  // [getter, setter] = useState(default value)
  const [sample, setSample] = useState('the quick brown fox');

  const [schedules, setSchedules] = useState<UserType[]>([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  /**
   * one time data retrieval
   */
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/schedules');
      const allSchedules = await response.json();

      setSchedules(allSchedules)

      console.log('allSchedules: ', allSchedules);

      console.log('schedules: ', schedules)
    })()
  }, [])

  const handleCreateschedule = () => {
    setIsModalOpen(true);
  }

  const handleClose = () => {
    setIsModalOpen(false);
  }
  

  console.log('schedules: ', schedules);
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="table-container">
        <div className="table-header">
          <h6 className="table-title">List of all Schedules - {sample}
          <button
            onClick={handleCreateschedule}
            className="float-right px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Schedule
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
              {schedules.map((schedule, index) => (
                <tr key={index}>
                  <td className="td">
                    <div className="profile-container">
                      <div>
                        <p className="profile-name">{schedule.name}</p>
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
      <CreateScheduleForm isModalOpen={isModalOpen} onClose={handleClose}/>
    </div>
  );
}
