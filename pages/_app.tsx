// import GlobalStyle from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from "../styles/theme"
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp
