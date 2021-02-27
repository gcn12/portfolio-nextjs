import Head from 'next/head'
import Enjoying from '../components/about/Enjoying'
const About = () => {
    return (
        <div style={{minHeight: '65vh'}}>
            <Head>
                <title>Gareth Ng - About</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            About
            <Enjoying />
        </div>
    )
}

export default About