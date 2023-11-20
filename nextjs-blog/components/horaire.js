import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Button, ButtonGroup } from '@mui/material';
import CustomModal from './modal';
import HoraireForm from './horaireForm';
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

export default function Horaire({ key, id, jour = "", ferme = false, heure_ouverture_matin = "", heure_fermeture_matin = "", heure_ouverture_apresm = "", heure_fermeture_apresm = "" }) {
  const [openUpdateHoraireModal, setOpenUpdateHoraireModal] = React.useState(false);
  const [domLoaded, setDomLoaded] = React.useState(false);
  const user = getUser();

  const deleteHoraire = () => {
    api.delete(`/horaire/${id}/`)
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
  
  const getMinutes = (heure) => {
    if(heure) {
      return heure.split(':')[0] + ":" + heure.split(':')[1];
    }
    return "Pas d'horaire";
  }

  const getJour = (jour) => {
    switch (jour) {
      case "LU":
        return "Lundi";
      case "MA":
        return "Mardi";
      case "ME":
        return "Mercredi";
      case "JE":
        return "Jeudi";
      case "VE":
        return "Vendredi";
      case "SA":
        return "Samedi";
      case "DI":
        return "Dimanche";
      default:
        return "Jour inconnu";
    }
  }

  return (
    <li key={key} style={{"paddingBottom": "10px"}}>
      <CustomModal
          open={openUpdateHoraireModal}
          onClose={() => setOpenUpdateHoraireModal(false)}
          title={`Modifier l'horaire de ${getJour(jour)}`}
          body={<HoraireForm id={id} jour={jour} ferme={ferme} heure_ouverture_matin={heure_ouverture_matin} heure_fermeture_matin={heure_fermeture_matin} heure_ouverture_apresm={heure_ouverture_apresm} heure_fermeture_apresm={heure_fermeture_apresm} />}
          size="medium"
          // icon={faCircleExclamation}
          button1Text="Fermer"
          button2Text="Sauvegarder"
          onButtonClick={() => setOpenUpdateHoraireModal(false)}
      />
      {domLoaded && user && user.is_staff ? 
      <>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
        >
        <Button onClick={() => setOpenUpdateHoraireModal(true)}>Modifier</Button>
        <Button onClick={() => deleteHoraire()}>Supprimer</Button>
      </ButtonGroup>
      <br />
      </>
      : null}
      {getJour(jour)} : {ferme ? "Fermé" : `${getMinutes(heure_ouverture_matin)} - ${getMinutes(heure_fermeture_matin)} ${getMinutes(heure_ouverture_apresm)} - ${getMinutes(heure_fermeture_apresm)}`}
    </li>
  );
}
