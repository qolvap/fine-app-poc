import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function ContactPage() {
  const [message, setMessage] = useState('');

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value.slice(0, 200));
  };

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Znalazłeś błąd? <br/>Powiadom nas!</h1>

      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Adres email
          </label>
          <input
            type="email"
            id="email"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="mojemail@email.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Imię
          </label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Napisz wiadomość
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={handleTextareaChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Wiadomość może zawierać włącznie 200 znaków..."
            style={{ resize: 'none' }}
          />
        </div>

        <Button />
        <Link to="/" className="common-button-style mt-4">
          Wyślij
        </Link>
      </form>
    </div>
  );
}

export default ContactPage;
