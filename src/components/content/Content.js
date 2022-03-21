import React, { useState } from 'react'
// import './content.css'
import {CheckCircleRounded, Edit, InfoOutlined, Cancel} from '@material-ui/icons'
import {useStyles} from './ContentStyle'

export default function Content() {

  const [accountLink,setAccountLink] = useState(true)
  const [connection,setConnection] = useState(true)
  
  const classes = useStyles()

  const ConnectionSuccess = ()=>{
    return(
      <>
        <CheckCircleRounded className={classes.message} />
        <span className={classes.message}>Connected </span><span className={classes.texts}>- cloudwiry.atlassian.net</span>
        <div className={classes.editSymbol}>
          <Edit />
          <span>edit</span>
        </div>
      </>
    )
  }

  const ConnectionFailure = ()=>{
    return(
      <>
      <Cancel className={classes.failed}/>
      <span className={classes.failed}>Not Connected</span>
    </>
    )
  }

  const AccountLinked = ()=>{
    return(
      <>
        <CheckCircleRounded className={classes.message} />
        <span className={`${classes.message} ${classes.first}`}>Personal Account Linked</span>
        <div  className={classes.infoSymbol}>
          <InfoOutlined />
          <span className={classes.infoDisplay}>info</span>
        </div>
      </>
    )
  }
  const AccountNotLinked = ()=>{
    return(
      <>
        <Cancel className={classes.failed}/>
        <span className={classes.failed}>Personal Account not linked</span>
      </>
    )
  }

  return (
    <div className={classes.contentBody}>
      <p className={classes.jiraTitle}>Jira Cloud</p>
      <div className={classes.titleDescription}>
      <span>Create, assign and track tasks to execute Cloudwiry recommendations and right-sizing directly from Cloudwiry</span>
      </div>
      <div className={classes.connectionContainer}><div className={classes.connectionInfo}>
      <div className={classes.line}>
        {accountLink?<AccountLinked />:<AccountNotLinked />}
      </div>
      {!accountLink && <p className={classes.clickStatement}><a href='#' className={classes.link}>Click here</a> to link Jira account.</p>}
      {
      accountLink &&
      <>
      <p className={classes.clickStatement}><a href='#' className={classes.link}>Click here</a> to update the account linked to Jira.</p>
      
      <div className={classes.line}>
        {connection?<ConnectionSuccess />:<ConnectionFailure />}
      </div>
      </>
      }
      </div></div>
    </div>
  )
}
