import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function AddButton() {
  return (
    <MDBBtn floating tag='a'>
      Ajouter
      {/* <MDBIcon icon='add' /> */}
    </MDBBtn>
  );
}