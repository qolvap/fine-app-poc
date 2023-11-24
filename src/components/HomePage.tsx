import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <h1>Chcesz sprawdzić jak powane jest naruszenie? Czy jaka grzywna za naruszenie jest przywidziana?</h1>
            <Link to="/Results">Sprawdź</Link>
        </div>
    );
}

export default HomePage;
