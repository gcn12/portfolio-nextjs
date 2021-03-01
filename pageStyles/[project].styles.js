import styled from 'styled-components'

export const Container = styled.div`

`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    margin-top: 10rem;
    color: #616161;
`

export const Description = styled.h2`
    font-size: 4rem;
    font-weight: 600;
`

export const WorkLink = styled.a`
    color: #D48C07;
    border-bottom: 3px solid #D48C07;
`

export const MainImage = styled.img`
    width: auto;
    max-height: 80vh; 
`

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
`

export const SectionHeader = styled.h3`
    font-size: 2rem;
    font-weight: 300;
`

export const SectionParagraph = styled.p`
    font-size: 1rem;
    font-weight: 300;
`

export const PhotoDescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`

export const PhotoDescriptionHeader = styled.h3`
    font-size: 2rem;
    font-weight: 500;
`

export const PhotoDescriptionParagraph = styled.p`
    font-size: 1rem;
    font-weight: 300;
`

export const PhotoDescriptionImage = styled.img`
    max-width: 40vw;
    height: auto;
`