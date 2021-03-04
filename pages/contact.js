import Head from 'next/head'
import Form from '../components/contact/Form'
import {
  Illustration, 
  ContactContainer,
  GetInTouch,
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
            <GetInTouch>Let's get in touch</GetInTouch>
            <Illustration src='undraw_experience_design_eq3j.png' />
          </div>
          <Form />
        </ContactContainer>
      </div>
    )
}

export default Contact