import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import { InputErrorMsg } from '../const.ts'
import UploadAvatarButton from './UploadAvatarButton'
import CreateHCardButton from './CreateHCardButton'
import BasicInput from './BasicInput'
import BasicDivider from './BasicDivider'

const useStyles = makeStyles(() => ({
  form: {
    marginLeft: '10%',
  },
  builderText: {
    color: 'rgb(48, 70, 87)',
  },
}))

const HCardBuilder = (props) => {
  const classes = useStyles()
  const { dispatch } = props
  return (
    <form className={classes.form}>
      <h1 className={classes.builderText}>hCard Builder</h1>
      <BasicDivider desc="PERSONAL DETAILS" />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <BasicInput
            title="GIVEN NAME"
            type="givenName"
            dispatch={dispatch}
            errorHelperText={InputErrorMsg.NAME_ERROR}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BasicInput
            title="SURNAME"
            type="surName"
            dispatch={dispatch}
            errorHelperText={InputErrorMsg.NAME_ERROR}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <BasicInput
            title="EMAIL"
            type="email"
            dispatch={dispatch}
            errorHelperText={InputErrorMsg.EMAIL_ERROR}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BasicInput
            title="PHONE"
            type="phone"
            dispatch={dispatch}
            errorHelperText={InputErrorMsg.PHONE_ERROR}
          />
        </Grid>
      </Grid>
      <BasicDivider desc="ADDRESS" />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <BasicInput
            title="HOUSE NAME OR #"
            type="houseName"
            dispatch={dispatch}
            errorHelperText={InputErrorMsg.HOUSENAME_ERROR}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BasicInput
            title="STREET"
            type="street"
            dispatch={dispatch}
            errorHelperText={InputErrorMsg.STREET_ERROR}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <BasicInput
            title="SUBURB"
            type="suburb"
            dispatch={dispatch}
            errorHelperText={InputErrorMsg.SUBURB_ERROR}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BasicInput
            title="STATE"
            type="state"
            dispatch={dispatch}
            errorHelperText={InputErrorMsg.STATE_ERROR}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <BasicInput
            title="POSTCODE"
            type="postcode"
            dispatch={dispatch}
            errorHelperText={InputErrorMsg.POSTCODE_ERROR}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BasicInput
            title="COUNTRY"
            type="country"
            dispatch={dispatch}
            errorHelperText={InputErrorMsg.COUNTRY_ERROR}
          />
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <UploadAvatarButton dispatch={dispatch} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CreateHCardButton />
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

HCardBuilder.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default HCardBuilder
