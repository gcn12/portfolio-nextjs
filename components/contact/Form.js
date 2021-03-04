import { useState } from 'react'
import emailjs from 'emailjs-com'
import apiKeys from './emailkeys'
import {
    Form,
    Label,
    Input,
    Submit,
    Textarea,
    ErrorMessage,
    EmailSent,
} from './Form.styles'

const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('')
    const [wasEmailSent, setWasEmailSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        if(messageError.length===0 && emailError.length===0) {
            emailjs.sendForm('service_xfb4n3g', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
            .then((result) => {
                console.log(result)
                setWasEmailSent(true)
                document.getElementById('form-email').value = ''
                document.getElementById('form-message').value = ''
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log(error.text)
            });
        }
    }

    const checkEmail = () => {
        let regex = /^\S+@\S+\.\S+$/
        const isValid = regex.test(email)
        if(email.length === 0) {
            setEmailError('Field cannot be left blank')
        }else if (!isValid) {
            setEmailError('Invalid email')
        } else{
            setEmailError('')
        }
    }

    const checkMessage = () => {
        if(message.length === 0) {
            setMessageError('Field cannot be left blank')
        }else if(message.length > 4000) {
            setMessageError('Message is too long')
        }else{
            setMessageError('')
        }
    }

    return(
        <Form className="contact-form" onSubmit={sendEmail}>
            <Label htmlFor='form-email'>email</Label>
            <Input onBlur={checkEmail} onChange={(e)=> setEmail(e.target.value)} value={email} autoComplete='off' type='text' id='form-email' placeholder='Enter email' name="reply_to" />
            <ErrorMessage>{emailError}</ErrorMessage>
            <Label htmlFor='form-message'>message</Label>
            <Textarea onBlur={checkMessage} onChange={(e)=> setMessage(e.target.value)} value={message} autoComplete='off' type='text' id='form-message' placeholder='Enter message' name="message" />
            <ErrorMessage>{messageError}</ErrorMessage>
            <span>

            <Submit type='submit' value='submit'/>
            </span>
            {wasEmailSent &&
            <EmailSent>Email was sent successfully</EmailSent>
            }
        </Form>
    )
}

export default ContactForm