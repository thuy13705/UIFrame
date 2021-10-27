import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, FormControl,Button} from 'react-bootstrap'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (

        <Navbar expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">My Class</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Trang chủ</Nav.Link>
                        <Nav.Link href="/course">Lớp của tôi</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Tìm..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className="btn-search">
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </Button>
                    </Form>
                    <Nav>
                        <Nav.Link href="#deets">Đăng nhập</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Đăng kí
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
export default Header;