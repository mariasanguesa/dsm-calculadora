import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Buttons = () => {
    return (
        <Container>
            <hr></hr>
            <Row>
                <Col>
                    <Button>+</Button>
                </Col>
                <Col>
                    <Button>−</Button>
                </Col>
                <Col>
                    <Button>×</Button>
                </Col>
                <Col>
                    <Button>÷</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Buttons;