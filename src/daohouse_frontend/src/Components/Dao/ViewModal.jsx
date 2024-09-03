import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import avatar from "../../../assets/avatar.png";

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

function ViewModal({ open, onClose, users = [] }) {
    // Find the user based on the selectedUserId
   // const user = users.find(user => user.principalId === selectedUserId);
 console.log(users)

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="user-modal-title"
            className="flex items-center justify-center backdrop-blur-md bg-black/50"
            closeAfterTransition
        >
            <Box
                className="relative p-4 bg-white rounded-lg shadow-2xl max-w-3xl w-full"
            >
                <IconButton
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                >
                    <CloseIcon />
                </IconButton>
                <div className="mb-4">
                    {users.map(principalId => (
                        <div
                            key={principalId}
                            className={`flex items-center mb-4 justify-between cursor-pointer  'bg-gray-100' : 'bg-transparent'} p-2 rounded-md`}
                            onClick={() => onClose(principalId)}
                        >
                            <div className="flex items-center">
                                <img
                                    src={avatar}
                                    alt={`{img}'s profile`}
                                    className="w-12 h-12 mr-4 rounded-full"
                                />
                               <div>
                                    <p className="m-0 font-bold text-left">UserName.user</p>
                                </div>
                            </div>
                            <p className="m-0 text-right">{principalId}</p>
                        </div>
                    ))}
                    
                </div>
               {/* {users && (
                    <Box
                        className="pt-2 border-t border-gray-300 mt-4"
                    >
                        <h2 className="text-xl font-semibold">Selected User</h2>
                        <div className="flex items-center mt-2">
                            <img
                                src={user.profileImage}
                                alt={`${user.name}'s profile`}
                                className="w-24 h-24 mr-4 rounded-full"
                            />
                            <div>
                                <p className="m-0 font-bold">{user.name}</p>
                                <p className="m-0">{user.principalId}</p>
                            </div>
                        </div>
                    </Box>
                )} */}
            </Box>
        </Modal>
    );
}

export default ViewModal;
