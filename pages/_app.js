import '../styles/globals.css'
import { useState } from 'react'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'

const MyApp = ({ Component, pageProps }) => {
  const [viewedHome, setViewedHome] = useState(false)
  const [viewedAbout, setViewedAbout] = useState(false)
  const [viewedContact, setViewedContact] = useState(false)
  const [viewedTravel, setViewedTravel] = useState(false)
  const [viewedTimer, setViewedTimer] = useState(false)
  const [viewedCinematography, setViewedCinematography] = useState(false)
  const [viewedMessaging, setViewedMessaging] = useState(false)
  return (
    <div>
      <Header />
      <div style={{minHeight: '80vh'}}>
        <Component  
          {...pageProps} 
          viewedAbout={viewedAbout}
          viewedContact={viewedContact}
          viewedHome={viewedHome}
          viewedTravel={viewedTravel}
          viewedTimer={viewedTimer}
          viewedCinematography={viewedCinematography}
          viewedMessaging={viewedMessaging}
          setViewedAbout={setViewedAbout}
          setViewedCinematography={setViewedCinematography}
          setViewedContact={setViewedContact}
          setViewedHome={setViewedHome}
          setViewedMessaging={setViewedMessaging}
          setViewedTimer={setViewedTimer}
          setViewedTravel={setViewedTravel}
        />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
