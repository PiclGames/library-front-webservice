import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { registerChartJs } from '../utils/register-chart-js';
import { theme } from '../theme';
import { useCookies } from 'react-cookie';
import Login from './login';

registerChartJs();

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const [ cookie, , ] = useCookies(['SESSION']);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          Library App
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {
            //if we have JSESSION cookie then we are logged in else router.push('/login')
            cookie.SESSION ? getLayout(<Component {...pageProps} />) : <Login/>
          }
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
