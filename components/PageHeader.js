import React from 'react'
import Head from 'next/head'

const PageHeader = ({title}) => (
  <Head>
    <title>{title}</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <script src="https://satori-a.akamaihd.net/satori-rtm-sdk/v1.1.1/sdk.min.js"></script>
  </Head>
)

export default PageHeader
