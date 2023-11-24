import React, { useState, ChangeEvent } from 'react';
import { Fine, data } from './data';
import { Link } from 'react-router-dom';

function ResultsPage() {
    const [term, setTerm] = useState<string>('');
    const [filteredData, setFilteredData] = useState<Fine[]>([]);

    /*
    The parameter e is expected to be an event object of type ChangeEvent, 
    where the event target is an <input> element. 
    ChangeEvent<HTMLInputElement> syntax used to define the type of the parameter e in a function.
    */
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleFilterButtonClick();
        }
    };

    const handleFilterButtonClick = () => {
      /*
      To prevent the error, first check if fine.description is defined before trying to call includes on it.
      It makes sure that if term is undefined or null, it is treated as an empty string,
      and the includes method won't throw an error.
      */ 
        const filtered = data.filter((fine) => fine.description?.includes(term || ''));
        setFilteredData(filtered);
        setTerm('');
    };

    return (
        <div className="App">
            <header className="App-header">
                <input type="text" placeholder="Wpisz hasło..." value={term} onChange={handleInputChange} onKeyDown={handleEnterKeyPress}  />
                <button onClick={handleFilterButtonClick}>Wyszukaj</button>
                {filteredData.length > 0 ? (
                    filteredData.map((fine) => (
                        <div key={fine.number}>
                            <h3>Taryfikator {fine.guilty}</h3>
                            <p>Załącznik: {fine.attachment}</p> 
                            <p>Numer w taryfikatorze: {fine.number}</p>
                            <p>Opis: {fine.description}</p>
                            <p>Grzywna: {fine.fine}</p>
                            <p>Poziom naruszenia: {Array.isArray(fine.group) ? fine.group.join(', ') : fine.group}</p>
                            <br></br>
                        </div>
                        ))
                    ) : (
                        <p>Nie znaleziono</p>
                )}
            </header>
            <Link to="/">Powrót do strony głównej</Link>
        </div>
    );
}

export default ResultsPage;
