import React from 'react'
import Head from 'next/head';

const NextSeo = () => {
  return (
    <Head>
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
    </Head>
  )
}

export default NextSeo