import 'bootstrap/dist/css/bootstrap.min.css';
import { Card} from 'react-bootstrap'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser } from '@fortawesome/free-solid-svg-icons'


function ClassCard({ name, teacher }) {
    return (

        <Card>
            <Card.Header>
                <Card.Title className="title">
                    <FontAwesomeIcon icon={faBook} />
                    {name}
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Title className="title">
                <FontAwesomeIcon icon={faUser} />
                    Giảng viên
                    </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{teacher}</Card.Subtitle>
            </Card.Body>

        </Card>
    );

}
export default ClassCard;