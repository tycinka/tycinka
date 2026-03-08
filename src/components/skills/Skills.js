import SkillBox from "../skillBox/SkillBox";
import db from "../../assets/db.svg";
import gear from "../../assets/gear.svg";
import power from "../../assets/power.svg";
import "./styles.css";

const Skills = () => {
    return (
        <section className="section-wrapper">
            <div>
                <h2>The Skills that Shape Me!</h2>
            </div>
            <div className="skill-wrapper">
                <SkillBox title="PHP / Ruby"
                    content="Learning Ruby on Rails to strengthen my backend foundations, with previous experience in Nette. I’m gradually building a better understanding of API design, application structure, and clean code practices through personal projects and hands-on learning."
                    icon={gear}
                    theme="coral"
                />
                <SkillBox title="SQL & Python"
                    content="Working with relational databases such as PostgreSQL and MySQL in learning and personal projects to better understand structured data. I’m also improving my Python skills by building simple scripts and data-related workflows that support backend-focused development."
                    icon={db}
                    theme="white"
                />
                <SkillBox title="Certifications"
                          content={
                              <ul>
                                  <li>
                                      <a
                                          href="https://coursera.org/share/88aea709c7799a74289ea206a5d301f3"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                      >
                                          IBM Data Science Professional Certificate
                                      </a>
                                  </li>
                                  <li>
                                      <a
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
            </div>
        </section>
    );
}

export default Skills;