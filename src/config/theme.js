import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { NoEncryption } from '@material-ui/icons';

  

let theme = createTheme({
  palette: {
    primary: {
      main: "#1AAA8D"
    },
    secondary: {
      main: "#30B78D"
    }
  },
  fontFamily: [
            'Mulish',
          ].join(','),
  typography:  {
  
    fontFamily: 'Mulish',
    body2: {
      fontFamily: 'Mulish',
      fontSize: "14px"
    },   
    text: {
      fontFamily: 'Mulish',
      fontSize: "18px"
    },
    h1: {
      fontFamily: 'Mulish',
      fontSize: "48px",
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'Mulish',
      fontSize: "48px",
      fontWeight: 800,
    }
  
  },
  spacing: 8,
});


theme = createTheme(theme, {
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor:  theme.palette.primary.main
      }
    },
    MuiButton: {
      root: {
        background: theme.palette.secondary.main,
          border: 0,
          color: 'white',
          padding: '0 30px',
          marginTop: '40px',
          fontSize:theme.typography.text.fontSize,
          // boxShadow: '0 3px 5px 2px rgba(220 228 226 / 50%)',
        maxWidth:'280px',
        display:'flex',
        justifyContent:'center',
        margin: '0 auto',
        borderRadius: '30px',
        '&:hover': {
          background: '#FFFFFF',
          backgroundColor: "FFFFFF",
          border:`1px solid ${theme.palette.secondary.main}`,
          color:theme.palette.secondary.main,
         },
      }, 
    },

    MuiInputBase: {
      root: {
        background: "white",
        "&$focused .MuiIconButton": {
          borderColor:  theme.palette.primary.main,
         backgroundColor: "white",
          
        }
      },
   
    },
    MuiOutlinedInput:{
      root: {
        backgroundColor: "#F1FAF7",
        fontFamily: "Mulish",
        caretColor:theme.palette.primary.main,

          "& $notchedOutline": {
            borderColor: "transparent",
            backgroundColor: "transparent",
          },
          "&:hover $notchedOutline": {
            borderColor: "transparent",
            backgroundColor: "transparent",
          },
          "&$focused $notchedOutline": {
            borderColor: theme.palette.primary.main,

          },
          '&$focused .MuiIconButton-label': {
            color: theme.palette.primary.main
          }
        },
    },
    MuiTextField: {
      root: {
        border: "none",
        borderRadius: 5,
        // transition: theme.transitions.create(["border-color", "box-shadow"]),
        width:'100%',
        
        "&:hover": {
          borderColor: "transparent",
        },
        
        "&:focus": {
           borderColor: theme.palette.primary.main,   
        },
      }
    },

    MuiCheckbox: {
      root: {
        // color: "#1AAA8D",
        "&&:hover": {
          color: theme.palette.primary.main,
        },
        '&.Mui-checked': {
          color:theme.palette.primary.main,
        },
        "&&$checked": {
          color: theme.palette.primary.main,
          "&&:hover": {
            color:theme.palette.primary.main,
          },
          "&&.Mui-focusVisible": {
            color: "#1AAA8D"
          },
      },
      checked: {} 
      }
    },
    MuiIconButton:{
      root: {
        color: '#949494',
    

      }
    },
  }
});







 export default theme;

