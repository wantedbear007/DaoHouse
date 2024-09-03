import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import avatar from "../../../assets/avatar.png";

function ViewModal({ open, onClose }) {
  const users = [
    {
      name: "Alice",
      principalId: "7co7h-3x54v-ga4dx-4mz4j-lxwvh-ursxl-i3buq-fmno7",
      profileImage: avatar
    },
    {
      name: "Bob",
      principalId: "8co7h-3x54v-ga4dx-4mz4j-lxwvh-ursxl-i3buq-fmno5",
      profileImage: avatar
    },
    {
      name: "Carol",
      principalId: "9co7h-3x54v-ga4dx-4mz4j-lxwvh-ursxl-i3buq-fmno4",
      profileImage: avatar
    }
  ];

  return (
    <Modal
      open={open}
      onClose={onClose} // This should handle closing the modal when clicking outside
      aria-labelledby="user-modal-title"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(8px)', // Blurs the background
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a semi-transparent background for a better effect
      }}
      closeAfterTransition
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 24,
          maxWidth: 600, // Increased maxWidth
          width: '100%',
          position: 'relative',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'gray',
            '&:hover': {
              color: 'black'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
        {users.map(user => (
          <div key={user.principalId} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={user.profileImage} alt={`${user.name}'s profile`} style={{ width: 50, height: 50, marginRight: '16px', borderRadius: '50%' }} />
              <div>
                <p style={{ margin: 0, fontWeight: 'bold', textAlign: 'left' }}>{user.name}</p>
              </div>
            </div>
            <p style={{ margin: 0, textAlign: 'right' }}>{user.principalId}</p>
          </div>
        ))}
      </Box>
    </Modal>
  );
}

export default ViewModal;
