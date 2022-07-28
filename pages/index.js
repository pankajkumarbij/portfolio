import Head from 'next/head';
import Portfolio from '../components/portfolio';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pankajkumarbij</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio/>
    </>
  )
}
