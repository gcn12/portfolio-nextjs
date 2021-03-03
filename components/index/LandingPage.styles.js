import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    margin: 3rem 0 0rem 0;
    min-height: 85vh;
`

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

const scaleUp = keyframes`
    0% {
        transform: scale(0);
    }
    33% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`

const slideIn = keyframes`
    0% {
        left: -20px;
    }
    33% {
        left: -20px;
    }
    100% {
        left: 0px;
`

const test = (a) => keyframes`
    0% {
        opacity: 0;
    }
    33% {
        opacity: 0;
    }
    100% {
        opacity: ${a};
    } 
`

export const LargeText = styled.h1`
    font-size: 7rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    max-width: 55rem;
    line-height: 7rem;
    @media(max-width: 1050px) {
        font-size: 6rem;
        line-height: 5.4rem;
    }
    @media(max-width: 80px) {
        font-size: 5rem;
        line-height: 5.4rem;
    }
    @media(max-width: 500px) {
        font-size: 3.5rem;
        line-height: 4.4rem;
    }
    position: relative;
    animation: ${props=>props.pageLoaded ? null : fadeIn} .5s, ${props=>props.pageLoaded ? null : slideIn} .5s ease-out;
`

export const SmallText = styled.h2`
    margin: 3rem 0;
    font-size: 2rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    max-width: 60rem;
    color: #616161;
    @media(max-width: 900px) {
        font-size: 1.5rem;
    }
    @media(max-width: 500px) {
        font-size: 1.2rem;
    }
    position: relative;
    animation: ${props=>props.pageLoaded ? null : fadeIn} 1s, ${props=>props.pageLoaded ? null : slideIn} 1s ease-out;
`

export const Colored = styled.span`
    color: #D48C07;
    white-space: nowrap;
`

export const OrangeButton = styled.a`
    font-size: 1.5rem;
    font-weight: 300;
    padding: 1rem 1.4rem;
    border: none;
    background-color: #D48C07;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    display: inline-block;
    transition: transform 100ms ease-in-out;
    animation: ${props=>props.pageLoaded ? null : scaleUp} 1s;
    &:hover{
        transform: scale(1.03)
    }
`