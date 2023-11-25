// bring in Head component
import Head from 'next/head';
// bring in bootstrap css file with responsive css media queries
import '../styles/bootstrap.min.css';
import '../styles/globals.css';

// define our next.js' master MyApp
function MyApp( { Component, pageProps } ) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
