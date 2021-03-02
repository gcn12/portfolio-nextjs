import styled from 'styled-components'

export const Container = styled.div`

`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    margin: 10rem 0 2rem 0;
    color: #616161;
`

export const Description = styled.h2`
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 12rem;
    line-height: 4.2rem;
`

export const LinkContainer = styled.div`
    display: flex;
    margin: 5rem 0;
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
    margin-bottom: 8rem;
`

export const SectionHeader = styled.h3`
    font-size: 2rem;
    font-weight: 400;
`

export const SectionParagraph = styled.p`
    font-size: 1rem;
    font-weight: 300;
`

export const Photo = styled.img`
    margin-bottom: 8rem;
    max-height: 90vh;
`

export const PhotoDescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-bottom: 8rem;
    justify-items: center;
`

export const PhotoDescriptionHeader = styled.h3`
    font-size: 2rem;
    font-weight: 400;
`

export const PhotoDescriptionParagraph = styled.p`
    font-size: 1rem;
    font-weight: 300;
`

export const PhotoDescriptionImage = styled.img`
    max-width: 30vw;
    height: auto;
`