import colorSharp from "../assets/img/color-sharp.png"
import { skillGroups } from '../content/portfolioData';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                A detailed snapshot of the technologies and delivery strengths I use to ship production-ready web
                experiences.
              </p>
              <div className="skills-grid">
                {skillGroups.map(({ title, description, icon: Icon, skills }) => (
                  <article className="skill-group" key={title}>
                    <div className="skill-group__header">
                      <span className="skill-group__icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                    <div className="skill-group__list">
                      {skills.map(({ name, detail, level }) => (
                        <div className="skill-row" key={name}>
                          <div className="skill-row__copy">
                            <h4>{name}</h4>
                            <p>{detail}</p>
                          </div>
                          <div className="skill-row__meter">
                            <div className="skill-row__bar">
                              <span style={{ width: `${level}%` }} />
                            </div>
                            <strong>{level}%</strong>
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Decorative element" />
    </section>
  )
}
