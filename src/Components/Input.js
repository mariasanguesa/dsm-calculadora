import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Input = () => {
    return (
        <Form >
            <Container>
                <Row>
                    <Col><Form.Label>A: </Form.Label>
                        <Form.Control type='number' />
                    </Col>
                    <Col><Form.Label>B: </Form.Label>
                        <Form.Control type='number' />
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}
export default Input;