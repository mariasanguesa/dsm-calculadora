import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Buttons = (props) => {

    const operacionHandler = (event) => {
        props.operacion(event.target.value);
    }

    return (
        <Container>
            <hr></hr>
            <Row>
                <Col>
                    <Button onClick={operacionHandler} value={'+'}>+</Button>
                </Col>
                <Col>
                    <Button onClick={operacionHandler} value={'-'}>−</Button>
                </Col>
                <Col>
                    <Button onClick={operacionHandler} value={'x'}>×</Button>
                </Col>
                <Col>
                    <Button onClick={operacionHandler} value={'/'}>÷</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Buttons;