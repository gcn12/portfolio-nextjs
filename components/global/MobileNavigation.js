import Link from 'next/link'
import {
    Container,
    Nav,
    NavItem,
    Hamburger,
} from './MobileNavigation.styles'

const MobileNavigation = (props) => {

    const checkIfOnPage = (path) => {
        if(props.router.pathname === path) {
            props.closeMenu()
        }
    }

    return(
        <Container isModalVisible={props.isModalVisible}  isModalOpen={props.isModalOpen}>
            <Hamburger type='image' onClick={props.closeMenu} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMjAuMTg4bC04LjMxNS04LjIwOSA4LjItOC4yODItMy42OTctMy42OTctOC4yMTIgOC4zMTgtOC4zMS04LjIwMy0zLjY2NiAzLjY2NiA4LjMyMSA4LjI0LTguMjA2IDguMzEzIDMuNjY2IDMuNjY2IDguMjM3LTguMzE4IDguMjg1IDguMjAzeiIvPjwvc3ZnPg==" />
            <Nav isModalVisible={props.isModalVisible} isModalOpen={props.isModalOpen}>
                <Link passHref={true} href='/'>
                    <NavItem onClick={()=>checkIfOnPage('/')} underline={props.router.pathname==='/' ? '2px' : '0px'}>home</NavItem>
                </Link>
                <Link passHref={true} href='/about'>
                    <NavItem onClick={()=>checkIfOnPage('/about')} underline={props.router.pathname==='/about' ? '2px' : '0px'}>about</NavItem>
                </Link>
                <Link  passHref={true} href='/contact'>
                    <NavItem onClick={()=>checkIfOnPage('/contact')} underline={props.router.pathname==='/contact' ? '2px' : '0px'}>contact</NavItem>
                </Link>
                <NavItem target='_blank' href='resume.pdf' rel='nonreferrer noopener' onClick={props.closeMenu} underline='0px'>resume</NavItem>
            </Nav>
        </Container>
    )
}

export default MobileNavigation