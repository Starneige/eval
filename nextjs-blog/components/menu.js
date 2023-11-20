import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import CustomModal from './modal';
import ConnexionForm from './connexionForm';
import { getUser, removeToken, removeUser } from '../api';
import InscriptionForm from './inscriptionForm';

export default function Menu() {
  const [openConnexionModal, setOpenConnexionModal] = React.useState(false);
  const [openInscriptionModal, setOpenInscriptionModal] = React.useState(false);
  const user = getUser();

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);


  return (
    <Navbar expand="lg" className=""  style={{"backgroundColor": "red"}}>
      <Container fluid>
        <Navbar.Brand href="/"><img src='/logo.png' width={"150px"} height={"150px"}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', backgroundColor : "rouge" }}
            navbarScroll
          >
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/vente">vente</Nav.Link>
            <Nav.Link href="/services">services</Nav.Link>
            {domLoaded && user ? <Nav.Link href="/contact">contact</Nav.Link> : null}
          </Nav>
          {domLoaded && !user ? <Button variant="outline-info" onClick={() => setOpenConnexionModal(true)}>Connexion</Button> : null}
          {domLoaded && user && user.is_superuser ? <Button variant="outline-success" onClick={() => setOpenInscriptionModal(true)}>Inscription</Button> : null}
          {domLoaded && user ? <Button variant="outline-success" onClick={() => {removeToken(); removeUser(); location.reload();}}>Deconnexion</Button> : null}
          <CustomModal
              open={openConnexionModal}
              onClose={() => setOpenConnexionModal(false)}
              title="Se connecter"
              body={<ConnexionForm />}
              size="medium"
              // icon={faCircleExclamation}
              button1Text="Fermer"
              button2Text="Sauvegarder"
              onButtonClick={() => setOpenConnexionModal(false)}
          />
          <CustomModal
              open={openInscriptionModal}
              onClose={() => setOpenInscriptionModal(false)}
              title="Créer un utilisateur"
              body={<InscriptionForm />}
              size="medium"
              // icon={faCircleExclamation}
              button1Text="Fermer"
              button2Text="Sauvegarder"
              onButtonClick={() => setOpenInscriptionModal(false)}
          />
          <Form className="d-flex">
            <Form.Control
              type="search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">recherche</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

