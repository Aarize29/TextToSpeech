import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Speech from './component/Speech'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Text from './component/Text'
function App() {
 
  return (
    <Router>
    <div className="App">

       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/speech' element={<Speech/>}/>
          <Route path='/text' element={<Text/>}/>
          <Route path='/about' element={<About/>}/>
          
       </Routes>
        
        
      </div>
    </Router>
  )
}

export default App
