import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media(max-width: 1000px) {
        grid-template-columns: 1fr; 
    }
`

export const EnjoyingTitle = styled.h1`
    font-size: 2.25rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 48px;
    @media(max-width: 500px) {
        font-size: 2rem;
    }
`

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media(max-width: 700px) {
        grid-template-columns: 1fr; 
    }
`

export const Category = styled.h3`
    font-size: 1.125rem;
    color: #616161;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    display: inline-block;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.a`
    font-size: 2.25rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    white-space: nowrap;
`

export const Span = styled.span`
    /* border-bottom: 0px; */
    opacity: 1;
    transition: opacity 80ms;
    &:hover{
        border-bottom: 2px solid #D48C07;
    }
`