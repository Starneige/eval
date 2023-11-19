import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButtonGroup from '@mui/material/ButtonGroup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';


const CustomModal = ({
  open,
  onClose,
  title,
  subtitle,
  body,
  isScrollable,
  button1Text,
  button2Text,
  onButtonClick,
  onButton2Click,
  isDisable,
  size = 'medium',
  icon,
  exitCross = false,
}) => {
  // const styles = useStyles();

  const handleSave = () => {
    onClose();
  };

  const getSize = (size) => {
      switch (size) {
        case 'small' :
          return 300;
        case 'medium' :
          return 700;
        case 'large' :
          return 900;
        default : 
          return 1100;
      }
  }

  return (
    <div>
     <Modal
       open={open}
       onClose={onClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
     >
       <Box sx={style}>
         <Typography id="modal-modal-title" variant="h6" component="h2">
           {title}
         </Typography>
         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {body}
         </Typography>
         {/* <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button onClick={onButton2Click || onClose}>{button1Text}</Button>
            <Button onClick={onButtonClick || handleSave}>{button2Text}</Button>
          </ButtonGroup> */}
       </Box>
     </Modal>
   </div>
  );
};

export default CustomModal;