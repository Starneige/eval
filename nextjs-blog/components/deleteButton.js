import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function DeleteButton() {
  return (
    <MDBBtn floating tag='a'>
      Supprimer
      {/* <MDBIcon fas icon='delete' /> */}
    </MDBBtn>
  );
}