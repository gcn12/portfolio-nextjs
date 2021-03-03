import styled, { keyframes } from 'styled-components'

const scaleUp = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`

export const Container = styled.div`
    margin: 0 10vw;
    background-image: linear-gradient(${props=>props.workItem.colorDirection}, ${props=>props.workItem.colorTwo}, ${props=>props.workItem.colorOne});
    border-radius: 30px;
    margin: 20px 0;
    padding: 50px;
    animation: ${scaleUp} .8s ease-out;
`

export const ProjectName = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.3rem;
`

export const ProjectDescription = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    margin: 0.5rem 0 2rem 0;
`

export const Grid = styled.div`
    min-height: 50vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    @media(max-width: 1100px) {
        /* justify-items: center; */
        grid-template-columns: 1fr;
        grid-row-gap: 3rem;
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
    display: inline-block;
    transition: transform 100ms ease-in-out;
    &:hover{
        transform: scale(1.05)
    }
`

export const PreviewImage = styled.img`
    height: 250px;
    width: auto;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, .2);
    justify-self: center;
    @media(max-width: 1100px) {
        max-width: 60vw;
        height: auto;
    }
`