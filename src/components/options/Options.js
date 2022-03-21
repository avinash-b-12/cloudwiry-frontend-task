import React from 'react'
import {useStyles} from './OptionsStyle'
import {options} from './OptionsList'

export default function Options() {
  const classes = useStyles()
  return (
    <div className={classes.optionsList}>
        {options.map(item=><a href='#'>{item}</a>)}
    </div>
  )
}
