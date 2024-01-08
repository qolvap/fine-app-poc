import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import emailjs from '@emailjs/browser';
import Button from '../Button/Button';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Added type React.ChangeEvent<HTMLInputElement>
  // to specify the event type when the value changes in the input element for the name.
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // Added type React.ChangeEvent<HTMLInputElement>
  // to specify the event type when the value changes in the input element for the email.
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Added type React.ChangeEvent<HTMLTextAreaElement>
  // to specify the event type when the value changes in the textarea element for the message.
  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value.slice(0, 200));
  };

  // Added type React.FormEvent<HTMLFormElement>
  // to specify the event type when the form is submitted. This helps 
  // ensure type correctness when handling the event in the sendEmail function.
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Checks if all inputs used
    if (name && email && message) {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userId = process.env.REACT_APP_EMAILJS_USER_ID;
  
      // Check if any of the values is undefined
      if (serviceId && templateId && userId) {
        emailjs
          .sendForm(serviceId, templateId, e.currentTarget, userId)
          .then(
            (result) => {
              // Mail sent
              alert('Wiadomość wysłana!');
              console.log(result.text);
            },
            (error) => {
              // Mistake of sending an email
              alert('Błąd wysłania wiadomości. Spróbuj ponownie');
              console.log(error.text);
            }
          );
    
        // Clear inputs
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Handle the case when any of the environment variables is undefined
        console.error('One or more environment variables are undefined');
      }
    } else {
      // All inputs needs to be fulfilled
      alert('Proszę uzupełnić wszystkie pola.');
    }
  };  
  

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Znalazłeś błąd? <br/>Powiadom nas!</h1>

      <form onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Adres email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={email}
            onChange={handleEmailChange}
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
            name="user_name"
            value={name}
            onChange={handleNameChange}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Napisz wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={handleTextareaChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Wiadomość może zawierać włącznie 200 znaków..."
            style={{ resize: 'none' }}
          />
        </div>

        <Button />
        <button type="submit" className="common-button-style mt-4 mr-5">
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default ContactPage;