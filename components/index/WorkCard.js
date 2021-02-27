import {
    Container,
    ProjectName,
} from './WorkCard.styles'

const WorkCard = (props) => {
    return(
        <Container workItem={props.workItem}>
            <ProjectName>{props.workItem.project}</ProjectName>
        </Container>
    )
}

export default WorkCard