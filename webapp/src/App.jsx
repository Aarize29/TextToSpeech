import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Speech from "./component/Speech";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Text from "./component/Text";
function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <Router>
      <div className="App">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/speech" element={<Speech darkMode={darkMode} />} />
          <Route path="/text" element={<Text darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
