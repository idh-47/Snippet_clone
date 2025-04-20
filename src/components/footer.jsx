import "../styles/footer.scss";
import logo from "../assets/snippet_logo_white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div id="logonTxt">
          <img src={logo} width={180} />
          <div>
            <p className="text1" style={{ marginBottom: 8 }}>
              (+212) 663-212-790
            </p>
            <p className="text2">contact@snippet.ma</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faSquareTwitter}
              className="Ficon"
              style={{ marginRight: 10 }}
            />
            <FontAwesomeIcon icon={faLinkedin} className="Ficon" />
          </div>
        </div>
        <div id="ServicesC">
          <div className="miniDiv">
            <h4 className="Ftitle">Services</h4>
            <p className="text1">Consulting</p>
            <p className="text1">UX/UI Design</p>
            <p className="text1">Development</p>
          </div>
          <div className="miniDiv">
            <h4 className="Ftitle">Use cases</h4>
            <p className="text1">Ecommerce</p>
            <p className="text1">Web & Mobile App</p>
            <p className="text1">3rd Party Integrations</p>
          </div>
          <div className="miniDiv">
            <h4 className="Ftitle">About</h4>
            <p className="text1">Who we are</p>
            <p className="text1">Why choose us</p>
            <p className="text1">Our Process</p>
            <p className="text1">Contact us</p>
          </div>
        </div>
      </footer>
    </>
  );
}
