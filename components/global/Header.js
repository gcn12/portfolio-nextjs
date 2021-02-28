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
                <Title>gareth ng</Title>
            </Link>
            <UL>
                <LI>
                    <Link passHref={true} href='/about'>
                        <a>about</a>
                    </Link>
                </LI>
                <Gap />
                <LI>
                    <Link href='/contact'>
                        <a>contact</a>
                    </Link>
                </LI>
                <Gap />
                <LI>
                    {/* <Link> */}
                        <a>resume</a>
                    {/* </Link> */}
                </LI>
            </UL>
        </Container>
    )
}

export default Header