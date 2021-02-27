import '../styles/globals.css'
import Header from '../components/global/header'
import Footer from '../components/global/Footer'
// import BodyContainer from '../components/global/BodyContainer'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      {/* <BodyContainer> */}
        <Component {...pageProps} />
      {/* </BodyContainer> */}
      <Footer />
    </div>
  )
}

export default MyApp
