import React from 'react';
import 'tailwindcss/tailwind.css';
import Hero from './Hero';
import ContactSection from './ContactSection';
import Heading from './Heading';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="flex-grow">
        <Heading />
      </div>
      <Hero />
      <ContactSection />
    </div>
  );
}

export default HomePage;

