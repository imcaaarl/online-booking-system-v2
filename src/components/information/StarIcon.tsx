import React from 'react';

interface Properties {
  rating: string;
}

const StarIcon = (properties: Properties) => {
  const { rating } = properties;
  const generateStars = (counter: number) =>
    new Array(counter).fill('').map((valu, index) => {
      return (
        <div key={index}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="gold"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mr-1 size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.27l5.18 3.73-1.64-6.1 4.9-4.15-6.34-.54L12 4l-2.09 6.21-6.34.54 4.9 4.15-1.64 6.1L12 17.27z"
            />
          </svg>
        </div>
      );
    });
  return <div className='flex flex-row'>
    {generateStars(Number(rating))}
  </div>;
};

export default StarIcon;
