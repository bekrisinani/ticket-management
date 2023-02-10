import React  from 'react';
import { Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
    isOpen: boolean;
    handleClose: () => void;
    title: string;
    children: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, handleClose, title, children }) => {
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            disableAutoFocus={true}
            disableEnforceFocus={true}
        >
            <div className="p-4 bg-white shadow-lg w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-10 md:mt-20">
                <div className="flex justify-between	pb-10">
                    <Typography variant="h5" id="transition-modal-title">
                        {title}
                    </Typography>
                    <button onClick={handleClose}>
                        <CloseIcon/>
                    </button>
                </div>

                {children}
            </div>
        </Modal>
    );
};

export default CustomModal;
