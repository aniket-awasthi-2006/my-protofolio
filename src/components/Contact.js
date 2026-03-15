import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { EnvelopeFill, GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { fetchApiJson } from "../config/api";
import { SuccessPopup } from "./SuccessPopup";

const contactPoints = [
  {
    label: 'Email',
    value: 'aniket.awasthi.developer@gmail.com',
    href: 'mailto:aniket.awasthi.developer@gmail.com',
    icon: EnvelopeFill,
  },
  {
    label: 'Phone',
    value: '+91 97557 87743',
    href: 'tel:+919755787743',
    icon: TelephoneFill,
  },
  {
    label: 'Location',
    value: 'Indore, Madhya Pradesh, India / Remote',
    href: 'https://maps.app.goo.gl/kXHZc9oJH788MSc86',
    icon: GeoAltFill,
  },
];

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});
  const [popup, setPopup] = useState({ visible: false, message: "" });

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      await fetchApiJson("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      setStatus({});
      setPopup({
        visible: true,
        message: "Message submitted successfully.",
      });
      setFormDetails(formInitialDetails);
    } catch (error) {
      setStatus({ success: false, message: error.message || 'Unable to send right now. Please try again later.' });
    } finally {
      setButtonText("Send Message");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <div className="contact-shell">
          <Row className="align-items-center g-4">
            <Col xs={12} lg={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={`contact-visual ${isVisible ? "animate__animated animate__fadeInLeft" : ""}`}>
                    <img src={contactImg} alt="Contact" />
                    <h3>Let&apos;s build something meaningful.</h3>
                    <p>
                      Tell me about your project, timeline, and goals. I usually respond within 24 hours.
                    </p>
                    <div className="contact-points">
                      {contactPoints.map(({ label, value, href, icon: Icon }) => (
                        <a key={label} className="contact-point" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                          <span className="contact-point__icon">
                            <Icon aria-hidden="true" />
                          </span>
                          <span className="contact-point__copy">
                            <small>{label}</small>
                            <strong>{value}</strong>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                }
              </TrackVisibility>
            </Col>
            <Col xs={12} lg={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={`contact-form-card ${isVisible ? "animate__animated animate__fadeInRight" : ""}`}>
                    <h2>Get In Touch</h2>
                    <p>Share your requirements and I will get back with a clear plan and next steps.</p>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col xs={12} sm={6} className="px-1">
                          <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                        </Col>
                        <Col xs={12} sm={6} className="px-1">
                          <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                        </Col>
                        <Col xs={12} sm={6} className="px-1">
                          <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                        </Col>
                        <Col xs={12} sm={6} className="px-1">
                          <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                        </Col>
                        <Col xs={12} className="px-1">
                          <textarea rows="6" value={formDetails.message} placeholder="Tell me about your project..." onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                          <button className="contact-submit" type="submit"><span>{buttonText}</span></button>
                        </Col>
                        {status.message && !status.success && (
                          <Col xs={12}>
                            <p className={status.success ? "success" : "danger"}>{status.message}</p>
                          </Col>
                        )}
                      </Row>
                    </form>
                  </div>
                }
              </TrackVisibility>
            </Col>
          </Row>
        </div>
      </Container>
      <SuccessPopup
        visible={popup.visible}
        message={popup.message}
        onClose={() => setPopup((prev) => ({ ...prev, visible: false }))}
        duration={3400}
        bottomOffset={92}
      />
    </section>
  );
};
