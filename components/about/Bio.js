import {
    Container,
    Illustration,
    SmallText,
    LargeText,
    CineLink,
} from './Bio.styles'

const Bio = (props) => {
    return(
        <Container>
            <Illustration onLoad={props.closeModal} src='https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/about_image_small.png?alt=media&token=fb050f1b-2872-4767-9acd-6053172e5797' />
            <div>
                <LargeText>Thanks for stopping by!</LargeText>
                <SmallText>
                Gareth Ng is a front-end developer who specializes in React.js.
                He previously worked in the film industry as a camera assistant and <CineLink rel='nonreferrer noopener' target='_blank' href='https://gcn12.github.io/film-portfolio/'>cinematographer</CineLink>.
                </SmallText>
            </div>
        </Container>
    )
}

export default Bio