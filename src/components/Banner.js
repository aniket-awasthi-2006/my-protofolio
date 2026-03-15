import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/my_pic.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { resume } from '../content/portfolioData';
import { trackResumeDownload } from '../config/tracking';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Full Stack Developer", "App Developer", "UI/UX Designer"];
  const period = 2000;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Aniket `}
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I design and build modern, responsive digital products with a strong focus on clean user experience, scalable architecture, and maintainable code.<br /><br />
                    As a developer specializing in Flutter, React, Next.js, Node.js, and Tailwind CSS, I create high-performance mobile and web applications that are visually refined, technically robust, and production-ready.<br /><br />

                    My approach combines thoughtful UI/UX design, efficient development practices, and performance optimization to deliver applications that are both beautiful and reliable across devices.
                  </p>
                  <div className="banner-actions">
                    <a className="banner-btn banner-btn--primary" href="#connect">
                      Let's Connect <ArrowRightCircle size={22} />
                    </a>
                    <a
                      className="banner-btn banner-btn--outline"
                      href={resume.href}
                      download
                      onClick={() => trackResumeDownload("banner")}
                    >
                      {resume.label}
                    </a>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header" style={{borderRadius:30}}/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
