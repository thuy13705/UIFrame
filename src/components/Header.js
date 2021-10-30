import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, FormControl,Button} from 'react-bootstrap'
import useState from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import {
    NavLink
  } from 'react-router-dom'

function Header() {
    // const [activeItem,setActiveItem]=useState(activeItemProp);

    // const onMenuItemClick = (e, {name}) => {
    //     setActiveItem(name)
    // };

    return (

        <Navbar expand="lg" sticky="top">
            <Container>
                <Navbar.Brand >My Class</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <NavLink to="/" className="nav-link">Trang chủ</NavLink> */}
                        <NavLink to="/" className="nav-link">Lớp của tôi</NavLink>

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
                        <NavLink to="/login" className="nav-link">Đăng nhập</NavLink>
                        <NavLink to="/signup" className="nav-link">Đăng kí</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
export default Header;