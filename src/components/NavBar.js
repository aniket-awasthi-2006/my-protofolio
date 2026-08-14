import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { resume } from '../content/portfolioData';
import { ResumeDownloadButton } from './ResumeDownloadButton';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{height:75,width:75}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
              <Nav.Link href="#certificates" className={activeLink === 'certificates' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certificates')}>Certificates</Nav.Link>
              <Nav.Link href="#posts" className={activeLink === 'posts' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('posts')}>Posts</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/aniket-awasthi-appdev" target="_blank" rel="noreferrer"><img src={navIcon1} style={{height:20,width:20}} alt="LinkedIn" /></a>
                <a href="https://github.com/aniket-awasthi-2006" target="_blank" rel="noreferrer"><img src={navIcon2} style={{height:23,width:23}} alt="GitHub" /></a>
                <a href="https://www.instagram.com/aniket_awasthi_code" target="_blank" rel="noreferrer"><img src={navIcon3} style={{height:20,width:20}} alt="Instagram" /></a>
              </div>
              <ResumeDownloadButton className="resume-link" source="navbar">
                <button className="vvd vvd-outline"><span>{resume.label}</span></button>
              </ResumeDownloadButton>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
