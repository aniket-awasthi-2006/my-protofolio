import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { fetchApiJson } from "../config/api";
import { SuccessPopup } from "./SuccessPopup";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState({ visible: false, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedEmail = email.trim().toLowerCase();

    if (!formattedEmail || formattedEmail.indexOf("@") === -1) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const result = await fetchApiJson("/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email: formattedEmail }),
      });

      setStatus("idle");
      setMessage("");
      setPopup({
        visible: true,
        message: result.status || "Subscribed successfully.",
      });
      setEmail('');
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Unable to subscribe right now.");
    }
  };

  return (
      <Col lg={12}>
        <div className="newsletter-bx margin-bx-30">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe for New Posts and Project Updates</h3>
              <p>Get occasional product, UI, and front-end engineering insights directly in your inbox.</p>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
                  <button type="submit" disabled={status === "sending"}>Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
        <SuccessPopup
          visible={popup.visible}
          message={popup.message}
          onClose={() => setPopup((prev) => ({ ...prev, visible: false }))}
          duration={3200}
          bottomOffset={22}
        />
      </Col>
  )
}
