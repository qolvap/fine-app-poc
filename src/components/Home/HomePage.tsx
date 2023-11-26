import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

  return (
    <div className="HomePage">
      <div className='hero-section'>
        <h1 className="underline decoration-8 text-slate-400">
          Chcesz sprawdzić jak poważne jest naruszenie? 
          Czy jaka grzywna za naruszenie jest przywidziana?
        </h1>
        <Link to="/Results">Sprawdź</Link>
      </div>   
      <div className='faq-section'></div>
    </div>
  );
}

export default HomePage;

