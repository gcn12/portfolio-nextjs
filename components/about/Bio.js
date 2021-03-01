import {
    Container,
    Illustration,
    SmallText,
    LargeText,
    CineLink,
} from './Bio.styles'

const Bio = () => {
    return(
        <Container>
            <Illustration src='05.png' />
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