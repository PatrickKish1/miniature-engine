// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; // Import your Home component
import JobsPage from './pages/JobsPage'; // Import your Jobs component
import GigsPage from './pages/GigsPage'; // Import the GigsPage component
import CreateGig from './pages/CreateGig'; // Import the CreateGig component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Define route for Home */}
            <Route path="/jobs" element={<JobsPage />} /> {/* Define route for JobsPage */}
            <Route path="/gigs" element={<GigsPage />} /> {/* Define route for GigsPage */}
            <Route path="/creategig" element={<CreateGig />} /> {/* Define route for CreateGig */}
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
