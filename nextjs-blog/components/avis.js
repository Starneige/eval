// import React, { useState } from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardHeader,
//   MDBCardFooter,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import UpdateButton from './updateButton';
// import AddButton from './addButton';
// import DeleteButton from './deleteButton';
// import CustomModal from './modal';
// import AvisForm from './avisForm';
// import { appBarClasses } from '@mui/material';

// export default function Avis({ nom, prenom, commentaire, note, approuve, date }) {
//   const [openUpdateAvisModal, setOpenUpdateAvisModal] = useState(false);

//   return (
//     <>
//       <CustomModal
//           open={openUpdateAvisModal}
//           onClose={() => setOpenUpdateAvisModal(false)}
//           title="Modifier un avis"
//           body={<AvisForm nom={nom} prenom={prenom} commentaire={commentaire} note={note} approuve={approuve} />}
//           size="medium"
//           // icon={faCircleExclamation}
//           button1Text="Fermer"
//           button2Text="Sauvegarder"
//           onButtonClick={() => setOpenUpdateAvisModal(false)}
//       />
//       <MDBCard alignment='center'>
//         {/* <CustomModal hasCloseButton={true} isOpen={isOpen} onClose={onClose}>
//           <AvisForm nom />
//         </CustomModal> */}
//         <MDBCardHeader>{nom} {prenom}</MDBCardHeader>
//         <MDBCardBody>
//           <MDBCardTitle>{note}</MDBCardTitle>
//           <MDBCardText>{commentaire}</MDBCardText>
//           <UpdateButton onClick={() => setOpenUpdateAvisModal(true)} />
//           <AddButton />
//           <DeleteButton />
//           {/* <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>LAUNCH DEMO MODAL</MDBBtn> */}
//         </MDBCardBody>
//         <MDBCardFooter className='text-muted'>{date}</MDBCardFooter>
//       </MDBCard>
//     </>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Button, ButtonGroup } from '@mui/material';
import CustomModal from './modal';
import AvisForm from './avisForm';
import api, { getUser } from '../api';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Avis({ id, nom, prenom, commentaire, note, approuve, date }) {
  const [openUpdateAvisModal, setOpenUpdateAvisModal] = React.useState(false);
  const [domLoaded, setDomLoaded] = React.useState(false);
  const user = getUser();

  const deleteAvis = () => {
    api.delete(`/avis/${id}/`)
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  React.useEffect(() => {
    setDomLoaded(true);
  }, [])
  

  return (
    <>
      <CustomModal
          open={openUpdateAvisModal}
          onClose={() => setOpenUpdateAvisModal(false)}
          title="Modifier un avis"
          body={<AvisForm id={id} nom={nom} prenom={prenom} commentaire={commentaire} note={note} approuve={approuve} />}
          size="medium"
          // icon={faCircleExclamation}
          button1Text="Fermer"
          button2Text="Sauvegarder"
          onButtonClick={() => setOpenUpdateAvisModal(false)}
      />
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {nom[0]}
            </Avatar>
          }
          title={`${nom} ${prenom}`}
          subheader="September 14, 2016"
          />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {note}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {commentaire}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {domLoaded && user && user.is_staff ? 
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            >
            <Button onClick={() => setOpenUpdateAvisModal(true)}>Modifier</Button>
            <Button onClick={() => deleteAvis()}>Supprimer</Button>
          </ButtonGroup>
          : null}
        </CardActions>
      </Card>
    </>
  );
}
