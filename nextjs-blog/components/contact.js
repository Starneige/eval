import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Button, ButtonGroup } from '@mui/material';
import CustomModal from './modal';
import api, { getUser } from '../api';
import ContactForm from './contactForm';

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

export default function Contact({ id, email, nom, prenom, telephone, message }) {
  const [openUpdateContactModal, setOpenUpdateContactModal] = React.useState(false);
  const [domLoaded, setDomLoaded] = React.useState(false);
  const user = getUser();

  const deleteContact = () => {
    api.delete(`/contact/${id}/`)
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
          open={openUpdateContactModal}
          onClose={() => setOpenUpdateContactModal(false)}
          title="Modifier une demande de contact"
          body={<ContactForm id={id} email={email} nom={nom} prenom={prenom} telephone={telephone} message={message} />}
          size="medium"
          // icon={faCircleExclamation}
          button1Text="Fermer"
          button2Text="Sauvegarder"
          onButtonClick={() => setOpenUpdateContactModal(false)}
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
            Email: {email} Téléphone: {telephone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {message}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {domLoaded && user && user.is_staff ? 
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            >
            <Button onClick={() => setOpenUpdateContactModal(true)}>Modifier</Button>
            <Button onClick={() => deleteContact()}>Supprimer</Button>
          </ButtonGroup>
          : null}
        </CardActions>
      </Card>
    </>
  );
}
