import "./footer.css";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
            {/*lado izquierdo del footer*/}
          <div className="left">
            <div className="location">
              <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
              <div>
                <p>123 Housing Society</p>
                <p>Bangladesh.</p>
              </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>1-233-343-23</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>info@gmail.com</h4>
            </div>
          </div>

        {/*lado derecho del footer*/}
          <div className="right">
            <h4>About the company</h4>
            <p>This is me Omar Mosquera. CEO & Founder of Tech2etc.
                I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
