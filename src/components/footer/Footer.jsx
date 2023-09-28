import "./Footer.css";
import Logo from "../../assets/logo.png";
import Github from "../../assets/icons8-github-24.png";
import linkedin from "../../assets/icons8-linkedin-logo-48.png";
import facebook from "../../assets/icons8-facebook-logo-48.png";
import fiver from "../../assets/icons8-fiverr-48.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container global-max-width">
          <div className="footer-des">
            <img src={Logo} alt="Little Lemon logo" />
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                <li>Fri: 12:00PM - 1:00AM</li>
                <li>Sat - Sun: 10:30AM - 12:00AM</li>
              </ul>
            </div>

            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>Tel: 123456789</li>
                <li>Email: abc@littlelemon.com</li>
              </ul>
            </div>

            <div className="locations">
              <h5>LOCATIONS</h5>
              <ul>
                <li>100 Blv, Los Angeles MA</li>
               <li><a href="https://github.com/Gen1usDeveloper/Little_Lemon_Capstone/tree/main"><img id="github" src={Github} alt="Github"></img></a>
               <a href=""><img id="linkedin"src={linkedin} alt="linkedin"></img></a>
               <a href=""><img id="facebook"src={facebook} alt="facebook"></img></a>
               <a href=""><img id="fiverr"src={fiver} alt="fiverr"></img></a>
               </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© 2023 All rights reserved | Little Lemon</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
