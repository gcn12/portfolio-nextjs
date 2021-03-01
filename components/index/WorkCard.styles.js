import styled from 'styled-components'

export const Container = styled.div`
    min-height: 60vh;
    margin: 0 10vw;
    /* background-color: teal; */
    /* background-image: linear-gradient(to bottom right, #8ecae6, #023047); */
    background-image: linear-gradient(${props=>props.workItem.colorDirection}, ${props=>props.workItem.colorTwo}, ${props=>props.workItem.colorOne});
    /* background-image: ${props=>props.workItem.styles}; */
    border-radius: 30px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .1);
    margin: 20px 0;
    padding: 15px;
`

export const ProjectName = styled.div`
    font-family: 'Merriweather', serif;
    font-size: 3rem;
`