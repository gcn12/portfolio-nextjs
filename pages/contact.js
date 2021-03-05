import Head from 'next/head'
import Form from '../components/contact/Form'
import { useEffect } from 'react'
import {
  ContactContainer,
  GetInTouch,
} from '../components/contact/Form.styles'

const Contact = (props) => {
  useEffect(()=> {
    console.log(props.isModalOpen)
    if(props.isModalOpen) {
      props.closeModal()
      // setTimeout(()=> props.setIsModalVisible(false), 500)
    }
  }, [])
  return (
    <div style={{minHeight: '65vh'}}>
      <Head>
          <title>Gareth Ng - Contact</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContactContainer>
        <div>
          <GetInTouch>Let's get in touch</GetInTouch>
        </div>
        <Form />
      </ContactContainer>
    </div>
  )
}

export default Contact