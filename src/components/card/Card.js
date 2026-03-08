import "./styles.css";
import Button from "../button/Button";
import arrow from "../../assets/arrow.svg";

const Card = ({ title, year, content, link }) => {
    return (
        <div className="card-container">
            <div className="card-wrapper">
                <div className="content-wrapper">
                    <h3>{title} <span> - {year}</span></h3>
                    <p>{content}</p>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer"><Button>Check It Out!<img className="icon" src={arrow} alt="icon"/></Button></a>
            </div>
        </div>
    );
}

export default Card;