import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useForm, Controller } from "react-hook-form";
import { Button, ButtonGroup } from '@mui/material';
import api, { getUser } from '../api';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export default function ServiceForm({ id = null, nom = "", prix = 0}) {

  const [domLoaded, setDomLoaded] = React.useState(false);
  const user = getUser();

  const schema = yup
  .object({
    nom: yup.string().required(),
    prix: yup.number().positive().integer().required(),
  })
  .required()

  React.useEffect(() => {
    setDomLoaded(true);
  }, [])

  const defaultValues = {
    nom: nom,
    prix: prix,
  };
  
  const { register, handleSubmit, reset, control, setValue, formState: { errors } } = useForm({defaultValues: defaultValues, resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    if (id != null) {
      api.put(`/service/${id}/`, data)
        .then(function (response) {
          // handle success
          console.log(response.data);
          // setAvis(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    } else {
      api.post('/service/', data)
        .then(function (response) {
          // handle success
          console.log(response.data);
          // setAvis(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
          label="Nom"
          error={errors.nom}
          helperText={errors.nom?.message}
          {...register("nom")}
      />
      <TextField
          label="Prix"
          error={errors.prix}
          helperText={errors.prix?.message}
          {...register("prix")}
      />
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button type='submit'>Sauvegarder</Button>
      </ButtonGroup>
    </form>
  );
}