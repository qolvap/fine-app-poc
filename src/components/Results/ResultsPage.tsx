import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Fine, data } from '../data/data';
import 'tailwindcss/tailwind.css';
import Button from '../Button/Button';

function podmien(napis: string): string {
  return napis
    .replace(/ę/g, 'e')
    .replace(/ó/g, 'o')
    .replace(/ą/g, 'a')
    .replace(/ś/g, 's')
    .replace(/ł/g, 'l')
    .replace(/ż/g, 'z')
    .replace(/ź/g, 'z')
    .replace(/ć/g, 'c')
    .replace(/ń/g, 'n')
    .toLowerCase();
}

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


  /**
 * Handles the filter button click:
 * 1. Converts the entered term to lowercase and replaces Polish characters.
 * 2. Filters the data based on a match of the transformed term in fine descriptions.
 * 3. Updates the state of filteredData and clears the entered term.
 */
  const handleFilterButtonClick = () => {
    const termLower = podmien(term);

    const filtered = data.filter((fine) => {
      const descriptionLower = podmien(fine.description || '');
      return descriptionLower.includes(termLower);
    });

    setFilteredData(filtered);
    setTerm('');
  };


  return (
    <div className="flex flex-col min-h-screen items-center justify-between">
    <div className="mb-4">
      <div className="flex items-center m-5">
          <input
            type="text"
            placeholder="Wpisz hasło..."
            value={term}
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyPress}
            className="block w-1/2 rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-50"
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
          <Button />
          <button
            onClick={handleFilterButtonClick}
            className="common-button-style"
          >
            Wyszukaj
          </button>
        </div>

        {(filteredData.length > 0 || !data.some(fine => !fine.description?.includes(term))) ? (
          <div className="mt-10 grid gap-4 place-items-center m-5">
            {filteredData.map((fine) => (
              <div key={fine.number} className="border border-blue-300 rounded-md p-4 max-w-[480px] bg-slate-50 shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Taryfikator {fine.guilty}</h3>
                <p><span className="font-semibold">Załącznik:</span> {fine.attachment}</p>
                <p><span className="font-semibold">Numer w taryfikatorze:</span> {fine.number}</p>
                <p><span className="font-semibold">Opis:</span> {fine.description}</p>
                <p><span className="font-semibold">Grzywna:</span> {fine.fine}zł</p>
                <p><span className="font-semibold">Poziom naruszenia:</span> {Array.isArray(fine.group) ? fine.group.join(', ') : fine.group}</p>
              </div>
            ))}
          </div>
        ) : ( 
          <p className="mt-10 flex flex-col items-center bg-transparent py-0 pl-2 pr-7 text-gray-500">Nie znaleziono</p>
        )}
      </div>
      
      <div className="flex flex-col items-center">
        <p className="bg-transparent py-0 pl-2 pr-7 text-gray-500">Źródło: UOTD</p>
        <p className="bg-transparent py-0 pl-2 pr-7 text-gray-500">Legenda: 
        - PN poważne naruszenie
        - BPN bardzo poważne naruszenie
        - NN najpoważniejsze naruszenie
        </p>
        <br/>
        <Link to="/" className="mr-4 hover:text-blue-600 mb-5">Powrót do strony głównej</Link>
      </div>

    </div>
  );
}

export default ResultsPage;

