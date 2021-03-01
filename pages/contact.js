import Head from 'next/head'
import Form from '../components/contact/Form'
import {
  Illustration, 
  ContactContainer,
} from '../components/contact/Form.styles'
const Contact = () => {
    return (
      <div style={{minHeight: '65vh'}}>
        <Head>
            <title>Gareth Ng - Contact</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <ContactContainer>
          <div>
            <h1>Let's get in touch</h1>
            <Illustration src='09.png' />
          </div>
          <Form />
        </ContactContainer>
      </div>
    )
}

export default Contact