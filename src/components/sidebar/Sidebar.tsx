import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-100 p-5 flex flex-col gap-5 shadow-lg">
      {/* Sidebar Title */}
      <h2 className="text-xl font-bold text-gray-700 mb-4">Dashboard</h2>

      {/* Home Button */}
      
      <a href="/" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-200 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
        <span className="text-gray-700 font-medium">Home</span>
      </a>
      
      {/* Services Button */}
      <a href="/services" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-200 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path
            fillRule="evenodd"
            d="M12 1.25a5.626 5.626 0 0 0-5.625 5.626c0 1.273-.082 2.17-.296 2.89a6.593 6.593 0 0 1-.529 1.36l-.01.018c-.04.076-.086.163-.136.267-.1.205-.216.48-.336.79-.24.62-.49 1.435-.62 2.277-.133.855-.188 1.73-.188 2.462 0 .889.189 1.758.563 2.53.38.783.97 1.478 1.822 1.762 1.057.352 1.879-.187 2.374-.84.496-.655.792-1.503 1.066-2.34.067-.202.134-.408.203-.61.07.202.136.408.203.61.274.837.57 1.685 1.066 2.34.495.653 1.317 1.192 2.374.84.852-.284 1.442-.979 1.822-1.762.374-.772.563-1.64.563-2.53 0-.732-.055-1.607-.188-2.462-.13-.842-.38-1.657-.62-2.277a11.027 11.027 0 0 0-.473-1.057 6.38 6.38 0 0 1-.134-.267l-.01-.018a6.591 6.591 0 0 1-.53-1.36c-.213-.72-.295-1.617-.295-2.89A5.626 5.626 0 0 0 12 1.25Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-gray-700 font-medium">Services</span>
      </a>
    </div>
  );
};

export default Sidebar;
