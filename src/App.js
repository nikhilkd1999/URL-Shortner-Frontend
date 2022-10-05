import { useState } from 'react';
import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");


  // const cors = require('cors');
  // const corsOptions ={
  //   origin:'http://localhost:3000', 
  //   credentials:true,            //access-control-allow-credentials:true
  //   optionSuccessStatus:200
  // }

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
