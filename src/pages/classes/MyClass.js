import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col } from 'react-bootstrap'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ClassCard from '../../components/ClassCart';
import AddClassdModal from './AddClassModal'

class MyClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            items: [],
            DataisLoaded: false
        };
    }

    fetchClassList() {
        fetch("https://build-class-api.herokuapp.com/course")
            .then(res => res.json())
            .then((json) => {
                this.setState({
                    items: json.course,
                    DataisLoaded: true
                });
            });
    }



    setModalShow() {
        this.setState({ modalShow: !this.state.modalShow })
    }

    componentDidMount() {
        this.fetchClassList();
    }

    componentDidUpdate(){
        this.fetchClassList();
    }

    render() {
        const { DataisLoaded, items } = this.state;
        console.log("huhu");
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <>
                <div className="empty"></div>
                <div className="empty"></div>
                <Container>
                    <div className="d-flex">
                        <h3>Lớp học của tôi</h3>
                        <Button variant="primary" onClick={() => this.setModalShow()}>
                            <FontAwesomeIcon icon={faPlus} />Thêm
                        </Button>

                        <AddClassdModal
                            show={this.state.modalShow}
                            onHide={() => this.setModalShow()}
                        />
                    </div>
                    <div className="empty"></div>

                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            items.map(item => (
                                <Col key={item.id} >
                                    <ClassCard
                                        name={item.name}
                                        teacher={item.teacher}
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