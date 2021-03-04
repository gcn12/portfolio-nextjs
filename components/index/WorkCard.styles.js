import styled from 'styled-components'

export const Container = styled.div`
    transition: opacity .7s ease-out;
    opacity: ${props=> props.opacity};
    margin: 0 10vw;
    background-image: linear-gradient(${props=>props.workItem.colorDirection}, ${props=>props.workItem.colorTwo}, ${props=>props.workItem.colorOne});
    border-radius: 30px;
    margin: 20px 0;
    padding: 50px;
`

export const ProjectName = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
`

export const ProjectDescription = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2.25rem;
    margin: 0.8px 0 32px 0;
    @media(max-width: 1100px) {
        margin: 8px 0 16px 0;
    }
`

export const Grid = styled.div`
    min-height: 50vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    align-content: center;
    @media(max-width: 1100px) {
        grid-template-columns: 1fr;
        /* grid-row-gap: 3rem; */
    }
`

export const OrangeButton = styled.a`
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem 1.4rem;
    border: none;
    background-color: #D48C07;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 100ms ease-in-out;
    &:hover{
        transform: scale(1.05)
    }
    visibility: ${props=>props.screenSize=== 'small' ? 'hidden' : 'visible'};
    display: ${props=>props.screenSize === 'small' ? 'none' : 'inline-block'};
    @media(max-width: 1100px) {
        visibility: ${props=>props.screenSize=== 'large' ? 'hidden' : 'visible'};
        display: ${props=>props.screenSize === 'large' ? 'none' : 'inline-block'};
        max-width: 60vw;
        height: auto;
        margin-top: 48px;
    }
`

export const PreviewImage = styled.img`
    height: 250px;
    width: auto;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, .2);
    justify-self: center;
    @media(max-width: 1100px) {
        height: auto;
        width: 100%;
    }
`

export const LazyDiv = styled.div`
    @media(min-width: 1100px) {
        visibility: 'hidden';
        display: none;
    }
`