import React from "react";
import { Link } from "react-router-dom";
import profilepic from "./Images/simon labb2.jpg";
import email from "./Images/e-mail labb2.png";
import github from "./Images/Github labb2.png";
import linkedIn from "./Images/Linkedin labb2.png";
import "./CSS/style.css";

function Home() {
  return (
    <section id="profile">
      <div className="section-pic-container">
        <img src={profilepic} alt="Simon Profile Picture" />
      </div>
      <div className="section-text">
        <p className="section-text-p1">Hello, I'm</p>
        <h1 className="title">Simon Nilsson</h1>
        <p className="section-text-p2">System Developer Student</p>
        <div className="btn-container">
          <Link to="/CV">
            <button className="btn btn-color1">CV</button>
          </Link>
          <Link to="/contact">
            <button className="btn btn-color2">Contact Info</button>
          </Link>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/simon-nilsson-925992185/"
            target="_blank"
          >
            <img src={linkedIn} alt="My LinkedIn profile." className="icon" />
          </a>

          <a href="https://github.com/simonnilsson9" target="_blank">
            <img src={github} alt="My Github profile." className="icon" />
          </a>

          <a href="mailto:simon.nilsson.10@gmail.com" target="_blank">
            <img src={email} alt="My e-mail adress." className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
