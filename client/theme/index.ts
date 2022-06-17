import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3C7A89",
    },
    secondary: {
      main: "#DBC2CF",
    },
  },

  typography: {
    fontFamily: `'Joan', serif`,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        sx: {
          borderRadius: 8,
        },
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
        outlined: {
          "&hover": {
            color: "primary",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        sx: {
          marginTop: 0.5,
          marginBottom: 0.5,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {},
    },
  },
});

export default theme;
