import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    jiraTitle: {
        fontWeight: '700',
        marginBottom: '25px',
        '@media (max-width: 768px)':{
            marginLeft: '10px'
        }
    },
    titleDescription: {
        marginBottom: '30px',
        '@media (max-width: 768px)':{
            marginLeft: '10px'
        }
    },
    link: {
        color: '#459bd7',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    connectionContainer:{
        '@media (max-width: 768px)':{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    editSymbol: {
        color: '#459bd7',
        display : 'flex',
        alignItems: 'center',
        borderRadius: '10%',
        transition: '0.5s',
        '& span':{
            display: 'none'
        },
        '&:hover':{
            '& span':{
                display: 'block'
            },
            transition: '0.5s',
            borderRadius: '10%',
            backgroundColor: '#ddd',
            cursor: 'pointer'
        }
    },

    texts: {
        paddingRight: '8px'
    },
    
    first: {
        paddingRight: '110px'
    },
    clickStatement: {
        padding: '0px',
        marginTop: '7px',
        marginBottom: '20px'
    },
    
    infoSymbol: {
        display: 'flex',
        alignItems: 'center',
        color: '#7f7f7f',
        borderRadius: '10%',
        transition: '0.5s',
        '& span':{
            display: 'none'
        },
        '&:hover' :{
            '& span':{
                display: 'block'
            },
            cursor: 'pointer',
            backgroundColor: '#ddd',
            transition: '0.5s'
        }
    },
    message: {
        color: '#34cfa4',
        marginRight: '5px',
        justifyContent: 'center'
    },
    failed:{
        color: 'red',
        marginRight: '5px'
    },
    line: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px'
    },
    '@media (max-width: 768px)':{
        transition: '1s'
    }
  })