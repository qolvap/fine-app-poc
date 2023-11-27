import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ResultsPage from './components/Results/ResultsPage';
import Sidebar from './components/Sidebar/Sidebar';
import { AppProvider } from './components/context/Context';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="App">
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Results" element={<ResultsPage />} />
          </Routes>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;


