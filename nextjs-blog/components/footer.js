import React, { useEffect, useState } from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import api, { getUser } from '../api';
import { Button } from '@mui/material';
import Horaire from './horaire';
import CustomModal from './modal';
import ContactForm from './contactForm';

  
export default function App() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [horaires, setHoraires] = useState([]);
  const [openAddContactModal, setOpenAddContactModal] = useState(false);
  const user = getUser();

  const getHoraires = () => {
    api.get('/horaire')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setHoraires(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {
    setDomLoaded(true);
    getHoraires();
  }, []);

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <section style={{'padding-top': "10px"}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Horaires
              </h6>
              <ul>
                {horaires.map((item, idx) => (
                  <Horaire key={idx} id={item.id} jour={item.jour} ferme={item.ferme} heure_ouverture_matin={item.heure_ouverture_matin} heure_fermeture_matin={item.heure_fermeture_matin} heure_ouverture_apresm={item.heure_ouverture_apresm} heure_fermeture_apresm={item.heure_fermeture_apresm} />
                )
                )}
              </ul>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>

              <Button variant="contained" onClick={() => setOpenAddContactModal(true)}>Se faire contacter</Button>
              <CustomModal
                open={openAddContactModal}
                onClose={() => setOpenAddContactModal(false)}
                title="Demande de contact"
                body={<ContactForm />}
                size="medium"
                // icon={faCircleExclamation}
                button1Text="Fermer"
                button2Text="Sauvegarder"
                onButtonClick={() => setOpenAddContactModal(false)}
              />
              <p>
                <MDBIcon icon="home" className="me-2" />
                Garage V. Parrot
              </p>
              <p>
                <MDBIcon icon="home" className="me-2" />
                10 rue de la gare, 75000 Paris, France
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                garagev.parrot@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +33 1 23 45 67 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}