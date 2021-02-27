import '../styles/globals.css'
import Header from '../components/index/header'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
