import React from "react";
import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import createEmotionCache from "../lib/createEmotionCache";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <CssBaseline />
          <Component {...pageProps} />
        </CacheProvider>
      </StyledEngineProvider>
    </>
  );
}
