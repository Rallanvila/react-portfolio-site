import '../styles/globals.css';
import ModalOverlayProvider from '../context/ModalContext';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalOverlayProvider>
      <Component {...pageProps} />
    </ModalOverlayProvider>
  );
}

export default MyApp;
