import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col } from 'react-bootstrap'
import {useEffect,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ClassCard from '../../components/ClassCart';
import AddClassdModal from './AddClassModal'

function MyClass() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [items, setItems] = useState([]);

    const fetchClassList=()=>{
        fetch("https://build-class-api.herokuapp.com/course")
            .then(res => res.json())
            .then((json) => {
                setIsLoaded(true);
                setItems(json.course);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
              });
    }



    const handleModalShow=()=>{
        setModalShow(!modalShow);
    }

    useEffect(() => {
        fetchClassList();
      })

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <>
                <div className="empty"></div>
                <div className="empty"></div>
                <Container>
                    <div className="d-flex">
                        <h3>Lớp học của tôi</h3>
                        <Button variant="primary" onClick={() => handleModalShow()}>
                            <FontAwesomeIcon icon={faPlus} />Thêm
                        </Button>

                        <AddClassdModal
                            show={modalShow}
                            onHide={() => handleModalShow()}
                        />
                    </div>
                    <div className="empty"></div>

                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            items.map(item => (
                                <Col key={item.id} >
                                    <ClassCard
                                        classItem={item}
                                    ></ClassCard>
                                </Col>
                            ))
                        }
                    </Row>

                </Container>
            </>
        );
      }

}
export default MyClass;