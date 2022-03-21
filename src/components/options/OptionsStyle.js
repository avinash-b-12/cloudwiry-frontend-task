import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    optionsList: {
        margin: '10px',
        fontWeight: 700,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& a': {
            color: 'black',
            '&:hover':{
                color: '#0000ee'
            }
        }
    },
    '@media (max-width: 768px)':{
        transition: '1s'
    }
})