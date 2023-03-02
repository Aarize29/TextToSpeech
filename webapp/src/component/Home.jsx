import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
//import {HiArrowLongRight} from 'react-icons/hi'
const Home = (props) => {
  const navigate = useNavigate();
  const navigateToTextToSpeechPage = () => {
    navigate("/speech");
  };
  const navigateToSpeechToTextPage = () => {
    navigate("/text");
  };
  return (
    <div className="homepage">
      <div
        className={props.darkMode ? "darkCard" : "card"}
        onClick={navigateToTextToSpeechPage}
      >
        <h2>Text To Speech Converter</h2>
      </div>
      <div
        className={props.darkMode ? "darkCard" : "card"}
        onClick={navigateToSpeechToTextPage}
      >
        <h2>Speech To Text Converter</h2>
      </div>
    </div>
  );
};

export default Home;
