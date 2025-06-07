// pages/index.js
import Head from 'next/head'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Portfolio from './components/sections/Portfolio'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NekoArch - Magical Architectural Design</title>
        <meta name="description" content="Anime-inspired architectural design and construction services. Transform your space into a magical environment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Services />
       <Portfolio />
      <Testimonials />
      <Contact /> 
    </Layout>
  )
}