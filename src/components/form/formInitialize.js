
import {React,useState, useEffect,} from 'react'
import SignUp from "../signUp/signUp";
import SignIn from "../signIn/signIn";
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "../sidebar/sidebar"



const Form = () => {
    const [initForm, setinitForm] = useState('');
//   const [mode, toggleMode] = useToggle(initialState);
console.log(`${initForm} 'init'`) 
  return (
    <Grid container component="main" sx={{ height:'100vh'}}>
        {/* <CssBaseline /> */}
    <Sidebar setinitForm={setinitForm}/>
    {initForm
        ?  <SignUp/>
        :  <SignIn/>
      }
    </Grid>
  );
};

export default Form;
