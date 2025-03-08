'use client';

import { useState } from 'react';
import './style.css';

import Sidebar from '../sidebar/Sidebar';
import Nav from '../nav/Nav';
import Client from '../clients/Client';

export default function Admin() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="p-4 xl:ml-80">
        <Nav />
        <Client/>
      </div>
    </div>
  );
}
