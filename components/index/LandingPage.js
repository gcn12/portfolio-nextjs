import { useEffect } from 'react'
// import './test.css'
import {
    Container, 
    LargeText,
    SmallText,
    Colored,
    OrangeButton,
    ButtonContainer,
} from './LandingPage.styles'

const LandingPage = (props) => {
    useEffect(()=> {
        props.setViewedHome(true)
        setTimeout(()=> props.setHomeButtonScaled(true), 2000)
    },[])
    return(
        <Container>
            <div style={{display: 'flex'}}>
                <div>
                    <LargeText pageLoaded={props.viewedHome}>
                        I'm <Colored>Gareth Ng,</Colored> a React.js developer.
                    </LargeText>
                    <SmallText pageLoaded={props.viewedHome}>
                        I'm focused on performant code and good design.
                    </SmallText>
                </div>
            </div>
            {/* <ButtonContainer pageLoaded={props.viewedHome}> */}
                <OrangeButton pageLoaded={props.viewedHome} pageLoadedScale={props.homeButtonScaled ? null : props.viewedHome} rel='nonreferrer noopener' target='_blank' href='https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/resume.pdf?alt=media&token=0378979f-3767-4b0c-8c63-992f186c7e33'>View Resume</OrangeButton>
            {/* </ButtonContainer> */}
        </Container>
    )
}

export default LandingPage