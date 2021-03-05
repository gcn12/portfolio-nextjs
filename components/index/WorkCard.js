import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
    Container,
    ProjectName,
    ProjectDescription,
    Grid,
    OrangeButton,
    PreviewImage,
    LazyDiv,
} from './WorkCard.styles'

const WorkCard = (props) => {
    const [isIntersected, setIsIntersected] = useState(false)
    useEffect(() => {
        if ('IntersectionObserver' in window) {
            // IntersectionObserver initialization code
            if(props.viewedHome) {
                setIsIntersected(true)
            }else{
                const cards = document.querySelectorAll(`.lazy${props.index}`)
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
            }
        } else {
            setIsIntersected(true)
        }
    }, [])

    return(
        <Container opacity={isIntersected ? 1 : 0} workItem={props.workItem}>
            <Grid>
                <div>
                    <ProjectName>{props.workItem.project}</ProjectName>
                    <ProjectDescription>{props.workItem.description}</ProjectDescription>
                    <Link href={`/work/${props.workItem.url}`} passHref={true}>
                        <OrangeButton screenSize='large' className={`lazy${props.index}`}>Read more</OrangeButton>
                    </Link>
                    <LazyDiv className={`lazy${props.index}`}></LazyDiv>
                </div>
                <PreviewImage src={props.workItem.photo} />
                <span>

                <Link href={`/work/${props.workItem.url}`} passHref={true}>
                    <OrangeButton screenSize='small'>Read more</OrangeButton>
                </Link>
                </span>
            </Grid>
        </Container>
    )
}

export default WorkCard