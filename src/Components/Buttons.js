import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

const Buttons = (props) => {

    const [activeAdd, setActiveAdd] = useState(false);
    const [activeSub, setActiveSub] = useState(false);
    const [activeMul, setActiveMul] = useState(false);
    const [activeDiv, setActiveDiv] = useState(false);

    const operacionHandler = (event) => {
        props.operacion(event.target.value);

        if (event.target.value === '-') {
            setActiveSub(true);
        } else if (event.target.value === 'x') {
            setActiveMul(true);
        }
        else if (event.target.value === '+') {
            setActiveAdd(true);

        } else if (event.target.value === '/') {
            setActiveDiv(true);
        }
    }

    const onBlurHandler = () => {
        setActiveAdd(false);
        setActiveSub(false);
        setActiveMul(false);
        setActiveDiv(false);
    }

    return (
        <Container>
            <hr></hr>
            <Row>
                <Col>
                    <Button onBlur={onBlurHandler} onClick={operacionHandler} variant={`${activeAdd ? 'btn btn-outline-primary active':'btn btn-outline-primary'}`} value={'+'}>+</Button>
                </Col>
                <Col>
                    <Button onBlur={onBlurHandler} onClick={operacionHandler} variant={`${activeSub ? 'btn btn-outline-primary active':'btn btn-outline-primary'}`} value={'-'}>−</Button>
                </Col>
                <Col>
                    <Button onBlur={onBlurHandler} onClick={operacionHandler} variant={`${activeMul ? 'btn btn-outline-primary active':'btn btn-outline-primary'}`} value={'x'}>×</Button>
                </Col>
                <Col>
                    <Button onBlur={onBlurHandler} onClick={operacionHandler} variant={`${activeDiv ? 'btn btn-outline-primary active':'btn btn-outline-primary'}`} value={'/'}>÷</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Buttons;