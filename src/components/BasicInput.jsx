import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField/TextField'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {
  emailValidation,
  houseNameValidation,
  phoneValidation,
  postcodeValidation,
  stringValidation,
} from '../helper/validation.ts'

const useStyles = makeStyles(() => ({
  input: {
    width: '80%',
  },
}))

const BasicInput = (props) => {
  const { title, type, errorHelperText, dispatch } = props

  const [errorText, setErrorText] = useState('')

  const classes = useStyles()
  const onTextInputChange = (textValue) => {
    let error = ''
    if (type === 'email') {
      error = emailValidation(textValue, errorHelperText)
    } else if (type === 'phone') {
      error = phoneValidation(textValue, errorHelperText)
    } else if (type === 'postcode') {
      error = postcodeValidation(textValue, errorHelperText)
    } else if (type === 'houseName') {
      error = houseNameValidation(textValue, errorHelperText)
    } else {
      error = stringValidation(textValue, errorHelperText)
    }
    setErrorText(error)
    if (error === '') {
      dispatch({ type, value: textValue })
    } else {
      dispatch({ type, value: '' })
    }
  }

  return (
    <>
      <Typography variant="subtitle2" gutterBottom>
        {title}
      </Typography>
      <TextField
        className={classes.input}
        error={errorText.length > 0}
        onChange={(e) => onTextInputChange(e.target.value)}
        variant="outlined"
        helperText={errorText}
      />
    </>
  )
}

BasicInput.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  errorHelperText: PropTypes.string.isRequired,
}

export default BasicInput
