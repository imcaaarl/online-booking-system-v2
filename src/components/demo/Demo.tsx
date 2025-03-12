'use client'

import React from 'react';

const Demo = () => {
  const object = { name: 'sample', age: '20', email: 'admin@mail.com' };
  const array = ['banana', 'mango', 'apple', 'orange']; //array of fruits
  const arrayOfObjects = [
    { name: 'sample Array of objects 1', age: '20', email: 'admin1@mail.com' },
    { name: 'sample Array of objects 2', age: '22', email: 'admin2@mail.com' },
    { name: 'sample Array of objects 3', age: '26', email: 'admin3@mail.com' },
  ];

  const generateValues = () => {
    arrayOfObjects.map((value) => {
        const objectInsideOfArray = value
        return <div className='border-2 p-5'>
                {objectInsideOfArray.name}
            </div>
    })
  }

  return (
    <div className="flex items-center flex-col justify-center p-20">
      <div className="flex flex-col mb-10">
        <div><h1>Objects</h1></div>
        <div>{object.name}</div>
        <div>{object.age}</div>
        <div>{object.email}</div>
      </div>

      <div className="flex flex-col mb-10">
        <div><h1>Array</h1></div>
        <div>{array[0]}</div>
        <div>{array[1]}</div>
        <div>{array[2]}</div>
        <div>{array[3]}</div>
      </div>

      <div className="flex flex-col mb-10">
        <div><h1>Array</h1></div>
        <div>{arrayOfObjects[0].name}</div>
        <div>{arrayOfObjects[0].age}</div>
        <div>{arrayOfObjects[0].email}</div>
      </div>

      <div>
        {
            arrayOfObjects.map((value) => {
                return <div className='border-1 p-5'>{value.name}</div>
            })
        }
    </div>

      <button className='border-1' onClick={generateValues}>Generate Value</button>
    </div>
  );
};

export default Demo;
