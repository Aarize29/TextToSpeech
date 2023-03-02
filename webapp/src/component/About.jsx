import React from "react";
import "./About.css";
import { BsGithub, BsLinkedin, BsYoutube, BsTwitter } from "react-icons/bs";
const About = (props) => {
  return (
    <div className={props.darkMode ? "darkInfo" : "info"}>
      <h1>This website is built by me!</h1>
      <h2>My name is Shams Aarize Siddique</h2>
      <div className={props.darkMode ? "darkLinks" : "links"}>
        <a href="https://github.com/Aarize29">
          <h2>
            <BsGithub />
          </h2>
        </a>
        <a href="https://www.linkedin.com/in/shams-aarize-6b18a1202/">
          <h2>
            <BsLinkedin />
          </h2>
        </a>
        <a href="https://www.youtube.com/@shamsaarize5349">
          <h2>
            <BsYoutube />
          </h2>
        </a>
        <a href="https://twitter.com/ShamsAarize">
          <h2>
            <BsTwitter />
          </h2>
        </a>
      </div>
    </div>
  );
};

export default About;
