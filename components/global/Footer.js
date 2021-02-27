import {
    Container,
    Name, 
    Social,
    SocialContainer,
} from './Footer.styles'

const Footer = () => {
    return(
        <Container>
            <Name>Gareth Ng</Name>
            <SocialContainer>
                <Social href='https://www.linkedin.com/in/garethcng'>LinkedIn</Social>
                <Social href='https://www.instagram.com/gareth.ng'>Instagram</Social>
                <Social href='https://github.com/gcn12'>GitHub</Social>
            </SocialContainer>
        </Container>
    )
}

export default Footer