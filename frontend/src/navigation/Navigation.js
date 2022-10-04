import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {

    const user = useSelector((state) => state.userStore.user);
    console.log('ova e podatokot od useSelector user ', user);

    useEffect(() => {
        console.log("user > ", user);
    }, [user]);

    const userBtnLayout = () => {
        return user.hasOwnProperty('username') ? user.username :
            // <Link className="nav-link active" aria-current="page" to="/authPage">Login/Register</Link>
            <Nav.Link href="/authPage">Login/Register</Nav.Link>

    }

    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">E-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/authPage">{userBtnLayout()}</Nav.Link>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    )


}

export default Navigation;

