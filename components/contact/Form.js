import {
    Form,
    Label,
    Input,
    Submit,
    Textarea,
} from './Form.styles'

const ContactForm = () => {
    return(
        <Form>
            <Label for='form-name'>name</Label>
            <Input autoComplete='off' type='text' id='form-name' placeholder='Enter name' />
            <Label for='form-email'>email</Label>
            <Input autoComplete='off' type='text' id='form-email' placeholder='Enter email' />
            <Label for='form-message'>message</Label>
            <Textarea autoComplete='off' type='text' id='form-message' placeholder='Enter message' />
            <Submit type='submit' value='submit'/>
        </Form>
    )
}

export default ContactForm