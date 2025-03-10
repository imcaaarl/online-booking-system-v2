'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import './UserList.css';
import CreateUserForm from './CreateUserForm';

type UserType = {
  name: string;
  username: string;
  password: string;
}

export default function UserList() {

  // [getter, setter] = useState(default value)
  const [sample, setSample] = useState('the quick brown fox');

  const [users, setUsers] = useState<UserType[]>([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  /**
   * one time data retrieval
   */
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/users');
      const allUsers = await response.json();

      setUsers(allUsers)

      console.log('allUsers: ', allUsers);

      console.log('users: ', users)
    })()
  }, [])

  const handleCreateuser = () => {
    setIsModalOpen(true);
  }

  const handleClose = () => {
    setIsModalOpen(false);
  }
  

  console.log('users: ', users);
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="table-container">
        <div className="table-header">
          <h6 className="table-title">List of all Users - {sample}
          <button
            onClick={handleCreateuser}
            className="float-right px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create User
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
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="td">
                    <div className="profile-container">
                      <div>
                        <p className="profile-name">{user.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="td">
                    <div className="profile-container">
                      <div>
                        <p className="profile-username">{user.username}</p>
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
      <CreateUserForm isModalOpen={isModalOpen} onClose={handleClose}/>
    </div>
  );
}
