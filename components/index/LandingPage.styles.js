import styled from 'styled-components'

export const Container = styled.div`
    padding: 3rem 0;
    height: 100vh;
    /* background-image: url('70.-Honeydew.jpg') */
    /* background: radial-gradient(blue, #e6e8eb);
    margin: 0;
    background: radial-gradient(#d5d90d, #e6e8eb 60%,  #e6e8eb);
    background-repeat: no-repeat; */
`

export const LargeText = styled.h1`
    font-size: 7rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    max-width: 50rem;
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
    font-size: 2rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    max-width: 60rem;
    color: #616161;
    @media(max-width: 900px) {
        font-size: 1.5rem;
        /* line-height: 5.4rem; */
    }
    @media(max-width: 500px) {
        font-size: 1.2rem;
        /* line-height: 4.4rem; */
    }
`

export const Colored = styled.span`
    color: #D48C07;
`

export const Button = styled.button`

`