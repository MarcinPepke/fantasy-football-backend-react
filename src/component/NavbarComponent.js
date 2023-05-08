import react from 'react';
import {Navbar, Nav} from 'react-bootstrap';


const NavbarComponent = ()  => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className={"d-flex justify-content-center"}>
            <Navbar.Brand href="/">Fantasy Football</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/transfers">Transfers</Nav.Link>
                    <Nav.Link href="/my-team">My Team</Nav.Link>
                    <Nav.Link href="/ranking">Ranking</Nav.Link>
                    <Nav.Link href="/fixtures">Fixtures</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarComponent;