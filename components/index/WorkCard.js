import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
    Container,
    ProjectName,
    ProjectDescription,
    Grid,
    OrangeButton,
    PreviewImage,
} from './WorkCard.styles'

const WorkCard = (props) => {
    const [isIntersected, setIsIntersected] = useState(false)
    useEffect(() => {
        const cards = document.querySelectorAll(`#lazy${props.index}`)
        const lazyLoad = target => {
            const io = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsIntersected(true)
                        observer.disconnect()
                    }
                })
            })
            io.observe(target)
        };
        cards.forEach(lazyLoad)
    }, [])

    return(
        <Container opacity={isIntersected ? 1 : 0} workItem={props.workItem}>
            <Grid>
                <div>
                    <ProjectName>{props.workItem.project}</ProjectName>
                    <ProjectDescription>{props.workItem.description}</ProjectDescription>
                    <Link href={`/work/${props.workItem.url}`} passHref={true}>
                        <OrangeButton id={`lazy${props.index}`}>Read more</OrangeButton>
                    </Link>
                </div>
                <PreviewImage src={props.workItem.photo} />
            </Grid>
        </Container>
    )
}

export default WorkCard