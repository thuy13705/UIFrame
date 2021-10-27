import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react';
import ClassCard from '../../components/ClassCart';
import CarouselHome from './CarouselHome';


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
        // if (!DataisLoaded) return <div>
        //     <h1> Pleses wait some time.... </h1> </div>;

        return (
            <>
                <Container>
                    <CarouselHome className="d-4"/>
                    <div className="empty"></div>
                    <h3> Trang chủ </h3>
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