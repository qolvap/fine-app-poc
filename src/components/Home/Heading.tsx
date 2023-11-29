import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Heading = () => {
  return (
    <div className="my-12 h-[50vh]">
      <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Cały taryfikator w jednym miejscu
      </h2>
      <h4 className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Przejrzyj wykaz naruszeń i wysokość kar
      </h4>
      <Button />
      <Link to="/Results" className="common-button-style">
        Sprawdź
      </Link>
    </div>
  );
};

export default Heading;
