import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Garage V. Parrot</Navbar.Brand>
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
          </Nav>
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

