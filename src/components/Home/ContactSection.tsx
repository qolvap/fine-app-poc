import React from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function ContactSection() {
  return (
    <div className="mb-9">
          <div className="my-12 flex flex-col items-center justify-center h-[50vh]">
      <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Chcesz się z nami skontaktować?
      </h2>
      <h4 className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Znalazłeś błąd czy chcesz polepszyć proces użytkowania? Zostaw wiadomość!
      </h4>
      <Button />
      <Link to="/Contact" className="common-button-style">
        Wyślij
      </Link>
    </div>
    </div>
  );
}

export default ContactSection;

