import {React,useState, useEffect,} from 'react'
import Grid from '@mui/material/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button';
import { handleBreakpoints } from '@mui/system';
import Decorator from '../decorator/decorator'

const Sidebar = ({flag, setinitForm }) => {
  const [form, setForm] = useState(true);
  // const { setinitForm } = props;

  const isSign = 'LOG_IN';
    const isSignUp = 'SIGN_UP';

const handleChange=(event)=>{
  setForm(!form)
  setinitForm(form, 'hello!');

console.log(form)
}


  // function onSubmit( values, { setStatus, setSubmitting }) {
  //   setStatus();
  //   if (isAddMode) {
  //     createFormProduct(values, setSubmitting);
  //   } else {
  //     updateFormProduct(id, values, setSubmitting);
  //   }
  // }

  const style = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      background:'linear-gradient(to right, #1CA694 0%, 37.443944811820984%, #15AC88 74.88788962364197%, 87.44394481182098%, #30B78D 100%);  /* Gradient in RGBA */ linear-gradient(to right, rgba(28, 166, 148, 1) 0%, 37.443944811820984%, rgba(21, 172, 136, 1) 74.88788962364197%, 87.44394481182098%, rgba(48, 183, 141, 1) 100%);',
      position:'relative'
      
    },
    button: {
      '&&': {
        height: '65px',
        border:'1px solid white',

      }, 
    },
    form:{
      '&&': {
        width: '100%',
        maxWidth: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          
      },
    },
    checkbox:{
      '&&': {
        color: "#1AAA8D",
        "&&:hover": {
          color: "#1AAA8D"
        },
        "&&$checked": {
          color: "#1AAA8D",
          "&&:hover": {
            color: "#1AAA8D"
          },
          "&&.Mui-focusVisible": {
            color: "#1AAA8D"
          },
      },
      checked: {}
    }
  },
  title: {
      '&&': {
      flexGrow: 1,
      color:'white',
      fontFamily:theme.typography.fontFamily,
      fontSize:theme.typography.h2.fontSize,
      fontWeight:theme.typography.h2.fontWeight,
      }
    },
   text: {
    '&&': {
      flexGrow: 1,
      color:'white',
      fontSize:theme.typography.text.fontSize,
    }
    },
    paragraph:{
      color:'white',
      fontSize:'25px',
    },
    paper: {
      marginTop: "1rem",
      padding: "1rem"
    },
    box:{
    display:'flex',
    flexDirection:'column',
     justifyContent:'center',
     marginTop:'0',
     marginBottom:'0',
    },
    imgCont:{
     display:'flex',
     height:'auto',
     padding: '45px 0',
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    iconImg:{
      display:'flex',
      height:'20px',
      width:'auto',
      marginRight:'30px',
      '&:nth-last-of-type(1)': {
        marginRight:'0',
      },

    },

    icon :{
      color:'#949494',
   }
  }));


    const classes = style()
  


  return (
<>   
     
<Grid  
  item 
  className={classes.root}
  xs={false}
  sm={4}
  md={5}
  >
<Decorator/>  
<Box
className={classes.box}
  sx={{
  my: 8,
  mx: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent:'center',
  transform: 'translate(0, 100%)' 
}}
>
  <h2 className={classes.title} component="h2" variant="subtitle">
    {form === true ? 'Hello, Friend!' : 'Welcome Back!'}  
  </h2>
  
  <Typography className={classes.text} component="subtitle" variant="body2">
    {form === true ? 'Enter your personal details and start journey with us!' :  'To keep connected with us please login with your personal info'}  
   
  </Typography>


  <Button 
              className={classes.button}
                type="submit"
                fullWidth
                // variant="contained"
                onClick={() => handleChange()}>
                  {form === true ? 'Sign Up!' : 'Sign In!'}  
                
    </Button>  
  
</Box>
</Grid>

</>
  );
};
export default Sidebar ;