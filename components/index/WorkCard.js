import Link from 'next/link'
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
                    <Link href={`/work/${props.workItem.url}`} passHref={true}>
                    <OrangeButton>Read more</OrangeButton>
                    </Link>
                </div>
                <PreviewImage src={props.workItem.photo} />
            </Grid>
        </Container>
    )
}

export default WorkCard