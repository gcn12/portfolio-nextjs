import { useState } from 'react'
import emailjs from 'emailjs-com'
import apiKeys from './emailkeys'
import {
    Form,
    Label,
    Input,
    Submit,
    Textarea,
} from './Form.styles'

const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xfb4n3g', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return(
        <Form className="contact-form" onSubmit={sendEmail}>
            <Label htmlFor='form-email'>email</Label>
            <Input onChange={(e)=> setEmail(e.target.value)} value={email} autoComplete='off' type='email' id='form-email' placeholder='Enter email' name="reply_to" />
            <Label htmlFor='form-message'>message</Label>
            <Textarea onChange={(e)=> setMessage(e.target.value)} value={message} autoComplete='off' type='text' id='form-message' placeholder='Enter message' name="message" />
            <Submit type='submit' value='submit'/>
        </Form>
    )
}

export default ContactForm