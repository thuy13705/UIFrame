import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, Col } from 'react-bootstrap'
import React from 'react';
function Footer() {
    return (
        <><div className="empty"></div>
       <div className="footer">
       <Container>
            <div className="d-flex">
                <Col>
                    <ListGroup>
                        <h3>About</h3>
                        <p>Sitemap</p>
                        <p>Contact Us</p>
                        <p>Religious Ceremonies</p>
                        <p>Gazebo Plans</p>
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup>
                        <h3>Preferences</h3>
                        <p>Banana Pre-Order</p>
                        <p>DNA FAQ</p>
                        <p>How To Access</p>
                        <p>Favorite X-Men</p>
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup>
                        <h3>About</h3>
                        <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                    </ListGroup>
                </Col>
            </div>
        </Container>
       </div>
       </>
            );

}
            export default Footer;

