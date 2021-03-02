import styled from 'styled-components'

export const Container = styled.div`
    margin: 3rem 0 0rem 0;
    height: 85vh;
`

export const LargeText = styled.h1`
    font-size: 7rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    max-width: 55rem;
    line-height: 7rem;
    @media(max-width: 900px) {
        font-size: 5rem;
        line-height: 5.4rem;
    }
    @media(max-width: 500px) {
        font-size: 4rem;
        line-height: 4.4rem;
    }
`

export const SmallText = styled.h2`
    margin: 3rem 0;
    font-size: 2rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    max-width: 60rem;
    color: #616161;
    @media(max-width: 900px) {
        font-size: 1.5rem;
    }
    @media(max-width: 500px) {
        font-size: 1.2rem;
    }
`

export const Colored = styled.span`
    color: #D48C07;
`

export const OrangeButton = styled.a`
    font-size: 1.5rem;
    font-weight: 300;
    padding: 1rem 1.4rem;
    border: none;
    background-color: #D48C07;
    color: white;
    border-radius: 10px;
    cursor: pointer;
`