
import {makeStyles} from "@material-ui/core/styles";
const classes = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor:theme.palette.secondary.main,
    },
    button: {
      '&&': {
        marginRight: theme.spacing(2),
        backgroundColor:theme.palette.secondary.main,
        maxWidth:'280px',
        display:'flex',
        justifyContent:'center',
        margin: '0 auto',
        borderRadius: '30px',
        padding: '21px 16px',
        color: 'white',
        '&:hover': {
          background: '#FFFFFF',
          border:`1px solid ${theme.palette.secondary.main}`,
          color:theme.palette.secondary.main,
      },
      
      }, 

    },

    checkbox:{
        color:theme.palette.secondary.main, 
    },
    title: {
      flexGrow: 1
    },
    paper: {
      marginTop: "1rem",
      padding: "1rem"
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    form:{
      '&&': {
        width: '100%',
        maxWidth: '380px',
      }
 
    }
  }));

  

  export default classes;