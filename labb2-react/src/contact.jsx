import "./CSS/style.css";
import email from "./Images/e-mail labb2.png";
import github from "./Images/Github labb2.png";
import linkedIn from "./Images/Linkedin labb2.png";
import phone from './Images/phone labb2.png';

function contact() {
  return (
    <section id="contact">
      <p className="section-text-p1">Get In Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={email}
            alt="e-mail"
            class="icon contact-icon-email"
          />
          <p>
            <a href="mailto:simon.nilsson.10@gmail.com">
              simon.nilsson.10@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedIn}
            alt="LinkedIn"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/simon-nilsson-925992185/">
              LinkedIn
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={github}
            alt="Github"
            className="icon contact-icon"
          />
          <p>
            <a href="https://github.com/simonnilsson9/">GitHub</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={phone}
            alt="phone"
            className="icon contact-icon-phone"
          />
          <p>
            <a href="tel:+46702611037">+46702611037</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default contact;
