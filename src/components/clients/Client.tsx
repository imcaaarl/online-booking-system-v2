'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import './style.css';

export default function Client() {
  const authors = [
    {
      name: 'John Michael',
      email: 'john@creative-tim.com',
      function: 'Manager',
      department: 'Organization',
      status: 'online',
      employed: '23/04/18',
    },
    {
      name: 'Alexa Liras',
      email: 'alexa@creative-tim.com',
      function: 'Programator',
      department: 'Developer',
      status: 'offline',
      employed: '11/01/19',
    },
    {
      name: 'Laurent Perrier',
      email: 'laurent@creative-tim.com',
      function: 'Executive',
      department: 'Projects',
      status: 'online',
      employed: '19/09/17',
    },
    {
      name: 'Michael Levi',
      email: 'michael@creative-tim.com',
      function: 'Programator',
      department: 'Developer',
      status: 'online',
      employed: '24/12/08',
    },
    {
      name: 'Bruce Mars',
      email: 'bruce@creative-tim.com',
      function: 'Manager',
      department: 'Executive',
      status: 'offline',
      employed: '04/10/21',
    },
    {
      name: 'Alexander',
      email: 'alexander@creative-tim.com',
      function: 'Programator',
      department: 'Developer',
      status: 'offline',
      employed: '14/09/20',
    },
  ];

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="table-container">
        <div className="table-header">
          <h6 className="table-title">Appointments</h6>
        </div>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                {['Author', 'Function', 'Status', 'Employed', ''].map((heading, index) => (
                  <th key={index} className="th">
                    <p className="th-text">{heading.toLowerCase()}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authors.map((author, index) => (
                <tr key={index}>
                  <td className="td">
                    <div className="profile-container">
                      <div>
                        <p className="profile-name">{author.name}</p>
                        <p className="profile-email">{author.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="td">
                    <p className="function-title">{author.function}</p>
                    <p className="function-subtitle">{author.department}</p>
                  </td>
                  <td className="td">
                    <div className={author.status === 'online' ? 'status-online' : 'status-offline'}>
                      <span>{author.status}</span>
                    </div>
                  </td>
                  <td className="td">
                    <p className="employment-date">{author.employed}</p>
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
    </div>
  );
}
