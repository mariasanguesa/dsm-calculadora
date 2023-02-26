import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Output = (props) => {
    return (
        <Container>
            <hr></hr>
            <Row>
                <p>Resultado: {props.output}</p>
            </Row>
        </Container>
    )
}
export default Output;