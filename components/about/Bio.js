import {
    Container,
    Illustration,
    SmallText,
    LargeText,
    CineLink,
    ArrowQuote,
    ArrowQuoteContainer,
    ArrowIcon,
} from './Bio.styles'

const Bio = (props) => {
    return(
        <Container>
            <Illustration alt='profile' onLoad={props.closeModal} src='/profile.jpg' />
            {/* <Illustration onLoad={props.closeModal} src='https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/profile_small-2-2.jpg?alt=media&token=25e46a01-5444-437a-beca-f9b984852c73' /> */}
            {/* <Illustration onLoad={props.closeModal} src='https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/about_image_small.png?alt=media&token=fb050f1b-2872-4767-9acd-6053172e5797' /> */}
            <div>
                <LargeText>Thanks for stopping by!</LargeText>
                <SmallText>
                I'm Gareth, a front-end developer who specializes in React.js. After working in the film industry as a 
                camera assistant and <CineLink rel='nonreferrer noopener' target='_blank' href='https://gcn12.github.io/film-portfolio/'>cinematographer</CineLink>, 
                I decided to make a career change into the programming world. 
                </SmallText>
                <ArrowQuoteContainer>
                    <ArrowQuote>Film industry</ArrowQuote>
                        <ArrowIcon alt='arrow' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMS44ODMgMTJsLTcuNTI3IDYuMjM1LjY0NC43NjUgOS03LjUyMS05LTcuNDc5LS42NDUuNzY0IDcuNTI5IDYuMjM2aC0yMS44ODR2MWgyMS44ODN6Ii8+PC9zdmc+" />
                    <ArrowQuote>tech industry</ArrowQuote>
                </ArrowQuoteContainer>
            </div>
        </Container>
    )
}

export default Bio