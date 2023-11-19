import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useForm } from "react-hook-form";
import { Button, ButtonGroup } from '@mui/material';
import api, { setToken, setUser } from '../api';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export default function ConnexionForm({ email = "", password = "" }) {
  const [isAdmin, setisAdmin] = useState(true);
  const [isEmployee, setisEmployee] = useState(false);

  const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

  const defaultValues = {
    email: email,
    password: password,
  };
  
  const { register, handleSubmit, reset, control, setValue, formState: { errors } } = useForm({defaultValues: defaultValues, resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    api.post('/token/obtain/', data)
      .then(function (response) {
        // handle success
        console.log(response.data);
        // setAvis(response.data);
        setToken(response.data);
        api.get('/me/', {headers: {Authorization: `Bearer ${response.data.access}`}})
          .then(function (response) {
            // handle success
            console.log(response.data);
            // setAvis(response.data);
            setUser(response.data);
            location.reload();
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
          label="Email"
          error={errors.email}
          helperText={errors.email?.message}
          {...register("email")}
      />
      <TextField
          label="Password"
          error={errors.password}
          helperText={errors.password?.message}
          {...register("password")}
      />
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