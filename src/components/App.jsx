import React, { useReducer } from 'react'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'
import HCardBuilder from './HCardBuilder'
import HCardPreview from './HCardPreview'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
  previewRoot: {
    backgroundColor: 'rgb(227, 230, 233)',
  },
}))

const initialState = {
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
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'givenName':
      return { ...state, givenName: action.value }
    case 'surName':
      return { ...state, surName: action.value }
    case 'email':
      return { ...state, email: action.value }
    case 'phone':
      return { ...state, phone: action.value }
    case 'houseName':
      return { ...state, houseName: action.value }
    case 'street':
      return { ...state, street: action.value }
    case 'suburb':
      return { ...state, suburb: action.value }
    case 'state':
      return { ...state, state: action.value }
    case 'postcode':
      return { ...state, postcode: action.value }
    case 'country':
      return { ...state, country: action.value }
    case 'profile_uploaded':
      return { ...state, profile: action.value }
    default:
      return { ...state }
  }
}

const App = () => {
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Grid className={classes.root} container space={5}>
      <Grid item sm={6}>
        <HCardBuilder dispatch={dispatch} />
      </Grid>
      <Grid item sm={6} className={classes.previewRoot}>
        <HCardPreview hCardState={state} />
      </Grid>
    </Grid>
  )
}

export default App
