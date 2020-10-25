import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import * as PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30% 10%',
  },
  colorArea: {
    backgroundColor: 'rgb(48,70,87)',
    height: '12vw',
    marginBottom: '3vw',
    position: 'relative',
  },
  name: {
    position: 'absolute',
    left: '2vmin',
    bottom: '2vmin',
    fontSize: '4vmin',
    color: 'white',
  },
  profile: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    maxWidth: '25%',
    maxHeight: '100%',
    height: '100%',
    width: '25%',
    boxShadow: theme.shadows[3],
  },
  cardContent: {
    backgroundColor: 'white',
  },
  halfWidth: {
    width: '50%',
  },
  secondLinePadding: {
    paddingLeft: '6rem',
  },
}))

const HCardPreview = (props) => {
  const classes = useStyles()
  const { hCardState } = props
  const {
    givenName,
    surName,
    houseName,
    suburb,
    street,
    state,
    profile,
  } = hCardState
  const [addressFirstLine, setAddressFirstLine] = useState('')
  const [addressSecondLine, setAddressSecondLine] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [profileImg, setProfileImg] = useState('')

  useEffect(() => {
    if (
      houseName.length > 0 &&
      suburb.length > 0 &&
      street.length > 0 &&
      state.length > 0
    ) {
      const addrFirstLine = `${houseName} ${street} `
      const addrSecondLine = `${suburb}, ${state}`

      setAddressFirstLine(addrFirstLine)
      setAddressSecondLine(addrSecondLine)
    } else {
      setAddressFirstLine('')
      setAddressSecondLine('')
    }
  }, [houseName, suburb, street, state])

  useEffect(() => {
    if (profile === '') {
      setProfileImg(require('../assets/profile.jpg'))
    } else {
      setProfileImg(profile)
    }
  }, [profile])

  useEffect(() => {
    if (givenName !== '' && surName !== '') {
      setDisplayName(`${givenName} ${surName}`)
    } else {
      setDisplayName('')
    }
  }, [givenName, surName])

  return (
    <Card className={classes.root}>
      <div className={classes.colorArea}>
        <Typography variant="h2" className={classes.name}>
          {displayName}
        </Typography>
        <img className={classes.profile} src={profileImg} alt="profile" />
      </div>
      <CardContent className={classes.cardContent}>
        <TextField
          fullWidth
          value={hCardState.email}
          InputProps={{
            startAdornment: (
              <Box mr={5}>
                <InputAdornment position="start">
                  <span>EMAIL</span>
                </InputAdornment>
              </Box>
            ),
          }}
        />
        <TextField
          fullWidth
          value={hCardState.phone}
          InputProps={{
            startAdornment: (
              <Box mr={4}>
                <InputAdornment position="start">
                  <span>PHONE</span>
                </InputAdornment>
              </Box>
            ),
          }}
        />
        <TextField
          fullWidth
          value={addressFirstLine}
          InputProps={{
            startAdornment: (
              <Box mr={1.5}>
                <InputAdornment position="start">
                  <span>ADDRESS</span>
                </InputAdornment>
              </Box>
            ),
          }}
        />
        <TextField
          value={addressSecondLine}
          fullWidth
          InputProps={{
            className: classes.secondLinePadding,
          }}
        />
        <TextField
          className={classes.halfWidth}
          value={hCardState.postcode}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <span>POSTCODE</span>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={classes.halfWidth}
          value={hCardState.country}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <span>COUNTRY</span>
              </InputAdornment>
            ),
          }}
        />
      </CardContent>
    </Card>
  )
}

HCardPreview.propTypes = {
  hCardState: PropTypes.shape({
    givenName: PropTypes.string.isRequired,
    surName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    houseName: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suburb: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
  }),
}

HCardPreview.defaultProps = {
  hCardState: {
    givenName: '',
    surName: '',
    email: '',
    phone: '',
    houseName: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    country: '',
    profile: '',
  },
}

export default HCardPreview
