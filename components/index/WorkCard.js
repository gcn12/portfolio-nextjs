import {
    Container,
    ProjectName,
    ProjectDescription,
    Grid,
    OrangeButton,
    PreviewImage,
} from './WorkCard.styles'

const WorkCard = (props) => {
    return(
        <Container workItem={props.workItem}>
            <Grid>
                <div>
                    <ProjectName>{props.workItem.project}</ProjectName>
                    <ProjectDescription>{props.workItem.description}</ProjectDescription>
                    <OrangeButton>Read more</OrangeButton>
                </div>
                <PreviewImage src={props.workItem.photo} />
            </Grid>
        </Container>
    )
}

export default WorkCard