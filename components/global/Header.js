import Link from 'next/link'
import {
    Container,
    Title,
    UL,
    LI,
} from './Header.styles'

const Header = () => {
    return (
        <Container>
            <Link passHref={true} href='/'>
                <Title>GARETH NG</Title>
            </Link>
            <UL>
                <LI>
                    <Link passHref={true} href='/about'>
                        <a>ABOUT</a>
                    </Link>
                </LI>
                <LI>
                    <Link href='/contact'>
                        <a>CONTACT</a>
                    </Link>
                </LI>
            </UL>
        </Container>
    )
}

export default Header