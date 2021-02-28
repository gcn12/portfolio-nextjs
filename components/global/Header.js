import Link from 'next/link'
import {
    Container,
    Title,
    UL,
    LI,
    Gap,
} from './Header.styles'

const Header = () => {
    return (
        <Container>
            <Link passHref={true} href='/'>
                <Title>Gareth Ng</Title>
            </Link>
            <UL>
                <LI>
                    <Link passHref={true} href='/about'>
                        <a>About</a>
                    </Link>
                </LI>
                <Gap />
                <LI>
                    <Link href='/contact'>
                        <a>Contact</a>
                    </Link>
                </LI>
            </UL>
        </Container>
    )
}

export default Header