import Link from 'next/link'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import MobileNavigation from './MobileNavigation'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
    Container,
    Title,
    UL,
    LI,
    Gap,
    Nav,
    Hamburger,
} from './Header.styles'

const Header = () => {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        setIsMenuOpen(true)
        disableBodyScroll(document)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
        enableBodyScroll(document)
    }

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
                        <Link passHref={true} href='/contact'>
                            <a>contact</a>
                        </Link>
                    </LI>
                    <Gap />
                    <LI underline='0px'>
                        <a target='_blank' href='resume.pdf' rel='nonreferrer noopener'>resume</a>
                    </LI>
                </UL>
                {isMenuOpen ? 
                <Hamburger onClick={closeMenu} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMjAuMTg4bC04LjMxNS04LjIwOSA4LjItOC4yODItMy42OTctMy42OTctOC4yMTIgOC4zMTgtOC4zMS04LjIwMy0zLjY2NiAzLjY2NiA4LjMyMSA4LjI0LTguMjA2IDguMzEzIDMuNjY2IDMuNjY2IDguMjM3LTguMzE4IDguMjg1IDguMjAzeiIvPjwvc3ZnPg==" />
                :
                <Hamburger onClick={openMenu} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNmgtMjR2LTRoMjR2NHptMCA0aC0yNHY0aDI0di00em0wIDhoLTI0djRoMjR2LTR6Ii8+PC9zdmc+" />
                }
                {isMenuOpen && <MobileNavigation closeMenu={closeMenu} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
            </Nav>
        </Container>
    )
}

export default Header