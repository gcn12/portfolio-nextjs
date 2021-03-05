import Link from 'next/link'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import MobileNavigation from './MobileNavigation'
import { useRouter } from 'next/router'
import {
    Container,
    Title,
    UL,
    LI,
    Gap,
    Nav,
    Hamburger,
} from './Header.styles'

const Header = (props) => {
    const router = useRouter()

    const openMenu = () => {
        props.setIsModalOpen(true)
        disableBodyScroll(document)
        props.setIsModalVisible(true)
        console.log(props.isModalOpen)
    }

    const closeMenu = () => {
        props.setIsModalOpen(false)
        enableBodyScroll(document)
        setTimeout(()=> props.setIsModalVisible(false), 500)
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
                <Hamburger type='image' onClick={openMenu} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNmgtMjR2LTRoMjR2NHptMCA0aC0yNHY0aDI0di00em0wIDhoLTI0djRoMjR2LTR6Ii8+PC9zdmc+" />

                {/* {props.isModalOpen && <MobileNavigation isModalOpen={props.isModalOpen} router={router} closeMenu={closeMenu} />} */}
                <MobileNavigation isModalVisible={props.isModalVisible} isModalOpen={props.isModalOpen} router={router} closeMenu={closeMenu} />
            </Nav>
        </Container>
    )
}

export default Header