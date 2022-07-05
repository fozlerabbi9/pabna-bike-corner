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
    // console.log(user.email);
    const logOutFun = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav className='nav-style'>
                <Navbar collapseOnSelect expand="lg" className='child-div'>
                    {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
                    <Container className='child-child-div'>
                        <Navbar.Brand className='button' as={Link} to="/" href="#home">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-danger' />
                        <Navbar.Collapse className='child-child2-div' id="responsive-navbar-nav" >
                            <Nav className="me-auto">
                                {/* <Nav.Link as={Link} to="/blogs" href="#deets">blogs</Nav.Link> */}
                            </Nav>
                            <Nav>
                                <Nav.Link className='child-button' as={Link} to="/blogs" href="#deets">blogs</Nav.Link>
                                {
                                    user ?
                                        <>
                                            <Nav.Link className='child-button' as={Link} to="addItem" href="#features">Add-Item</Nav.Link>
                                            <Nav.Link className='child-button' as={Link} to="manageData" href="#features">manageData</Nav.Link>
                                            <Nav.Link className='child-button' as={Link} to="myItem" href="#features">myItem</Nav.Link>
                                            <Nav.Link className='child-button child-button-danger' onClick={() => logOutFun()} as={Link} to="login" href="#features">Log-Out</Nav.Link>
                                        </>
                                        :
                                        <>
                                            <Nav.Link className='child-button' as={Link} to="login" href="#features">Login</Nav.Link>
                                        </>
                                }

                                <Nav.Link className='child-button' as={Link} to="registation" href="#pricing">Sign-in</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </div>
    );
};

export default Header;