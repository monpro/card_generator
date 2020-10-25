import React from 'react'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: 'rgb(103, 131, 145)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(103, 131, 145, .7)',
    },
    height: '3rem',
    width: '80%',
    fontSize: '1rem',
  },
}))

const UploadAvatarButton = (props) => {
  const { dispatch } = props
  const captureImage = ({ target }) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(target.files[0])
    fileReader.onload = (e) => {
      dispatch({ type: 'profile_uploaded', value: e.target.result })
    }
    fileReader.onerror = () => {
      // this is just s simulation of onerror issue
      // it will not use alert in production
      alert('photo upload error!')
    }
    fileReader.onabort = () => {
      // this is just s simulation of abort issue
      // it will not use alert in production
      alert('photo upload abort')
    }
  }

  const classes = useStyles()
  return (
    <>
      <label htmlFor="upload-avatar-file">
        <input
          accept="image/*"
          hidden
          id="upload-avatar-file"
          type="file"
          onChange={captureImage}
        />
        <Button component="span" className={classes.button}>
          Upload Avatar
        </Button>
      </label>
    </>
  )
}

UploadAvatarButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
}
export default UploadAvatarButton
