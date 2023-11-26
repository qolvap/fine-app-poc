import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Fine, data } from '../data/data';

function ResultsPage() {
  const [term, setTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Fine[]>([]);
  const [selectedGuilty, setSelectedGuilty] = useState<string>(''); 

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
        <div >
            <div className="flex items-center">
                    <input
                    type="text"
                    placeholder="Wpisz hasło..."
                    value={term}
                    onChange={handleInputChange}
                    onKeyDown={handleEnterKeyPress}
                    className="block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                <select
                    id="guilty"
                    name="guilty"
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    value={selectedGuilty}
                    onChange={(e) => setSelectedGuilty(e.target.value)}
                >
                    <option value="">Taryfikator dla</option>
                    {data.map((fine) => (
                    <option key={fine.number} value={fine.guilty}>
                        {fine.guilty}
                    </option>
                    ))}
                </select>

                <button
                    onClick={handleFilterButtonClick}
                    className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                >
                    Wyszukaj
                </button>
                </div>


          {filteredData.length > 0 ? (
            <div className="absolute left-0 right-0 mt-10">
              {filteredData.map((fine) => (
                <div key={fine.number}>
                            <h3>Taryfikator {fine.guilty}</h3>
                            <p>Załącznik: {fine.attachment}</p> 
                            <p>Numer w taryfikatorze: {fine.number}</p>
                            <p>Opis: {fine.description}</p>
                            <p>Grzywna: {fine.fine}zł</p>
                            <p>Poziom naruszenia: {Array.isArray(fine.group) ? fine.group.join(', ') : fine.group}</p>
                            <br></br>
                </div>
              ))}
            </div>
          ) : (
            <p className="absolute left-0 right-0 mt-10">Nie znaleziono</p>
          )}
        </div>
      </header>

      <Link to="/">Powrót do strony głównej</Link>
      <h3>Źródło: UOTD</h3>
    </div>
  );
}

export default ResultsPage;
