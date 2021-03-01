import styled from 'styled-components'

export const Container = styled.div`
    /* display: flex; */
    align-items: center; 
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 80px 0;
    @media(max-width: 900px) {
        grid-template-columns: 1fr; 
        justify-items: center;
    }
`

export const Illustration = styled.img`
    height: 300px;
    width: 300px;
`

export const LargeText = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    /* max-width: 600px; */
`

export const SmallText = styled.h2`
    font-size: 1.7rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    max-width: 600px;
`