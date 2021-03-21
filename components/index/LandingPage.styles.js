import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    margin: 48px 0 128px 0;
    @media(max-width: 500px) {
        margin: 48px 0 96px 0;
    }
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
    50% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`

const slideInFast = keyframes`
    0% {
        left: -20px;
    }
    33% {
        left: -20px;
    }
    100% {
        left: 0px;
`

const slideInSlow = keyframes`
    0% {
        left: -20px;
    }
    66% {
        left: -20px;
    }
    100% {
        left: 0px;
`

export const LargeText = styled.h1`
    font-size: 6rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    max-width: 55rem;
    line-height: 7rem;
    @media(max-width: 1050px) {
        font-size: 4.5rem;
        line-height: 5.4rem;
    }
    @media(max-width: 800px) {
        line-height: 5.4rem;
    }
    @media(max-width: 500px) {
        font-size: 3.75rem;
        line-height: 4.4rem;
    }
    @media(max-width: 400px) {
        font-size: 3rem;
        line-height: 3.5rem;
    }
    position: relative;
    visibility: ${props=>props.pageLoaded ? 'visible' : 'hidden'};
    left: ${props=>props.pageLoaded ? '0px' : '-20px'};
    opacity: ${props=>props.pageLoaded ? 1 : 0};
    transition: left 300ms ease-in-out, opacity 300ms ease-in-out;
    /* animation: ${props=>props.pageLoaded ? fadeIn : null} .5s, ${props=>props.pageLoaded ? slideInFast : null} .5s ease-out; */
`

export const SmallText = styled.h2`
    margin: 48px 0;
    font-size: 2.25rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    max-width: 60rem;
    color: var(--color-text-light);
    @media(max-width: 900px) {
        font-size: 1.5rem;
        margin: 32px 0 32px 0;
    }
    position: relative;
    visibility: ${props=>props.pageLoaded ? 'visible': 'hidden'};
    left: ${props=>props.pageLoaded ? '0px' : '-20px'};
    opacity: ${props=>props.pageLoaded ? 1 : 0};
    transition: left 300ms ease-in-out, opacity 300ms ease-in-out;
    transition-delay: 400ms;
    /* animation: ${props=>props.pageLoaded ? fadeIn : null} 1.4s, ${props=>props.pageLoaded ? slideInSlow : null} .8s ease-out; */
`

export const Colored = styled.span`
    color: var(--color-accent);
    white-space: nowrap;
`

export const ButtonContainer = styled.div`
    transform: scale(${props=>props.pageLoaded ? 1 : 0});
    transition: transform 1000ms ease-in-out;
    display: inline;
    &:hover{
        transform: scale(2);
    }
`

export const OrangeButton = styled.a`
    font-size: 1.5rem;
    
    font-weight: 300;
    padding: 16px 24px;
    border: none;
    background-color: var(--color-accent);
    color: var(--color-text-inverted);
    border-radius: 10px;
    cursor: pointer;
    display: inline-block;
    visibility: ${props=>props.pageLoaded ? 'visible' : 'null'};
    opacity: ${props=>props.pageLoaded ? 1 : 0};
    transition: transform 100ms ease-in-out;
    animation: ${props=>props.pageLoadedScale ? scaleUp : null} 1.3s;
    
    @media(max-width: 1050px) {
        font-size: 1.25rem;
    }
    @media(max-width: 500px) {
        font-size: 1.125rem;
    }
    &:hover{
        transform: scale(1.03);
    }
`