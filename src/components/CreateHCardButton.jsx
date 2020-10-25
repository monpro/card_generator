import React from 'react'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: 'rgb(33, 161, 218)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(33, 161, 218, .7)',
    },
    height: '3rem',
    width: '80%',
    fontSize: '1rem',
  },
}))

const CreateHCardButton = () => {
  const classes = useStyles()
  return (
    <Button component="span" className={classes.button}>
      Create hCard
    </Button>
  )
}

export default CreateHCardButton
