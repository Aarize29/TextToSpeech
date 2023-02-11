import React,{useState} from 'react'
import './Text.css'
import {BsMicFill} from 'react-icons/bs'
import {BsFillXSquareFill} from 'react-icons/bs'
import { useSpeechRecognition } from 'react-speech-kit'
import { useNavigate } from 'react-router-dom'
const Text = () => {
    const navigate = useNavigate();
    const goToSpeech = () => {
        navigate('/speech')
    }
  const [value,setValue] = useState('');

    const { listen, listening, stop } = useSpeechRecognition({
        onResult: result => {
            setValue(result)
        },
    })
     const speak=()=>{
         
         setValue('')
         if (listening) {
             stop()
         } else {
             listen({ continuous: true })
         }
     }
  return (
    <div className='main2'>
        <button onClick={goToSpeech} className='navigate'>Try Text To Speech</button>
      <h2> Speech To Text Converter</h2>
        <div className="input">
            <h1 className='mic' onClick={speak}><BsMicFill/> {listening && <div><BsFillXSquareFill/></div> } </h1>
            <h1 className='response'>{listening && <div>Go ahead I'm listening ....</div>}</h1>
            <textarea type="text" placeholder="Speak to get text here" value={value}/>
           
        </div>
    </div>
  )
}

export default Text
