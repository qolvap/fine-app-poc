import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <div className="App">
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Results" element={<ResultsPage />} />
            <Route path="/Contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;


