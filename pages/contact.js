import Head from "next/head";
import Form from "../components/contact/Form";
import { useEffect } from "react";
import {
  ContactContainer,
  GetInTouch,
} from "../components/contact/Form.styles";

const Contact = (props) => {
  useEffect(() => {
    if (props.isModalOpen) {
      props.closeModal();
    }
  }, []);
  return (
    <div style={{ minHeight: "65vh" }}>
      <Head>
        <title>Gareth Ng - Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContactContainer>
        <GetInTouch>Let's get in touch</GetInTouch>
        <Form />
      </ContactContainer>
    </div>
  );
};

export default Contact;
