import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    background-color: #F2A414;
    max-width: 100%;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    opacity: ${props=>props.isModalOpen ? 1 : 1};
    transition: transform .3s ease-in-out, opacity 1s ease-in-out;
    visibility: ${props=>props.isModalVisible ? 'visible' : 'hidden'};
    position: fixed;
    z-index: 10;
    @media(min-width: 700px) {
        display: none;
        visibility: hidden;
    }
`

export const Nav = styled.div`
    opacity: ${props=>props.isModalOpen ? 1 : 0};
    transform: ${props=>props.isModalOpen ? 'translate(-50%, -50%)' : 'translate(100%, -50%)'};
    transition: transform .5s ease-in-out, opacity 1s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
`

export const NavItem = styled.a`
    font-size: 3.75rem;
    font-weight: 400;
    cursor: pointer;
    display: inline;
    border-bottom: ${props=>props.underline} solid black;
`

export const Hamburger = styled.input`
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