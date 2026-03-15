import { Container, Row, Col } from 'react-bootstrap';
import { posts } from '../content/portfolioData';

export const Posts = () => {
  return (
    <section className="posts" id="posts">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header">
              <h2>Posts</h2>
              <p>Selected writing on front-end architecture, UX, and performance execution.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {posts.map(({ title, date, summary, tags, mediaType, mediaSrc, mediaAlt }) => {
            const hasMediaPath = typeof mediaSrc === 'string' && mediaSrc.trim() !== '';

            return (
              <Col key={title} xs={12} md={6} lg={4}>
                <article className="post-card">
                  <div className="post-card__meta">
                    <span>{date}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <div className="post-card__tags">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {hasMediaPath && (
                    <div className="post-card__media-wrap">
                      {mediaType === 'video' ? (
                        <video className="post-card__media" controls preload="metadata">
                          <source src={mediaSrc} />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img className="post-card__media" src={mediaSrc} alt={mediaAlt || `${title} visual`} loading="lazy" />
                      )}
                    </div>
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
