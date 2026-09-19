import "./styles.css";

const SkillBox = ({ title, content, icon, theme }) => {
    const themeBox = theme === "coral" ? "coral" : "white";
    const ContentTag = typeof content === "string" ? "p" : "div";
    return (
        <div className={`box-container ${themeBox}`}>
            <div className="box-wrapper">
                <div className="icon-wrapper">
                    <img src={icon} alt="" />
                </div>
                <h3>{title}</h3>
                <ContentTag className="box-content">{content}</ContentTag>
            </div>
        </div>
    );
}

export default SkillBox;