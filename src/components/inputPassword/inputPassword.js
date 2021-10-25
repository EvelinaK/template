import React,{ useState} from 'react';

import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Icon from '@material-ui/core/Icon';
// import LockOutlinedIcon from '@material-ui/core/LockOutlined';
import Typography from '@material-ui/core/Typography';
 import {createTheme,ThemeProvider } from '@material-ui/core/styles';
 import {
    alpha,
    withStyles,
  } from "@material-ui/core/styles";
 import InputAdornment from "@material-ui/core/InputAdornment";
 import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
 import IconButton from '@material-ui/core/IconButton';
 import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
 import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

  const useStyles = makeStyles(theme => ({
  
      //   root: {
      //     '& .MuiTextField-root': {
          
      //       "& .Mui-focused $notchedOutline": {
      //         borderColor: theme.palette.primary.main,
  
      //       },
      //       '&$focused  .MuiIconButton-label': {
      //         color: theme.palette.primary.main
      //       }
      //     },
      
      // },
  }));

  



const CustomPassword = ({ name, placeholder,error=null,value, onChange, id ,inputIcon, helperText }) => {
    const classes = useStyles();

    const [values, setValues] = useState({
        password:value,
        showPassword: false,
      });

    const [isFocused, setIsFocused] = useState(true);


    const hadleFocus = () => {
        setIsFocused(false)
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


  return (
<>         
          <TextField
          className={classes.root}
        variant="outlined"
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        onFocus={hadleFocus}
        onBlur={()=>setIsFocused(true)}
        type={values.showPassword ? 'text' : 'password'}
        helperText={error && helperText}
        error={error}
        fullWidth

        InputProps={{
            startAdornment:(
              isFocused ? <InputAdornment position="start">
                {inputIcon}
              </InputAdornment> : null
            ),
            endAdornment: (
                <>
              <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
              </IconButton>
            </InputAdornment>
            </>
            )
              }}
      />

</>
   

  );
};

export default CustomPassword;