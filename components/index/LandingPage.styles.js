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
    33% {
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
    opacity: ${props=>props.pageLoaded ? 1 : 0};
    transition: opacity 500ms;
    animation: ${props=>props.pageLoaded ? slideInFast : null} .5s ease-out;
    /* animation: ${props=>props.pageLoaded ? null : fadeIn} .5s, ${props=>props.pageLoaded ? null : slideInFast} .5s ease-out; */
`

export const SmallText = styled.h2`
    margin: 48px 0;
    font-size: 2.25rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    max-width: 60rem;
    /* color: #616161; */
    color: var(--color-text-light);
    @media(max-width: 900px) {
        font-size: 1.5rem;
        margin: 32px 0 32px 0;
    }
    position: relative;
    opacity: ${props=>props.pageLoaded ? 1 : 0};
    transition: opacity 800ms;
    animation: ${props=>props.pageLoaded ? slideInSlow : null} .8s ease-out;
    /* animation: ${props=>props.pageLoaded ? null : fadeIn} 1.4s, ${props=>props.pageLoaded ? null : slideInSlow} .8s ease-out; */
`

export const Colored = styled.span`
    color: var(--color-accent);
    white-space: nowrap;
`

export const ButtonDiv = styled.div`
    display: inline-block;
    transform: scale(${props=>props.pageLoaded ? 1 : 0});
    -webkit-transform: scale(${props=>props.pageLoaded ? 1 : 0});
    transition: transform 500ms ease-in-out;
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
    transition: transform 100ms ease-in-out;
    /* animation: ${props=>props.pageLoaded ? null : scaleUp} 1s; */
    /* transform: scale(${props=>props.pageLoaded ? 1 : 0}); */
    @media(max-width: 1050px) {
        font-size: 1.25rem;
    }
    @media(max-width: 500px) {
        font-size: 1.125rem;
    }
    &:hover{
        transform: scale(1.03)
    }
`