import Head from 'next/head'
import { useEffect } from 'react'
import LandingPage from '../components/index/LandingPage'
import CardsComponent from '../components/index/CardsComponent'
import {  
  Container,
  LatestProjects,
} from '../styles/index.styles'

const Home = (props) => {
  useEffect(()=> {
    if(props.isModalOpen) {
      props.closeModal()
    }
  }, [])
  return (
    <Container style={{minHeight: '85vh'}}>
      <Head>
        <title>Gareth Ng</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LandingPage viewedHome={props.viewedHome} setViewedHome={props.setViewedHome} />
      <LatestProjects>Latest projects</LatestProjects>
      <CardsComponent viewedHome={props.viewedHome} />
    </Container>
  )
}

export default Home