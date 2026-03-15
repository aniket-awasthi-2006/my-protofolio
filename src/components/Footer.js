import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Newsletter } from "./Newsletter";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Newsletter />
        <Row className="align-items-center mt-5">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/aniket-awasthi-appdev" target="_blank" rel="noreferrer"><img src={navIcon1} style={{height:20,width:20}} alt="LinkedIn" /></a>
                <a href="https://github.com/aniket-awasthi-2006" target="_blank" rel="noreferrer"><img src={navIcon2} style={{height:23,width:23}} alt="GitHub" /></a>
                <a href="https://www.instagram.com/aniket_awasthi_code" target="_blank" rel="noreferrer"><img src={navIcon3} style={{height:20,width:20}} alt="Instagram" /></a>
            </div>
            <p>Copyright 2026. Aniket. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
