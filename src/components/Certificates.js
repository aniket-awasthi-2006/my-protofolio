import { Container, Row, Col } from 'react-bootstrap';
import { certificates } from '../content/portfolioData';

export const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header">
              <h2>Certificates</h2>
              <p>Professional certifications that validate my engineering and product-focused delivery skills.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {certificates.map(({ title, issuer, issued, summary, credentialUrl, image }) => {
            const hasCredentialUrl = typeof credentialUrl === 'string' && credentialUrl.trim() !== '';
            const hasImage = typeof image === 'string' && image.trim() !== '';

            return (
              <Col key={`${title}-${issued}`} xs={12} md={6} lg={4}>
                <article className="certificate-card">
                  {hasImage && (
                    <div className="certificate-card__image-wrap">
                      <img src={image} alt={`${title} certificate`} className="certificate-card__image" loading="lazy" />
                    </div>
                  )}
                  <div className="certificate-card__meta">
                    <span>{issuer}</span>
                    <span>{issued}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  {hasCredentialUrl && (
                    <a href={credentialUrl} target="_blank" rel="noreferrer">
                      View Credentials
                    </a>
                  )}
                </article>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
