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

export default function HoraireForm({ id, jour= "", ferme = false, heure_ouverture_matin = "", heure_fermeture_matin = "", heure_ouverture_apresm = "", heure_fermeture_apresm = ""}) {

  const schema = yup
  .object({
    jour: yup.string().required(),
    ferme: yup.string().required(),
    // heure_ouverture_matin: yup.string(),
    // heure_fermeture_matin: yup.string(),
    // heure_ouverture_apresm: yup.string(),
    // heure_fermeture_apresm: yup.string(),
  })
  .required()

  const defaultValues = {
    jour: jour,
    ferme: ferme,
    heure_ouverture_matin: heure_ouverture_matin,
    heure_fermeture_matin: heure_fermeture_matin,
    heure_ouverture_apresm: heure_ouverture_apresm,
    heure_fermeture_apresm: heure_fermeture_apresm,
  };
  
  const { register, handleSubmit, reset, control, setValue, formState: { errors } } = useForm({defaultValues: defaultValues, resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    if (id != null) {
      api.put(`/horaire/${id}/`, data)
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
      api.post('/horaire/', data)
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
          label="Jour"
          error={errors.jour}
          helperText={errors.jour?.message}
          {...register("jour")}
          disabled={true}
      />
      <br />
      <FormControlLabel
        control={
          <Controller
            name="ferme"
            control={control}
            render={({ field }) => <Checkbox defaultChecked={ferme} {...field} />}
          />
        }
        label="Fermé"
      />
      {errors?.approuve && (
        <p
          style={{ color: "red" }}
        >{`Error: ${errors?.approuve?.message}`}</p>
      )}
      <br />
      <TextField
          type='time'
          label="Heure d'ouverture matin"
          error={errors.heure_ouverture_matin}
          helperText={errors.heure_ouverture_matin?.message}
          {...register("heure_ouverture_matin")}
      />
      <br />
      <TextField
          type='time'
          label="Heure de fermeture matin"
          error={errors.heure_fermeture_matin}
          helperText={errors.heure_fermeture_matin?.message}
          {...register("heure_fermeture_matin")}
      />
      <br />
      <TextField
          type='time'
          label="Heure d'ouverture après-midi"
          error={errors.heure_ouverture_apresm}
          helperText={errors.heure_ouverture_apresm?.message}
          {...register("heure_ouverture_apresm")}
      />
      <br />
      <TextField
          type='time'
          label="Heure de fermeture après-midi"
          error={errors.heure_ouverture_apresm}
          helperText={errors.heure_ouverture_apresm?.message}
          {...register("heure_ouverture_apresm")}
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