import {
    Container, 
    LargeText,
    SmallText,
    Illustration,
} from './LandingPage.styles'

const LandingPage = () => {
    return(
        <Container>
            <div style={{display: 'flex'}}>
                <div>
                    <LargeText>
                        I'm Gareth, a React.js developer.
                    </LargeText>
                    <SmallText>
                        I'm passionate about performant code and good design.
                    </SmallText>
                </div>
                <Illustration src='/08.png' />
            </div>
        </Container>
    )
}

export default LandingPage