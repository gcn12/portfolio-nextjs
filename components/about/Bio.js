import {
    Container,
    Illustration,
    SmallText,
} from './Bio.styles'

const Bio = () => {
    return(
        <Container>
            <Illustration src='05.png' />
            <SmallText>
            Gareth Ng is a front-end developer who specializes in React.js.
            He previously worked in the film industry as a camera assistant and cinematographer.
            </SmallText>
        </Container>
    )
}

export default Bio