import { Container, Nav, Navbar, } from 'react-bootstrap';
import "./Header.css"
import React from 'react';
import images1 from "./images/logo.png"

function Header() {
    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={images1} alt='' className='mainlogo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll" className='navscroll' >
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', fontWeight: "" }}
                            navbarScrol>
                            <Nav.Link href="#action1" className='navs'>BLOG</Nav.Link>
                            <Nav.Link href="#action2" className='navs'>ABOUT</Nav.Link>
                            <Nav.Link href="#action1" className='navs'>LINKS</Nav.Link>
                            <Nav.Link href="#action2" className='navs'>PROJECTS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col text-center text1'>
                     <h1>A few words about this blog<br/> platform,Ghost and how this<br /> site was made</h1>
                    </div>
                </div>
                <div className='row justify-content-center mt-3'>
                <div className='col-6 text-center'>
                   <p>lorem ipsum wht ghost is figm is a result wordpress or other option <br />lorem ipsum wht ghost is figm is<br /> a result wordpress or other option</p>
                </div>
                </div>
            </div>
        </>
    );
}

export default Header;