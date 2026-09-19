import SkillBox from "../skillBox/SkillBox";
import db from "../../assets/db.svg";
import gear from "../../assets/gear.svg";
import power from "../../assets/power.svg";
import "./styles.css";

const Skills = () => {
    return (
        <section className="section-wrapper skills-bento">
            <div className="skills-heading">
                <h2>The Skills that Shape Me!</h2>
            </div>
            <SkillBox title="Ruby"
                content="Learning Ruby on Rails to strengthen my backend foundations. I’m gradually building a better understanding of API design, application structure, and clean code practices through personal projects and hands-on learning."
                icon={gear}
                theme="coral"
            />
            <SkillBox
                title="Certifications"
                content={
                    <ul>
                        <li>
                            <a
                                className="cert-link"
                                href="https://coursera.org/share/88aea709c7799a74289ea206a5d301f3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                IBM Data Science Professional Certificate
                            </a>
                        </li>
                        <li>
                            <a
                                className="cert-link"
                                href="https://coursera.org/share/1b991e9a6fa0c73c06fbc61b0d864c01"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                IBM Data Analyst Professional Certificate
                            </a>
                        </li>
                    </ul>
                }
                icon={power}
                theme="white"
            />
            <SkillBox title="SQL & Python"
                content="Working with relational databases such as PostgreSQL and MySQL to work more confidently with structured data. I’m also improving my Python skills by building simple scripts and data-related workflows for data analysis and automation."
                icon={db}
                theme="coral"
            />
        </section>
    );
}

export default Skills;