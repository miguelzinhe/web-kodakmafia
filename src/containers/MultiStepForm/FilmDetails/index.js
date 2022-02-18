import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const FilmDetails = ({ nextStep, prevStep, handleChange, values }) => {
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
          Detalhes do Filme
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="filmName"
              name="filmName"
              label="Nome do Filme"
              fullWidth
              variant="standard"
              onChange={handleChange('filmName')}
              defaultValue={values.filmName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="digitalizationType"
              name="digitalizationType"
              label="Tipo de Digitalizacão"
              fullWidth
              variant="standard"
              onChange={handleChange('digitalizationType')}
              defaultValue={values.digitalizationType}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="fileFormat"
              name="fileFormat"
              label="Formato do Arquivo"
              fullWidth
              variant="standard"
              onChange={handleChange('fileFormat')}
              defaultValue={values.fileFormat}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="observation"
              name="observation"
              label="Observações (Vencido, SOPADO, Possui REMJET, PUXADO):"
              fullWidth
              variant="standard"
              onChange={handleChange('observation')}
              defaultValue={values.observation}
            />
          </Grid>
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

export default FilmDetails