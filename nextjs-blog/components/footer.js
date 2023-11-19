import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

  
export default function App() {
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
                <li>Lundi :    8:45 - 12:00  14:00 - 18:00 </li>
                <li>Mardi :    8:45 - 12:00  14:00 - 18:00 </li>
                <li>Mercedi :  8:45 - 12:00  14:00 - 18:00 </li>
                <li>Jeudi :    8:45 - 12:00  14:00 - 18:00 </li>
                <li>Vendredi : 8:45 - 12:00  14:00 - 18:00 </li>
                <li>Samedi :   8:45 - 12:00  14:00 - 18:00 </li>
                <li>Dimanche : Fermé </li>
              </ul>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
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