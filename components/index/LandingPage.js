import {
    Container, 
    LargeText,
    SmallText,
    Colored,
} from './LandingPage.styles'

const LandingPage = () => {
    return(
        <Container>
            <div style={{display: 'flex'}}>
                <div>
                    <LargeText>
                        I'm <Colored>Gareth Ng,</Colored> a React.js developer.
                    </LargeText>
                    <SmallText>
                        I'm passionate about performant code and good design.
                    </SmallText>
                </div>
            </div>
        </Container>
    )
}

export default LandingPage