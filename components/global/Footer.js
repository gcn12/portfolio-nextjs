import Link from 'next/link'
import {
    Container,
    Name, 
    Social,
    SocialContainer,
    Gap,
} from './Footer.styles'

const Footer = () => {
    return(
        <Container>
            <Name><Link href='/'>Gareth Ng</Link></Name>
            <SocialContainer>
                <Social rel='nonreferrer noopener' target='_blank' href='https://www.linkedin.com/in/garethcng'>LinkedIn</Social>
                <Gap />
                <Social rel='nonreferrer noopener' target='_blank'  href='https://www.instagram.com/gareth.ng'>Instagram</Social>
                <Gap />
                <Social rel='nonreferrer noopener' target='_blank'  href='https://github.com/gcn12'>GitHub</Social>
            </SocialContainer>
        </Container>
    )
}

export default Footer