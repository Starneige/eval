import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import Voiture from '../../components/voiture';
import { useEffect, useState } from 'react';
import api, { getUser } from '../../api';
import CustomModal from '../../components/modal';
import VoitureForm from '../../components/voitureForm';
import { Button } from '@mui/material';

export default function Vente() {
  const [openAddVoitureModal, setOpenAddVoitureModal] = useState(false);
  const user = getUser();
  let [voiture, setVoiture] = useState([])
  const [domLoaded, setDomLoaded] = useState(false);

  let getVoiture = () => {
    api.get('/automobile')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setVoiture(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {
    getVoiture();
    setDomLoaded(true);
  }, []);

  return (
    <div>
      <Menu />
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <CustomModal hasCloseButton={true} isOpen={isOpen}>
        </CustomModal> */}
        <CustomModal
          open={openAddVoitureModal}
          onClose={() => setOpenAddVoitureModal(false)}
          title="Ajouter un avis"
          body={<VoitureForm />}
          size="medium"
          // icon={faCircleExclamation}
          button1Text="Fermer"
          button2Text="Sauvegarder"
          onButtonClick={() => setOpenAddVoitureModal(false)}
        />
        {domLoaded && user && user.is_staff ? 
          <Button onClick={() => setOpenAddVoitureModal(true)}>Ajouter une voiture</Button>
        : null}

        {voiture.map((item, idx) => (
          <Voiture key={idx} id={item.id} nom_du_model={item.nom_du_model} prix={item.prix} kilometre={item.kilometre}></Voiture>
        )
        )}
      </div>
      <Footer />
    </div>
  
  );
}
