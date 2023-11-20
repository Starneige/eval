import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Controller, useForm } from "react-hook-form";
import { Button, ButtonGroup } from '@mui/material';
import api, { setToken, setUser } from '../api';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export default function ContactForm({ id = null, email= "", nom = "", prenom = "", telephone = "", message = ""}) {

  const schema = yup
  .object({
    email: yup.string().required(),
    nom: yup.string().required(),
    prenom: yup.string().required(),
    telephone: yup.string().required(),
    message: yup.string().required(),
  })
  .required()

  const defaultValues = {
    email: email,
    nom: nom,
    prenom: prenom,
    telephone: telephone,
    message: message,
  };
  
  const { register, handleSubmit, reset, control, setValue, formState: { errors } } = useForm({defaultValues: defaultValues, resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    if (id != null) {
      api.put(`/contact/${id}/`, data)
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
      api.post('/contact/', data)
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
          label="Email"
          error={errors.email}
          helperText={errors.email?.message}
          {...register("email")}
      />
      <br />
      <TextField
          label="Nom"
          error={errors.nom}
          helperText={errors.nom?.message}
          {...register("nom")}
      />
      <br />
      <TextField
          label="Prenom"
          error={errors.prenom}
          helperText={errors.prenom?.message}
          {...register("prenom")}
      />
      <br />
      <TextField
          label="Téléphone"
          error={errors.telephone}
          helperText={errors.telephone?.message}
          {...register("telephone")}
      />
      <br />
      <TextField
          label="Message"
          error={errors.message}
          helperText={errors.message?.message}
          {...register("message")}
      />
      <br />
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        {/* <Button onClick={reset()}>Remettre à zéro</Button> */}
        <Button type='submit'>Sauvegarder</Button>
      </ButtonGroup>
    </form>
  );
}