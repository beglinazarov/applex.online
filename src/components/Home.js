import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Partners from './Partners'
import AboutStart from './AboutStart'
import ServiceStart from './ServiceStart'
import RichCardWithPrice from './RichCardWithPrice'
import TrustedCoworkers from './TrustedCoworkers'
import StartForm from './StartForm'
import Footer from './Footer'
import Cookie from './Cookie'
import BackToTop from './BackToTop'

export default function HomeComponent() {
  return (
    <>
      <Header />
      <Carousel />
      {/* <Partners />
      <AboutStart />
      <ServiceStart />
      <RichCardWithPrice />
      <TrustedCoworkers />
      <StartForm /> */}
      <Footer />
      <Cookie />
      <BackToTop />
    </>
  )
}
