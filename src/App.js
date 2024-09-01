import React from 'react';
import Header from './components/Header'; // Ensure the path is correct
import Footer from './components/Footer';

function App() {
  // Function to handle button click
  const handleRedirect = () => {
    window.location.href = 'https://equibloc.vercel.app/';
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center">
        {/* Main content goes here */}
        <button
          onClick={handleRedirect}
          className="bg-[#ff0909] text-white px-4 py-2 rounded mt-4"
        >
          Go to EquiBloc
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
