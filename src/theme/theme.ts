"use client";

import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#efefef",
      contrastText: "#fff",
    },
    secondary: {
      main: "#e7d393",
      contrastText: "#000",
    },
  },
});

export default Theme;
