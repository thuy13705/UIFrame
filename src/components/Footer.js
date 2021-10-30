import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, Col } from 'react-bootstrap'
import React from 'react';
function Footer() {
    return (
        <><div className="empty"></div>
       <div className="footer">
       <Container>
            <div className="d-flex">
                    <ListGroup>
                        <h3>Về chúng tôi</h3>
                        <p>Giới thiệu</p>
                        <p>Câu hỏi thường gặp</p>
                        <p>Chính sách bảo mật</p>
                        <p>Gazebo Plans</p>
                    </ListGroup>
                    <ListGroup>
                        <h3>Thông tin</h3>
                        <p>Facebook: https://fb.com.vn/thuynguyen</p>
                        <p>Email: myclassweb@gmail.com</p>
                        <p>SĐT: 0937 948 3764</p>
                        <p>Youtube: https://youtube.com.vn/thuynguyen</p>
                    </ListGroup>
            </div>
        </Container>
       </div>
       </>
            );

}
            export default Footer;

