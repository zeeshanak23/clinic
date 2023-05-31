import Head from 'next/head'
import { Inter } from 'next/font/google'
import React from 'react'
import Hearnic from '../components/Hearnic'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta />
        <meta />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hearnic />
      </main>
    </>
  )
}
