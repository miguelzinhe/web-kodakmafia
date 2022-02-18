import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const PersonalDetails = ({ nextStep, handleChange, values }) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <form>
      <>
        <Typography variant="h6" gutterBottom>
          Dados pessoais
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Nome"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={handleChange('name')}
              defaultValue={values.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="E-mail"
              fullWidth
              autoComplete="email"
              variant="standard"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="cellphone"
              name="cellphone"
              label="Celular"
              fullWidth
              autoComplete="cellphone"
              variant="standard"
              onChange={handleChange('cellphone')}
              defaultValue={values.cellphone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="instagram"
              name="instagram"
              label="Instagram"
              fullWidth
              autoComplete="instagram"
              variant="standard"
              onChange={handleChange('instagram')}
              defaultValue={values.instagram}
            />
          </Grid>
        </Grid>
      </>
      <>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
            onClick={ Continue }>
            Próximo
          </Button>
        </Box>
      </>
    </form>
  )
}

export default PersonalDetails