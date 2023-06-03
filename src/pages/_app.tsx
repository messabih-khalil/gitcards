import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider, useSelector } from 'react-redux';
import { store } from '../store/index';
import React from 'react';
export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
