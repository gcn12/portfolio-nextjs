import Head from 'next/head'
import WorkCard from '../components/index/WorkCard'
import LandingPage from '../components/index/LandingPage'
import {  
  Container
} from '../styles/index.styles'

const Home = () => {
  return (
    <Container style={{minHeight: '85vh'}}>
      <Head>
        <title>Gareth Ng</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      Home
      <LandingPage />
      <WorkCard />
      <WorkCard />
      <WorkCard />
    </Container>
  )
}

export default Home