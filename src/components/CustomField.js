import React from "react";
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";










const CssTextField = withStyles({
  root: {
      
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);





const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap"
    backgroundColor:theme.palette.primary
    
  },
  margin: {
    margin: theme.spacing(1)
  }
}));



const theme = createTheme({
//   palette: {
//     primary: green
//   }
});

export default function CustomizedInputs(props) {
  const classes = useStyles();
  const { name, placeholder, value,error=null, onChange } = props;
  return (
  <>
      
      <ThemeProvider theme={theme}>

        <TextField
          className={classes.margin}
          variant="outlined"
          name={name}
          value={value}
          onChange={onChange}
          {...(error && {error:true,helperText:error})}

          placeholder={placeholder}
    
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>
  

  
  </>
  );
}