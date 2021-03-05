import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    33% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const slideUp = keyframes`
    0% {
        top: 20px;
    }
    33% {
        top: 20px;
    }
    100% {
        top: 0px;
    }
`

export const Container = styled.div`
    min-height: 100vh;
`

export const Title = styled.h1`
    font-size: 2.25rem;
    font-weight: 300;
    margin: 192px 0 32px 0;
    color: #D48C07;
    position: relative;
    animation: ${props=> props.hasPageBeenViewed ? null : fadeIn } .4s, ${props=> props.hasPageBeenViewed ? null : slideUp} .4s ease-out;
    @media(max-width: 1000px) {
        margin-top: 128px;
    }
    @media(max-width: 500px) {
        margin: 96px 0 16px 0;
        font-size: 1.5rem;
    }
    
`

export const Description = styled.h2`
    font-size: 4.5rem;
    font-weight: 600;
    margin-bottom: 192px;
    line-height: 5rem;
    position: relative;
    animation: ${props=> props.hasPageBeenViewed ? null : fadeIn } 1s, ${props=> props.hasPageBeenViewed ? null : slideUp} 1s ease-out;
    @media(max-width: 1000px) {
        margin-bottom: 128px;
        /* font-size: 2.25rem;
        line-height: 3.3rem; */
    }
    @media(max-width: 1000px) {
        font-size: 3.75rem;
        line-height: 4rem;
    }
    @media(max-width: 500px) {
        margin-bottom: 64px;
        font-size: 2.25rem;
        line-height: 3.3rem;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: ${props=>props.opacity};
    transition: opacity 400ms ease-out;
`

export const LinkContainer = styled.div`
    display: flex;
    margin: 96px 0;
    @media(max-width: 400px) {
        align-items: center;
        flex-direction: column
    }
`

export const WorkLink = styled.a`
    color: #D48C07;
    border-bottom: 3px solid #D48C07;
    &:hover {
        color: #F2A414;
        border-bottom: 3px solid #F2A414;
    }
`

export const LinkGap = styled.div`
    margin-right: 32px;
    @media(max-width: 400px) {
        margin-bottom: 32px;
    }
`

export const MainImage = styled.img`
    width: auto;
    max-height: 80vh; 
    max-width: 90vw;
`

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    grid-column-gap: 5%;
    margin-bottom: 128px;
    justify-content: start;
    @media(max-width: 800px) {
        grid-template-columns: 1fr; 
        margin-bottom: 64px;
    }
`

export const SectionHeader = styled.h3`
    font-size: 2rem;
    font-weight: 400;
    /* padding: 0 10% 0 0; */
    justify-self: start;
    @media(max-width: 800px) {
        margin-bottom: 24px;
    }
`

export const SectionParagraph = styled.p`
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 2rem;
    align-self: right;
    white-space: pre-line;
    /* padding: 0 0 0 10%; */
`

export const Photo = styled.img`
    margin-bottom: 128px;
    max-height: 90vh;
    max-width: 90vw;
    @media(max-width: 800px) {
        margin-bottom: 64px;
    }
`

export const PhotoDescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    margin-bottom: 128px;
    justify-items: ${props=>props.justify};
    @media(max-width: 700px) {
        grid-template-columns: 1fr;
        justify-items: left;
        margin-bottom: 64px;
    }
`

export const PhotoDescriptionHeader = styled.h3`
    font-size: 2.25rem;
    font-weight: 400;
    margin-bottom: 16px;
    display: ${props=>props.size === 'small' ? 'none' : 'initial'};
    @media(max-width: 800px) {
        margin-bottom: 24px;
    }
    @media(max-width: 700px) {
        display: ${props=>props.size === 'large' ? 'none' : 'initial'};
    }
`

export const Gap = styled.div`
    @media(max-width: 800px) {
        margin-bottom: 24px;
    }
`

export const PhotoDescriptionParagraph = styled.p`
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 2rem;
    white-space: pre-line;
    display: ${props=>props.size === 'small' ? 'none' : 'initial'};
    @media(max-width: 700px) {
        display: ${props=>props.size === 'large' ? 'none' : 'initial'};
    }
`

export const PhotoDescriptionImage = styled.img`
    max-width: 30vw;
    height: auto;
    border: 1px solid #f5f5f5;
    @media(max-width: 700px) {
        max-width: 100%;
        margin-bottom: 32px;
    }
`

export const CreatedWithGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    align-content: flex-start;
`

export const CreatedWithContainer = styled.div`
    display: grid;
    /* grid-template-columns: 33% 66%; */
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 5%;
    margin-bottom: 128px;
    justify-content: space-between;
    @media(max-width: 800px) {
        grid-template-columns: 1fr; 
        margin-bottom: 64px;
    }
`

export const CreatedWithItem = styled.h2`
    font-size: 1rem;
    font-weight: 300;
    border: 1px solid black;
    /* display: inline-block; */
    border-radius: 10px;
    padding: 8px 16px;
    text-align: center;
    margin: 0 10px 10px 0;
    white-space: nowrap;
`

export const Row = styled.div`
`

export const Left = styled.div`
float: left;
  width: 200px;
`

export const Right = styled.div`
/* float: left; */
  /* padding: 10px;
  width: 75%; */
  margin-left: 200px;
`