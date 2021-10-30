import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import Button from '@restart/ui/esm/Button';
import EditClassdModal from '../pages/classes/EditClassModal';
import DeleteClassdModal from '../pages/classes/DeleteClassModal';


function ClassCard({classItem}) {
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const handleModalEditShow = () => {
        setModalEdit(!modalEdit);
    }
    
    const handleModalDeleteShow = () => {
        setModalDelete(!modalDelete);
    }

    return (

        <Card>
            <Card.Header>
                <Card.Title className="title">
                    <FontAwesomeIcon icon={faBook} />
                    {classItem.name}
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Title className="title">
                    <FontAwesomeIcon icon={faUser} />
                    Giảng viên
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{classItem.teacher}</Card.Subtitle>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" className="btn-card btn-edit" onClick={() => handleModalEditShow()}>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <EditClassdModal
                    item={classItem}
                    show={modalEdit}
                    onHide={() => handleModalEditShow()}
                />

                <Button variant="primary" onClick={() => handleModalDeleteShow()}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>

                <DeleteClassdModal
                    item={classItem}
                    show={modalDelete}
                    onHide={() => handleModalDeleteShow()}
                />
            </Card.Footer>
        </Card>
    );

}
export default ClassCard;