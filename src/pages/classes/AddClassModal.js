import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Modal, } from 'react-bootstrap'
import React, { useState } from 'react';

function AddClassdModal({ show, onHide }) {
    const [snackbareopen, setSnack] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://build-class-api.herokuapp.com/course", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: e.target.name.value,
                teacher: e.target.teacher.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                setSnack(true);
                alert("Thêm thành công.");
            }, (error) => {
                alert(error);
              });
    
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thêm lớp học
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Tên lớp học</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="teacher">
                        <Form.Label>Tên giảng viên</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="teacher">
                        <Button type='submit'>Xác nhận</Button>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Đóng</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddClassdModal;


