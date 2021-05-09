import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    align-items: center; 
    grid-template-columns: 1fr 1fr;
    margin: 96px 0 192px 0;
    @media(max-width: 1100px) {
        margin: 72px 0 128px 0;
    }
    @media(max-width: 950px) {
        grid-template-columns: 1fr; 
        justify-items: center;
        margin: 32px 0 128px 0;
    }
`

export const Illustration = styled.img`
    height: auto;
    width: 80%;
    border-radius: 8px;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, .3); 
    @media(max-width: 950px) {
        margin-bottom: 48px;
    }
`

export const LargeText = styled.h1`
    font-size: 3rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 16px;
    @media(max-width: 950px) {
        margin-bottom: 16px;
        font-size: 2.25rem;
        margin-bottom: 32px;
        font-size: 1.5rem;
    }
`

export const SmallText = styled.h2`
    font-size: 1.5rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    max-width: 600px;
    margin-bottom: 20px;
    @media(max-width: 950px) {
        font-size: 1.25rem;
    }
`

export const CineLink = styled.a`
    color: var(--color-accent);
    border-bottom: 1px solid var(--color-accent);
`

export const ArrowQuote = styled.h3`
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 20px;
`

export const ArrowIcon = styled.img`
    align-self: flex-start;
    margin: 0 6px;
    position: relative;
    top: 5px;
    filter: var(--color-invert);
`

export const ArrowQuoteContainer = styled.div`
    display: flex;
    align-items: center;
`