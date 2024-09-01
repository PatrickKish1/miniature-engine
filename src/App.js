import React from 'react';
import Header from './components/Header'; // Ensure the path is correct
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        {/* Main content goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
