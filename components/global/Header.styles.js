import styled from 'styled-components'

export const Container = styled.header`
    margin-top: 2rem;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const Title = styled.a`
    font-family: 'Poppins', sans-serif;
    font-size: 2.3rem;
    font-weight: 600;
    &:hover{
        color: #959595;
    }
    transition: color 80ms ease-in-out;
`

export const UL = styled.ul`
    display: flex;
    list-style-type: none;
`

export const LI = styled.li`
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    border-bottom: ${props=>props.underline} solid #D48C07;
    transition: color 80ms ease-in-out;
    &:hover{
        color: #959595;
    }
`

export const Gap = styled.div`
    margin-left: 1rem;
`