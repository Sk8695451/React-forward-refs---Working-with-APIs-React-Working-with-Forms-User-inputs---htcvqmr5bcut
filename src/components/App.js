import React ,{useRef,useState,useEffect} from 'react'
import '../styles/App.css';
import InputField from './InputField.js';
const App = () => {
 
//code here
 const [value2, setValue2] = useState("");
  const [value, setValue] = useState("");
  const newRef = useRef(null);

  const settingValue = () => {
    setValue2(value);
    setValue("");
  }
  const focusInput = (event) => {
    newRef.current.focus();
  }
  const handle = () => { }



 
  return (
    <div>
    <InputField value={value} ref={newRef}  type="text" setValue={setValue}/><br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea" value={value2} onChange={handle}></textarea>

    </div>
  );
}


export default App;