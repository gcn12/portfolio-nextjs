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
    SunMoon, 
    MobileHeader,
} from './Header.styles'

const Header = (props) => {
    const router = useRouter()

    const openMenu = () => {
        props.setIsModalOpen(true)
        disableBodyScroll(document)
        props.setIsModalVisible(true)
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
                        <a target='_blank' href='https://firebasestorage.googleapis.com/v0/b/portfolio-assets.appspot.com/o/resume.pdf?alt=media&token=0378979f-3767-4b0c-8c63-992f186c7e33' rel='nonreferrer noopener'>resume</a>
                    </LI>
                    <Gap />
                    <LI role='button' label='dark mode toggle' underline='0px'>
                        {props.isLightMode ? 
                        <SunMoon type='image' onClick={()=>props.setIsLightMode(false)}  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTAuOTk5YzEuNDM3LjQzOCAyLjU2MiAxLjU2NCAyLjk5OSAzLjAwMS40NC0xLjQzNyAxLjU2NS0yLjU2MiAzLjAwMS0zLTEuNDM2LS40MzktMi41NjEtMS41NjMtMy4wMDEtMy0uNDM3IDEuNDM2LTEuNTYyIDIuNTYxLTIuOTk5IDIuOTk5em04LjAwMS4wMDFjLjk1OC4yOTMgMS43MDcgMS4wNDIgMiAyLjAwMS4yOTEtLjk1OSAxLjA0Mi0xLjcwOSAxLjk5OS0yLjAwMS0uOTU3LS4yOTItMS43MDctMS4wNDItMi0yLS4yOTMuOTU4LTEuMDQyIDEuNzA4LTEuOTk5IDJ6bS0xLTljLS40MzcgMS40MzctMS41NjMgMi41NjItMi45OTggMy4wMDEgMS40MzguNDQgMi41NjEgMS41NjQgMy4wMDEgMy4wMDIuNDM3LTEuNDM4IDEuNTYzLTIuNTYzIDIuOTk2LTMuMDAyLTEuNDMzLS40MzctMi41NTktMS41NjQtMi45OTktMy4wMDF6bS03LjAwMSAyMmMtNi42MTcgMC0xMi01LjM4My0xMi0xMnM1LjM4My0xMiAxMi0xMmMxLjg5NCAwIDMuNjMuNDk3IDUuMzcgMS4xNzktMi45NDguNTA0LTkuMzcgMy4yNjYtOS4zNyAxMC44MjEgMCA3LjQ1NCA1LjkxNyAxMC4yMDggOS4zNyAxMC44MjEtMS41Ljg0Ni0zLjQ3NiAxLjE3OS01LjM3IDEuMTc5eiIvPjwvc3ZnPg==" />
                        :
                        <SunMoon type='image' onClick={()=>props.setIsLightMode(true)} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptNi4zMTItMTAuODk3Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02eiIvPjwvc3ZnPg==" />
                        }
                    </LI>
                </UL>
                <MobileHeader>
                    <Hamburger type='image' onClick={openMenu} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNmgtMjR2LTRoMjR2NHptMCA0aC0yNHY0aDI0di00em0wIDhoLTI0djRoMjR2LTR6Ii8+PC9zdmc+" />
                </MobileHeader>
                <MobileNavigation setIsLightMode={props.setIsLightMode} isLightMode={props.isLightMode} isModalVisible={props.isModalVisible} isModalOpen={props.isModalOpen} router={router} closeMenu={closeMenu} />
            </Nav>
        </Container>
    )
}

export default Header