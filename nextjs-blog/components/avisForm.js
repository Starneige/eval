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

export default function AvisForm({ id = null, nom = "", prenom = "", commentaire = "", note = 5, approuve = false }) {

  const [domLoaded, setDomLoaded] = React.useState(false);
  const user = getUser();

  const schema = yup
  .object({
    nom: yup.string().required(),
    prenom: yup.string().required(),
    commentaire: yup.string().required(),
    note: yup.number().positive().integer().required(),
    // approuve: yup.boolean(),
  })
  .required()

  React.useEffect(() => {
    setDomLoaded(true);
  }, [])

  const defaultValues = {
    nom: nom,
    prenom: prenom,
    commentaire: commentaire,
    note: note,
    approuve: approuve,
  };
  
  const { register, handleSubmit, reset, control, setValue, formState: { errors } } = useForm({defaultValues: defaultValues, resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    if (id != null) {
      api.put(`/avis/${id}/`, data)
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
      api.post('/avis/', data)
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
          label="Prenom"
          error={errors.prenom}
          helperText={errors.prenom?.message}
          {...register("prenom")}
      />
      <TextField
          label="Commentaire"
          error={errors.commentaire}
          helperText={errors.commentaire?.message}
          {...register("commentaire")}
      />
      <TextField
          label="Note"
          error={errors.note}
          helperText={errors.note?.message}
          {...register("note")}
      />
      {domLoaded && user && user.is_staff ? 
        <>
          <FormControlLabel
            control={
              <Controller
                name="approuve"
                control={control}
                render={({ field }) => <Checkbox defaultChecked={approuve} {...field} />}
              />
            }
            label="Approuvé"
          />
          {errors?.approuve && (
            <p
              style={{ color: "red" }}
            >{`Error: ${errors?.approuve?.message}`}</p>
          )}
        </>
        : null}
        {/* <Checkbox formApprouve control={control} /> */}
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