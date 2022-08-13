import Head from 'next/head'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ModelY from '../components/ModelY';
import ModelS from '../components/ModelS';
import ModelX from '../components/ModelX';
import SolarPanels from '../components/SolarPanels';
import SolarRoof from '../components/SolarRoof';
import Accessories from '../components/Accessories';

export default function Home() {
  return (
   <>
    <Head>
      <title>Tesla Clone</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar />
    <Header />
    <ModelY />
    <ModelS />
    <ModelX />
    <SolarPanels />
    <SolarRoof />
    <Accessories />
   </>
  )
}
