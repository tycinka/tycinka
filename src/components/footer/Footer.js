import "./styles.css";
import Button from "../button/Button";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import arrow from "../../assets/arrow.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div>
                    <h1>Let's Get In Touch</h1>
                </div>
                <div className="button-wrapper">
                    <a href="https://github.com/tycinka" target="_blank" rel="noopener noreferrer" ><Button>My GitHub <img className="icon" src={arrow} alt=""/></Button></a>
                </div>
            </div>
            <div className="social-container">
                <p>©2026 Alena Mikešová</p>
                <div className="social-wrapper">
                    <a href="tel:+420603567092">  <img src={phone} alt="" />Phone</a>
                    <a href="mailto:mikesova@ik.me?subject=Hello&body=I wanted to reach out..."><img src={email} alt="" /> Email</a>
                </div>
                <p>©2026 Alena Mikešová</p>
            </div>
        </footer>
    );
}

export default Footer;