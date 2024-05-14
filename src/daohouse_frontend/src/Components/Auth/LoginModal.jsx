import React from 'react';
import { FaTimes } from 'react-icons/fa';


const LoginModal = ({ isOpen, onClose, onLogin, onLoginPlug }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md shadow-md max-w-md">
            <h2 className="text-2xl font-bold mb-4">Choose a connect method:</h2>
            <button className="bg-[#0e3746] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={onLogin}>Internet Identity</button>
            <button className="bg-[#0e3746] hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={onLoginPlug}>Plug Wallet</button>
            <div className='flex item-center justify-center'>
              <button className="flex  items-center bg-gray-600 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4" onClick={onClose}>
                <FaTimes className="mr-2" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
