import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    logo:{
      display: 'flex',
      float: 'left',
      '@media (max-width: 768px)':{
        float: 'none',
        alignItems: 'center',
        justifyContent: 'center'
    }
    },
    logoImage:{
      height: '70px',
      width: '147px',
      paddingTop: '20px',
      paddingLeft: '10px'
    },
    '@media (max-width: 768px)':{
      transition: '1s'
    }
  })