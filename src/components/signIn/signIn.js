import  React ,{ useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@mui/material/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
 import CustomField from '../input/InputField'
 import CustomPassword from '../inputPassword/inputPassword'

// import style from './form-style'
import googlePlus from "../../image/icons/googlePlus.svg"
import facebook from "../../image/icons/facebook.svg"
import Icon from '@material-ui/core/Icon';


import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';



import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as yup from "yup";




const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("This field is required."),
  password: yup
    .string()
    .min(6, "Password is too short.")
    .max(20, "Password is too long.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("This field is required.")
});





const style = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:theme.palette.secondary.main,
  },
  title: {
    '&&': {
    flexGrow: 1,
    color:theme.palette.secondary.main,
    fontFamily:theme.typography.h2,
    fontSize:theme.typography.h2.fontSize,
    fontWeight:theme.typography.h2.fontWeight,
    }
  },
 text: {
  '&&': {
    flexGrow: 1,
    color:'#949494',
    }
  },
  paper: {
    marginTop: "1rem",
    padding: "1rem"
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
  button: {
    '&&': {
     height:'65px',
    }, 
  },
  form:{
    '&&': {
      width: '100%',
      maxWidth: '380px',
          // padding:0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
        // padding: theme.spacing(2),
        margin: {
          // margin: theme.spacing(1)
        },  '& .MuiTextField-root': {
          margin: theme.spacing(1),
      
        },
        '& .MuiButtonBase-root': {
      
        },
    },
  },
  icon :{
    color:'#949494',
 }
}));



const SignIn = () => {
  const classes = style()
 
  const initialValues = {
    email: "",
    password: "",
};


  function onSubmit(values) {

 debugger
    console.log(values)
     console.log('submit')
  }


  return (
<>
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop:'280px'
            }}
          >
            <Typography className={classes.title} component="h1" variant="h2">
            Sign in to Rylex
            </Typography>

            <Link
            variant="body2"
              >
          <div className={classes.imgCont}>
            <img src={facebook} className={classes.iconImg} alt="facebook" />
            <img src={googlePlus} className={classes.iconImg} alt="google"/>
          </div>
           </Link>
    
            <Typography className={classes.text} component="h2" >
            or use your email account
            </Typography>

            <Box className={classes.form}  sx={{ 
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
             }}>
            <Formik initialValues={initialValues} 
                  validationSchema={signInSchema} 
                  onSubmit={onSubmit}
                  enableReinitialize>
          {({values, setFieldValue, handleChange, handleSubmit,  errors, touched, enableReinitialize}) => 

          (
            <Form  onSubmit={handleSubmit} enableReinitialize={enableReinitialize}>
                      <Field  
                      value={values.email}
                      error={errors.email && touched.email}
                      fullWidth
                      onChange={handleChange}
                      id="email"
                      label="Email Address"
                      name="email"
                      placeholder="Email Address"
                      type="text"
                      autoComplete="email"
                      autoFocus
                      inputIcon={<EmailOutlinedIcon  className={classes.icon} />}
                      helperText={
                        errors.email && touched.email ? errors.email : null
                      }
                      component={CustomField}
                      />
                      <Field 
                      value={values.password}
                      error={errors.password && touched.password}
                      fullWidth
                      onChange={handleChange}
                      name="password"
                      label="Password"
                      id="password"
                      placeholder="password"
                      autoComplete="current-password"
                      inputIcon={<LockOutlinedIcon  className={classes.icon} />}
                      helperText={
                       errors.password && touched.password
                         ? errors.password
                         : null
                     }
                      component={CustomPassword}
                      />    
              <Button 
              className={classes.button}
                type="submit"
                fullWidth
                // variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>   
            </Form>
          )}
        </Formik>
            </Box>
          </Box>
        </Grid>
      </>
  );
};
export default SignIn;