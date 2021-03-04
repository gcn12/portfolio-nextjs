import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    align-items: center; 
    grid-template-columns: 1fr 1fr;
    margin: 192px 0 256px 0;
    @media(max-width: 900px) {
        grid-template-columns: 1fr; 
        justify-items: center;
        margin: 96px 0 192px 0;
    }
`

export const Illustration = styled.img`
    height: 300px;
    width: 300px;
    @media(max-width: 900px) {
        /* justify-self: center;  */
    }
`

export const LargeText = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 16px;
    @media(max-width: 900px) {
        margin-bottom: 32px;
        font-size: 2.25rem;
    }
`

export const SmallText = styled.h2`
    font-size: 1.5rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    max-width: 600px;
    @media(max-width: 900px) {
        font-size: 1.25rem;
    }
`

export const CineLink = styled.a`
    color: #D48C07;
    border-bottom: 1px solid #D48C07;
`