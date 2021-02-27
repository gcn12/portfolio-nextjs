import {
    Container, 
    LargeText,
    SmallText,
} from './LandingPage.styles'

const LandingPage = () => {
    return(
        <Container>
            <LargeText>
                I'm Gareth, a front-end developer specializing in React.js.
            </LargeText>
            <SmallText>
                I'm passionate about performant code and good design.
            </SmallText>
        </Container>
    )
}

export default LandingPage