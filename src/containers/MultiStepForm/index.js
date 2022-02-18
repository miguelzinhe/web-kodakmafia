import React, { Component } from 'react'

import PersonalDetails from './PersonalDetails'
import FilmDetails from './FilmDetails'
import Confirmation from './Confirmation'
import Success from './Success'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

export default class MultiStepForm extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    cellphone: '',
    instagram: '',
    filmName: '',
    digitalizationType: '',
    fileFormat: '',
    observation: '',
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({ step: step - 1 })
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({ step: step + 1 })
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }

  render() {
    const { step } = this.state
    const { name, email, cellphone, instagram, filmName, digitalizationType, fileFormat, observation } = this.state
    const values = { name, email, cellphone, instagram, filmName, digitalizationType, fileFormat, observation }
    const steps = ['Dados pessoais', 'Detalhes do Filme', 'Confirmacão'];

    const stepContainer = (step) => {
      switch (step) {
        case 1:
          return (
            <PersonalDetails 
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            />
          )
        case 2:
          return (
            <FilmDetails 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            />
          )
        case 3:
          return (
            <Confirmation 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )
        case 4:
          return (
            <Success />
          )
        default:
          throw new Error('Unknown step');
      }
    }

    return (
      <>
        <Stepper activeStep={step} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {stepContainer(step)}
      </>
    )
  }
}