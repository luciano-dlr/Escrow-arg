import { Box, Button, TextField } from "@mui/material";
import emailjs, { init } from 'emailjs-com';
import { useState } from "react";

init("Ua-9fkAd8r4x5hMDa");

export const Form = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const sendEmail = (e: any) => {
    e.preventDefault();


    if (!name || !email || !notes) {
      alert('Por favor, complete todos los campos para enviar consultas.'); // Puedes mostrar un mensaje de alerta o tomar otra acción aquí
      return;
    }

    // Parámetros de plantilla
    const templateParams = {
      name: name,
      from_name: email,
      notes: notes,
    };

    // email Js

    emailjs.send('service_ygnxxa9', 'template_klet5u3', templateParams)
      .then(function (response: any) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error: any) {
        console.log('FAILED...', error);
      });

    setName('');
    setEmail('');
    setNotes('');
  };


  return (
    <Box
      component="form"
      onSubmit={sendEmail}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        width: 500,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic-name"
        label="Nombre"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        id="outlined-basic-email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />



      <TextField
        id="outlined-multiline-static"
        label="Cuentanos de tu empresa"
        multiline
        rows={4}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <Button type="submit" variant="outlined">Enviar</Button>
    </Box>
  );

}
