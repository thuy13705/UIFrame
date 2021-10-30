import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Modal, } from 'react-bootstrap'
import React, { useState } from 'react';

function DeleteClassdModal({item, show, onHide }) {
    const [snackbareopen, setSnack] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://build-class-api.herokuapp.com/course"+item.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((result) => {
                setSnack(true);
                alert("Xoá thành công.");
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
            <Modal.Body closeButton>
                <h6>Bạn có chắc chắn xoá lớp này không?</h6>
                <Button onClick={handleSubmit}>Xác nhận</Button>
            <Button onClick={onHide}>Huỷ</Button>
            </Modal.Body>
        </Modal>
    );
}

export default DeleteClassdModal;


