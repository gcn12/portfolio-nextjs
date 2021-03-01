import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    Container,
    Title,
    UL,
    LI,
    Gap,
    Nav,
} from './Header.styles'

const Header = () => {
    const router = useRouter()
    return (
        <Container>
            <Nav>
                <Link passHref={true} href='/'>
                    <Title>gareth ng</Title>
                </Link>
                <UL>
                    <LI underline={router.pathname==='/about' ? '2px' : '0px'}>
                        <Link passHref={true} href='/about'>
                            <a>about</a>
                        </Link>
                    </LI>
                    <Gap />
                    <LI underline={router.pathname==='/contact' ? '2px' : '0px'}>
                        <Link href='/contact'>
                            <a>contact</a>
                        </Link>
                    </LI>
                    <Gap />
                    <LI underline='0px'>
                        <a target='_blank' href='resume.pdf' rel='nonreferrer noopener'>resume</a>
                    </LI>
                </UL>
            </Nav>
        </Container>
    )
}

export default Header