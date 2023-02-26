import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Buttons = (props) => {

    const [activeAdd, setActiveAdd] = useState("btn btn-outline-primary");
    const [activeSub, setActiveSub] = useState("btn btn-outline-primary");
    const [activeMul, setActiveMul] = useState("btn btn-outline-primary");
    const [activeDiv, setActiveDiv] = useState("btn btn-outline-primary");

    const operacionHandler = (event) => {
        props.operacion(event.target.value);

        if (event.target.value === '-') {
            setActiveSub("btn btn-outline-primary active");
            setActiveMul("btn btn-outline-primary");
            setActiveAdd("btn btn-outline-primary");
            setActiveDiv("btn btn-outline-primary");

        } else if (event.target.value === 'x') {
            setActiveMul("btn btn-outline-primary active");
            setActiveSub("btn btn-outline-primary");
            setActiveAdd("btn btn-outline-primary");
            setActiveDiv("btn btn-outline-primary");
        }
        else if (event.target.value === '+') {
            setActiveAdd("btn btn-outline-primary active");
            setActiveSub("btn btn-outline-primary");
            setActiveMul("btn btn-outline-primary");
            setActiveDiv("btn btn-outline-primary");

        } else if (event.target.value === '/') {
            setActiveDiv("btn btn-outline-primary active");
            setActiveSub("btn btn-outline-primary");
            setActiveMul("btn btn-outline-primary");
            setActiveAdd("btn btn-outline-primary");
        }
    }


    return (
        <Container>
            <hr></hr>
            <Row>
                <Col>
                    <Button onClick={operacionHandler} variant={activeAdd} value={'+'}>+</Button>
                </Col>
                <Col>
                    <Button onClick={operacionHandler} variant={activeSub} value={'-'}>−</Button>
                </Col>
                <Col>
                    <Button onClick={operacionHandler} variant={activeMul} value={'x'}>×</Button>
                </Col>
                <Col>
                    <Button onClick={operacionHandler} variant={activeDiv} value={'/'}>÷</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Buttons;