import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1
    }
`

export const Container = styled.div`
    background-color: #F2A414;
    max-width: 100%;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: ${props=>props.isMenuOpen ? 'none' : 'flex'};
    position: fixed;
    z-index: 10;
    animation: ${fadeIn} .2s ease-out;
`

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const NavItem = styled.a`
    font-size: 4rem;
    font-weight: 400;
    cursor: pointer;
    display: inline;
`

export const Hamburger = styled.img`
    height: 30px;
    width: 30px;
    position: absolute;
    top: 50px;
    right: 10vw;
    cursor: pointer;
    @media(min-width: 700px) {
        display: none;
        visibility: hidden;
    }
`