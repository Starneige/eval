import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import Service from '../../components/service';
import { useEffect, useState } from 'react';
import api, { getUser } from '../../api';
import CustomModal from '../../components/modal';
import ServiceForm from '../../components/serviceForm';
import { Button } from '@mui/material';

export default function Services() {
  const [openAddServiceModal, setOpenAddServiceModal] = useState(false);
  const user = getUser();
  let [service, setService] = useState([])
  const [domLoaded, setDomLoaded] = useState(false);

  let getService = () => {
    api.get('/service')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setService(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {
    getService();
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
        <CustomModal
          open={openAddServiceModal}
          onClose={() => setOpenAddServiceModal(false)}
          title="Ajouter un service"
          body={<ServiceForm />}
          size="medium"
          // icon={faCircleExclamation}
          button1Text="Fermer"
          button2Text="Sauvegarder"
          onButtonClick={() => setOpenAddServiceModal(false)}
        />
        {domLoaded && user && user.is_staff ? 
          <Button onClick={() => setOpenAddServiceModal(true)}>Ajouter un service</Button>
        : null}

        {service.map((item, idx) => (
          <Service key={idx} id={item.id} nom={item.nom} prix={item.prix}></Service>
        )
        )}
      </div>
      <Footer />
    </div>
  
  );
}
