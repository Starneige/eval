import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Menu from '../components/menu';
import Footer from '../components/footer';
import Avis from '../components/avis';
import api, { getUser } from '../api/';
import { useEffect, useState } from 'react';
import CustomModal from '../components/modal';
import AvisForm from '../components/avisForm';
import { Button } from '@mui/material';

export default function Home() {
  const [openAddAvisModal, setOpenAddAvisModal] = useState(false);
  const user = getUser();
  let [avis, setAvis] = useState([])

  let getAvis = () => {
    api.get('/avis')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setAvis(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {
    getAvis();
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
          open={openAddAvisModal}
          onClose={() => setOpenAddAvisModal(false)}
          title="Ajouter un avis"
          body={<AvisForm />}
          size="medium"
          // icon={faCircleExclamation}
          button1Text="Fermer"
          button2Text="Sauvegarder"
          onButtonClick={() => setOpenAddAvisModal(false)}
        />
        <Button onClick={() => setOpenAddAvisModal(true)}>Ajouter un avis</Button>

        {avis.map((item, idx) => {
          if(user){
            return (<Avis key={idx} id={item.id} nom={item.nom} prenom={item.prenom} commentaire={item.commentaire} note={item.note} date={item.date} approuve={item.approuve}></Avis>)
          } else {
            if (item.approuve) {
              return (<Avis key={idx} id={item.id} nom={item.nom} prenom={item.prenom} commentaire={item.commentaire} note={item.note} date={item.date} approuve={item.approuve}></Avis>)
            }
          }
          return null;
        }
        )}
      </div>
      <Footer />
    </div>
    

  );
}
