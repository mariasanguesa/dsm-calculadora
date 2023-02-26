import Header from './Components/UI/Header';
import Input from './Components/Input';
import Output from './Components/Output';
import Buttons from './Components/Buttons';
import { useState } from 'react';



function App() {

  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');

  const [output, setOutput] = useState('');

  const inputAHandler = (event) => {
    setInputA(event.target.value);
  }

  const inputBHandler = (event) => {
    setInputB(event.target.value);
  }

  const operacion = (event) => {
    let out = Number(inputA) + Number(inputB);
    if (event === '-') {
      out = Number(inputA) - Number(inputB);
    } else if (event === 'x') {
      out = Number(inputA) * Number(inputB);
    }else if (event === '/'){
      out = Number(inputA) / Number(inputB);
    }
    setOutput(out);
  }

  return (
    <div>
      <Header />
      <Input inputAHandler={inputAHandler} inputBHandler={inputBHandler} />
      <Buttons operacion={operacion} />
      <Output output={output} />
    </div>
  );
}

export default App;
