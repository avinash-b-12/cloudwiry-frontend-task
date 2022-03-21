import React from 'react'
import {useStyles} from './LogoStyle'

export default function Logo() {
  const classes = useStyles()
  return (
    <div className={classes.logo}>
        <img src='images/jiraLogo.png' alt='' className={classes.logoImage}/>
    </div>
  )
}
