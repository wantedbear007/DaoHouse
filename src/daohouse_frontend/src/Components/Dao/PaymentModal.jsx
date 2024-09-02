import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import defaultImage from "../../../assets/defaultImage.png"; // Import your default image

const PaymentModal = ({ open, onClose, onPay, loading, data }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-xl">
          <h2 className="text-lg font-bold mb-4">Verify your order details</h2>
          <div className="flex items-center mb-4">
            <img
              src={data?.step1?.imageUrl || defaultImage} // Show default image if imageUrl is not provided
              alt="Product"
              className="w-16 h-16 rounded mr-4"
            />
            <div>
              <p className="font-bold">{data?.step1?.DAOIdentifier || "Product Name"}</p> {/* Show "Product Name" if DAOIdentifier is not available */}
              <p>{data?.step1?.Purpose || "Purpose not specified"}</p> {/* Default text if Purpose is not available */}
              <p>ICP 2</p>
            </div>
          </div>
          <div className="border-t border-gray-300 mb-4"></div>
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span>ICP 6.8</span>
          </div>
          <p className="text-gray-600 mb-6">Click “Confirm” to complete your payment</p>
          <div className="flex justify-between">
            <Button
              onClick={onClose}
              variant="outlined"
              style={{ backgroundColor: 'white', color: 'black', borderColor: 'black' }}
              className="rounded-full"
            >
              Nah, Cancel
            </Button>
            <Button
              onClick={onPay}
              variant="contained"
              style={{ backgroundColor: 'black', color: 'white' }}
              disabled={loading}
              className="rounded-full"
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Confirm"}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal;
