import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';

const PaymentModal = ({ open, onClose, onPay , loading}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-lg font-bold mb-4">Make Payment</h2>
          <p className="mb-6">To create a DAO, you need to pay 0.1 ICP.</p>
          <div className="flex justify-end space-x-4">
            <Button onClick={onClose} variant="contained" color="secondary">
              Cancel
            </Button>
            <Button onClick={onPay} variant="contained" color="primary" disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Pay"}
            </Button>

          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal;

