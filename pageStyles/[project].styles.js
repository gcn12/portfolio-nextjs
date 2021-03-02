import styled from 'styled-components'

export const Container = styled.div`

`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    margin: 10rem 0 2rem 0;
    /* color: #616161; */
    color: #D48C07;
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
    max-width: 90vw;
`

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-bottom: 8rem;
    @media(max-width: 800px) {
        grid-template-columns: 1fr; 
    }
`

export const SectionHeader = styled.h3`
    font-size: 2rem;
    font-weight: 400;
`

export const SectionParagraph = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 2rem;
`

export const Photo = styled.img`
    margin-bottom: 8rem;
    max-height: 90vh;
    max-width: 90vw;
`

export const PhotoDescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-bottom: 8rem;
    justify-items: ${props=>props.justify};
`

export const PhotoDescriptionHeader = styled.h3`
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
`

export const PhotoDescriptionParagraph = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 2rem;
`

export const PhotoDescriptionImage = styled.img`
    max-width: 30vw;
    height: auto;
`

export const CreatedWithGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const CreatedWithContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin-bottom: 8rem;
    align-items: start;
    justify-items: end;
    @media(max-width: 800px) {
        grid-template-columns: 1fr; 
        justify-items: start;
    }
`

export const CreatedWithItem = styled.h2`
    font-size: 1rem;
    font-weight: 300;
    border: 1px solid black;
    display: inline;
    border-radius: 10px;
    padding: .5rem 1rem;
    text-align: center;
    margin: 0 10px 10px 0;
    white-space: nowrap;
`