import React from "react";
import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Component {...pageProps} />
      </StyledEngineProvider>
    </>
  );
}
