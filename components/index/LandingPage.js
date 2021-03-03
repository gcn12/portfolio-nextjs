import { useEffect } from 'react'
// import './test.css'
import {
    Container, 
    LargeText,
    SmallText,
    Colored,
    OrangeButton,
} from './LandingPage.styles'

const LandingPage = (props) => {
    useEffect(()=> {
        props.setViewedHome(true)
    },[])
    const isViewed = props.viewedHome
    return(
        <Container>
            <div style={{display: 'flex'}}>
                <div>
                    <LargeText>
                        {console.log(props.viewedHome)}
                        I'm <Colored>Gareth Ng,</Colored> a React.js developer.
                    </LargeText>
                    <SmallText>
                        I'm passionate about performant code and good design.
                    </SmallText>
                </div>
            </div>
            <OrangeButton rel='nonreferrer noopener' target='_blank' href='resume.pdf'>View Resume</OrangeButton>
        </Container>
    )
}

export default LandingPage