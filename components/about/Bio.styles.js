import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    align-items: center; 
    grid-template-columns: 1fr 1fr;
    margin: 96px 0 192px 0;
    @media(max-width: 1100px) {
        margin: 72px 0 128px 0;
    }
    @media(max-width: 900px) {
        grid-template-columns: 1fr; 
        justify-items: center;
        margin: 32px 0 128px 0;
    }
`

export const Illustration = styled.img`
    height: auto;
    width: 90%;
`

export const LargeText = styled.h1`
    font-size: 3rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 16px;
    @media(max-width: 900px) {
        margin-bottom: 32px;
        font-size: 2.25rem;
    }
    @media(max-width: 950px) {
        margin-bottom: 32px;
        font-size: 1.5rem;
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
    color: var(--color-accent);
    border-bottom: 1px solid var(--color-accent);
`