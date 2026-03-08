import "./styles.css";

const SkillBox = ({ title, content, icon, theme }) => {
    const themeBox = theme === "coral" ? "coral" : "white";
    return (
        <div className={`box-container ${themeBox}`}>
            <div className="box-wrapper">
                <div className="icon-wrapper">
                    <img src={icon} alt="box icon" />
                </div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default SkillBox;