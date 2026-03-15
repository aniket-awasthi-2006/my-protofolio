import { aboutCards, aboutHighlights } from '../content/portfolioData';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export const About = () => {
  return (
    <section className="about section-shell" id="about" data-section>
      <div className="section-intro">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A front-end partner focused on high-quality execution."
            description="I bridge visual design, product thinking, and engineering so interfaces feel refined and still scale cleanly in production."
          />
        </Reveal>
      </div>

      <div className="about__grid">
        <Reveal className="glass-card about-story" delay={80}>
          <p>
            I enjoy turning complex requirements into intuitive interfaces with strong hierarchy, crisp motion, and
            robust implementation details. The goal is always the same: make the experience feel obvious, fast, and
            trustworthy.
          </p>
          <div className="about-highlights">
            {aboutHighlights.map((highlight) => (
              <div key={highlight.label} className="about-highlight">
                <span>{highlight.label}</span>
                <strong>{highlight.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="about-cards">
          {aboutCards.map(({ title, text, icon: Icon }, index) => (
            <Reveal key={title} className="glass-card feature-card" delay={140 + index * 90}>
              <div className="feature-card__icon">
                <Icon aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
