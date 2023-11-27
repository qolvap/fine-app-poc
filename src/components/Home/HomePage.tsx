import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function HomePage() {

  return (
        <div className="HomePage flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Cały taryfikator w jednym miejscu
            </h2>
            <h4 className="mb-4 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-500 dark:text-gray-400">
              Przejrzyj wykaz naruszeń i wysokość kar
            </h4>
              <Link
                to="/Results"
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md focus:outline-none focus:ring focus:border-indigo-300 hover:text-indigo-600 hover:bg-slate-50 hover:border-2 hover:border-blue-600"
              >
                Sprawdź
              </Link>

          </div>
          <div className="faq-section"></div>
        </div>
  );
}

export default HomePage;

