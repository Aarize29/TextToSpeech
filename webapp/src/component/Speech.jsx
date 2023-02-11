import React, {useState} from 'react'
import './Speech.css'
import  {useSpeechSynthesis} from 'react-speech-kit'
import { useNavigate } from 'react-router-dom'
const Speech = () => {
    const navigate = useNavigate();
    const goToText = () => {
        navigate('/text')
    }
    const [value,setValue] = useState('');
    const {speak} = useSpeechSynthesis();
    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    const convert=()=>{
        speak({text:value});
    }
  return (
    <div className='mainbody'>
    
     <button onClick={goToText} className='navigate'>Try Speech To Text</button>
  
    <div className='main'>
      <h2>Text To Speech Converter</h2>
        <div className="input">
            <textarea type="text" placeholder="Enter Text Here" value={value} onChange={handleChange}/>
            <div>
            <button onClick={convert}>Convert</button>
            </div>
           
        </div>
    </div>
    </div>
   
  )
}

export default Speech
