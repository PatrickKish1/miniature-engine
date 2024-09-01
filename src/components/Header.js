import React, { useState, useEffect, useRef } from 'react';
import equiLogo from "../assets/equibloc-logo.png";
import walletIcon from "../assets/wallet.svg";
import notificationIcon from "../assets/notification.svg";

const Header = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Check if wallet is connected on load
  useEffect(() => {
    const savedWalletAddress = localStorage.getItem('walletAddress');
    if (savedWalletAddress) {
      setWalletAddress(savedWalletAddress);
      setIsWalletConnected(true);
    }
  }, []);

  // Function to handle wallet connection
  const handleWalletConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setIsWalletConnected(true);
        localStorage.setItem('walletAddress', accounts[0]); // Save the wallet address to local storage
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      console.log('MetaMask is not installed.');
    }
  };

  // Function to handle wallet disconnection
  const handleWalletDisconnection = () => {
    setWalletAddress('');
    setIsWalletConnected(false);
    localStorage.removeItem('walletAddress'); // Remove the wallet address from local storage
    setShowDropdown(false);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between p-5 bg-white border-b border-gray-200 relative">
      <div className="flex items-center">
        <img src={equiLogo} alt="EquiBloc Logo" height={40} width={160} />
      </div>
      
      <nav className="flex-1 flex ml-3 justify-center space-x-6">
        <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
        <a href="#jobs" className="text-gray-700 hover:text-gray-900">Jobs</a>
        <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
      </nav>
      
      <div className="flex items-center space-x-4">
        {isWalletConnected && (
          <>
            <img src={notificationIcon} alt="Notifications" className="w-6 h-6 cursor-pointer" />
            <button className="border border-[#ff0909] text-[#ff0909] bg-white px-4 py-2 rounded font-bold">
              Hire
            </button>
            <button className="bg-[#ff0909] text-white px-4 py-2 rounded font-bold">
              Apply
            </button>
          </>
        )}
        <div className="relative">
          <button
            onClick={() => {
              isWalletConnected ? setShowDropdown(!showDropdown) : handleWalletConnection();
            }}
            className="bg-[#ff0909] text-white px-5 py-2.5 rounded font-bold flex items-center"
          >
            <img src={walletIcon} alt="Wallet Icon" className="w-4 h-4 mr-2" />
            {isWalletConnected ? (
              <span>{walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4)}</span>
            ) : (
              'Connect Wallet'
            )}
          </button>
          {isWalletConnected && showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-20"
            >
              <button
                onClick={handleWalletDisconnection}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
