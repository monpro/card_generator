import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Divider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  divider: {
    margin: '10% 10% 5% 0',
  },
  dividerText: {
    color: 'rgb(185, 194, 197)',
  },
}))

const BasicDivider = (props) => {
  const { desc } = props
  const classes = useStyles()
  return (
    <div className={classes.divider}>
      <Typography variant="body1" className={classes.dividerText}>
        {desc}
      </Typography>
      <Divider />
    </div>
  )
}

BasicDivider.propTypes = {
  desc: PropTypes.string.isRequired,
}

export default BasicDivider
