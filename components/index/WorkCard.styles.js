import styled from 'styled-components'

export const Container = styled.div`
    min-height: 60vh;
    margin: 0 10vw;
    background-image: linear-gradient(${props=>props.workItem.colorDirection}, ${props=>props.workItem.colorTwo}, ${props=>props.workItem.colorOne});
    /* background-image: ${props=>props.workItem.styles}; */
    border-radius: 30px;
    /* box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1); */
    margin: 20px 0;
    padding: 50px;
`

export const ProjectName = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
`

export const ProjectDescription = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2rem;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    @media(max-width: 1100px) {
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
`

export const PreviewImage = styled.img`
    height: 250px;
    width: auto;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, .2);
`