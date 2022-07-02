import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const logOutFun = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav className='nav-style'>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/" href="#home">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {/* <Nav.Link as={Link} to="/blogs" href="#deets">blogs</Nav.Link> */}
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/blogs" href="#deets">blogs</Nav.Link>
                                {
                                    user ?
                                        <>
                                            <Nav.Link as={Link} to="manageData" href="#features">manageData</Nav.Link>
                                            <Nav.Link as={Link} to="addItem" href="#features">Add-Item</Nav.Link>
                                            <Nav.Link className='text-danger' onClick={() => logOutFun()} as={Link} to="login" href="#features">Log-Out</Nav.Link>
                                        </>
                                        :
                                        <>
                                            <Nav.Link as={Link} to="login" href="#features">Login</Nav.Link>
                                        </>
                                }

                                <Nav.Link as={Link} to="registation" href="#pricing">Sign-in</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </div>
    );
};

export default Header;