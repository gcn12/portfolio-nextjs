import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 60vw;
`

export const Label = styled.label`

`

export const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    min-height: 3rem;
    font-size: 1.5rem;
    border: none;
    border-bottom: 1px solid #616161;
    &:focus {
        border-bottom: 3px solid #D48C07;
    }
    outline: none;
    /* margin-bottom: 20px; */
`

export const Textarea = styled.textarea`
    font-family: 'Poppins', sans-serif;
    height: 3rem;
    font-size: 1.5rem;
    border: none;
    border-bottom: 1px solid #616161;
    &:focus {
        border-bottom: 3px solid #D48C07;
    }
    outline: none;
    /* margin-bottom: 20px; */
    max-width: 60vw;
`

export const Submit = styled.input`
    font-family: 'Poppins', sans-serif;
    min-height: 3rem;
    font-size: 1.5rem;
    border: none;
    width: 120px;
    /* margin-bottom: 20px; */
    cursor: pointer;
    color: white;
    background-color: #D48C07;
    border-radius: 10px;
`

export const Illustration = styled.img`
    height: 300px;
    width: 300px;
    @media(max-width: 800px) {
        display: none;
        visibility: hidden;
    }
`   

export const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 7rem 0 0 0;
    align-items: center;
    justify-items: center;
    @media(max-width: 800px) {
        grid-template-columns: 1fr;
    }
`   

export const GetInTouch = styled.h1`
    font-size: 2.3rem;
    font-weight: 600;
    margin-bottom: 2rem;
    @media(max-width: 800px) {
        font-size: 2rem;
        font-weight: 600;
    }
`

export const ErrorMessage = styled.h4`
    color: red;
    margin-bottom: 20px;
    font-weight: 500;
`

export const EmailSent = styled.h4`
    margin-top: 30px;
    font-size: 1rem;
    font-weight: 400;
`