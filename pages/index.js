import Head from 'next/head'
import LandingPage from '../components/index/LandingPage'
import CardsComponent from '../components/index/CardsComponent'
import {  
  Container
} from '../styles/index.styles'

const Home = (props) => {
  return (
    <Container style={{minHeight: '85vh'}}>
      <Head>
        <title>Gareth Ng</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LandingPage viewedHome={props.viewedHome} setViewedHome={props.setViewedHome} />
      <CardsComponent />
    </Container>
  )
}

export default Home