import React from 'react';
import 'tailwindcss/tailwind.css';
import Heading from './Heading';
import Hero from './Hero';
import ContactSection from './ContactSection';

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

