import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 30vw;
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
    margin-bottom: 20px;
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
    margin-bottom: 20px;
    max-width: 30vw;
`

export const Submit = styled.input`
    font-family: 'Poppins', sans-serif;
    min-height: 3rem;
    font-size: 1.5rem;
    border: none;
    width: 120px;
    margin-bottom: 20px;
    cursor: pointer;
    color: white;
    background-color: #D48C07;
    border-radius: 10px;
`

export const Illustration = styled.img`
    height: 300px;
    width: 300px;
`   

export const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 7rem 0 0 0;
    align-items: center;
    justify-items: center;
`   