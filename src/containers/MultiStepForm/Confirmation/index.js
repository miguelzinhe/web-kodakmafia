import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const Confirmation = ({ nextStep, prevStep, handleChange, values }) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <form>
      <>
        <Typography variant="h6" gutterBottom>
          Confirmacao 
        </Typography>
        <Grid container spacing={3}>
          oiii
        </Grid>
      </>
      <>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
            sx={{ mt: 3, ml: 1 }}
            onClick={ Previous }>
            Anterior
          </Button>
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

export default Confirmation