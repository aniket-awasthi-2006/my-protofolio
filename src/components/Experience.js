import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { timeline } from '../content/portfolioData';

export const Experience = () => {
  const [isAttachmentOpen, setIsAttachmentOpen] = useState(false);
  const [activeAttachments, setActiveAttachments] = useState([]);
  const [activeAttachmentIndex, setActiveAttachmentIndex] = useState(0);
  const [activeAttachmentTitle, setActiveAttachmentTitle] = useState('');

  const openAttachments = (attachments, title) => {
    if (!attachments?.length) {
      return;
    }

    setActiveAttachments(attachments);
    setActiveAttachmentIndex(0);
    setActiveAttachmentTitle(title);
    setIsAttachmentOpen(true);
  };

  const closeAttachments = () => {
    setIsAttachmentOpen(false);
    setActiveAttachments([]);
    setActiveAttachmentIndex(0);
    setActiveAttachmentTitle('');
  };

  const showPreviousAttachment = () => {
    setActiveAttachmentIndex((currentIndex) =>
      (currentIndex - 1 + activeAttachments.length) % activeAttachments.length,
    );
  };

  const showNextAttachment = () => {
    setActiveAttachmentIndex((currentIndex) => (currentIndex + 1) % activeAttachments.length);
  };

  const activeAttachment = activeAttachments[activeAttachmentIndex];
  const hasMultipleAttachments = activeAttachments.length > 1;

  return (
    <section className="experience-section" id="experience">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header">
              <h2>Experience</h2>
              <p>A quick look at my professional roles, education, and key outcomes delivered across teams.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {timeline.map(({ type, title, company, period, location, highlights, attachments = [], icon: Icon }) => (
            <Col key={`${title}-${period}`} xs={12} lg={6}>
              <article className="experience-card">
                <div className="experience-card__top">
                  <span className="experience-card__badge">
                    <Icon aria-hidden="true" />
                    {type}
                  </span>
                  <span className="experience-card__period">{period}</span>
                </div>
                <h3>{title}</h3>
                <p className="experience-card__company">
                  {company} <span>{location}</span>
                </p>
                <ul>
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {attachments.length > 0 && (
                  <button
                    className="experience-card__attachments-btn"
                    onClick={() => openAttachments(attachments, title)}
                    type="button"
                  >
                    View attachment{attachments.length > 1 ? 's' : ''} ({attachments.length})
                  </button>
                )}
              </article>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        centered
        className="experience-attachments-modal"
        onHide={closeAttachments}
        show={isAttachmentOpen}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {activeAttachmentTitle} {hasMultipleAttachments ? `(${activeAttachmentIndex + 1}/${activeAttachments.length})` : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {activeAttachment && (
            <figure className="experience-attachments-viewer">
              <img
                alt={activeAttachment.alt || `${activeAttachmentTitle} attachment ${activeAttachmentIndex + 1}`}
                src={activeAttachment.src}
              />
              {activeAttachment.caption && <figcaption>{activeAttachment.caption}</figcaption>}
            </figure>
          )}

          {hasMultipleAttachments && (
            <>
              <div className="experience-attachments-controls">
                <button onClick={showPreviousAttachment} type="button">
                  Previous
                </button>
                <span>{activeAttachmentIndex + 1} / {activeAttachments.length}</span>
                <button onClick={showNextAttachment} type="button">
                  Next
                </button>
              </div>

              <div className="experience-attachments-thumbs">
                {activeAttachments.map((attachment, index) => (
                  <button
                    aria-label={`View attachment ${index + 1}`}
                    className={index === activeAttachmentIndex ? 'is-active' : ''}
                    key={`${attachment.src}-${index}`}
                    onClick={() => setActiveAttachmentIndex(index)}
                    type="button"
                  >
                    <img
                      alt={attachment.alt || `Attachment thumbnail ${index + 1}`}
                      src={attachment.src}
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};
