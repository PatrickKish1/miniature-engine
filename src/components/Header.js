import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import equiLogo from '../assets/equibloc-logo.png';
import walletIcon from '../assets/wallet.svg';
import notificationIcon from '../assets/notification.svg';
import Notification from './Notification';

const Header = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddresses, setWalletAddresses] = useState([]);
  const [activeWallet, setActiveWallet] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Check for existing wallet connection state on component mount
  useEffect(() => {
    // No need to use localStorage, as you don't want to persist addresses across sessions.
    // All wallet addresses will be managed dynamically.
  }, []);

  const handleWalletConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsWalletConnected(true);
        setWalletAddresses(accounts);
        setActiveWallet(accounts[0]);
        setNotification({ show: true, message: 'Wallet connected!' });
      } catch (error) {
        setNotification({ show: true, message: 'Failed to connect wallet.' });
      }
    } else {
      setNotification({ show: true, message: 'MetaMask is not installed. Please install it to connect your wallet.' });
    }
  };

  const handleWalletDisconnection = () => {
    setIsWalletConnected(false);
    setWalletAddresses([]);
    setActiveWallet('');
    setShowDropdown(false);
    setNotification({ show: true, message: 'Wallet disconnected!' });
  };

  const handleWalletSelection = (address) => {
    setActiveWallet(address);
    setNotification({ show: true, message: `Switched to wallet ${address.slice(0, 6)}...${address.slice(-4)}` });
    setShowDropdown(false);
  };

  const handleJobsNavigation = () => {
    if (isWalletConnected) {
      navigate('/jobs');
    } else {
      setNotification({ show: true, message: 'Please connect your wallet to access this page.' });
    }
  };

  // Close dropdown when clicking outside
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
        <Link to="/">
          <img src={equiLogo} alt="EquiBloc Logo" height={40} width={160} />
        </Link>
      </div>
      
      <nav className="flex-1 flex ml-[120px] justify-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <button onClick={handleJobsNavigation} className="text-gray-700 hover:text-gray-900">
          Jobs
        </button>
        <Link to="#about" className="text-gray-700 hover:text-gray-900">About</Link>
      </nav>
      
      <div className="flex items-center space-x-4">
        {isWalletConnected && (
          <>
            <img src={notificationIcon} alt="Notifications" className="w-6 h-6 cursor-pointer" />
            <Link to="/creategig" className="border-2 border-[#ff0909] text-[#ff0909] bg-white px-4 py-2 rounded font-bold">
              Hire
            </Link>
            <Link to="/creategig" className="bg-[#ff0909] text-white px-4 py-2 rounded font-bold">
              Apply
            </Link>
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
              <span>{activeWallet.slice(0, 6) + '...' + activeWallet.slice(-4)}</span>
            ) : (
              'Connect Wallet'
            )}
          </button>
          {isWalletConnected && showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-20"
            >
              {walletAddresses.map((address, index) => (
                <button
                  key={index}
                  onClick={() => handleWalletSelection(address)}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  {address.slice(0, 6) + '...' + address.slice(-4)}
                </button>
              ))}
              <button
                onClick={handleWalletDisconnection}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left mt-2"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Notification component */}
      <Notification
        message={notification.message}
        show={notification.show}
        onClose={() => setNotification({ ...notification, show: false })}
      />
    </header>
  );
};

export default Header;
