import { makeStyles } from '@material-ui/core/styles'

export const styles = makeStyles({
    app:{
        fontSize: '15px',
        fontWeight: 500,
        fontFamily: 'Mulish, Helvetica, sans-serif',
        display: 'grid',
        marginTop: '35px',
        gridTemplateColumns: '20% 65% 15%',
        '@media (max-width: 768px)':{
            gridTemplateColumns: '100%',
            transition: '1s'
        }
    }
})