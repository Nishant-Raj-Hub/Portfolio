import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import noddylogo from "../assets/img/noddylogo.png"
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import copyright from "../assets/img/copyright.png";
import copyrightWhite from "../assets/img/copyrightWhite.svg";
import navIcon2 from "../assets/img/github-mark-white.svg"




// size={12} sm={6}


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerDiv">
        <img id="logo" src={noddylogo} alt="logo"/>
        <div id="quote">
          <h1 >Living, learning & leveling up</h1>
          <h1 >one day at a time.</h1>

        </div>
        <div className="social-icon">
              <a href="https://www.linkedin.com/in/nishant-raj-aa78241aa/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Nishant-Raj-Hub" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/noddy.7x/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
        </div>
        
        <p>Made by Noddy  <img id="copyrightImg"  src={copyrightWhite} alt="copyright"/>  2024</p>
        
      </div>
    </footer>
  )
}