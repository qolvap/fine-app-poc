import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './components/Home/HomePage';
import ResultsPage from './components/Results/ResultsPage';
import ContactPage from './components/Contact/ContactPage';
import Footer from './components/Footer/Footer';
import { AppProvider } from './components/context/Context';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="App flex flex-col min-h-screen">
          <div className="flex-grow flex-shrink-0">
            <Sidebar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Results" element={<ResultsPage />} />
              <Route path="/Contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;



