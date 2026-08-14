import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projapp1 from "../assets/media/proj-app-1.jpg";
import app2 from "../assets/media/app2.jpg";
import web1 from "../assets/media/web1.jpg";
import web2 from "../assets/media/web2.jpg";
import game1 from "../assets/media/game1.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "MediQueue",
      description: "Hospital OPD queue system built with Next.js, TypeScript, MongoDB, Firebase, and Socket.IO.",
      imgUrl: web2,
      projectUrl: "https://github.com/aniket-awasthi-2006/Tech-Titans_HC01_SAGE"
    },
    {
      title: "Vitalizer",
      description: "Healthcare habit tracker with wellness scoring, weekly insights, themes, and responsive UI.",
      imgUrl: web1,
      projectUrl: "https://github.com/aniket-awasthi-2006/Vitalizer"
    },
  ];
  const projects2 = [{
      title: "NeXora - AI FlashCards",
      description: "Design & Development",
      imgUrl: projapp1,
      projectUrl: "https://github.com/aniket-awasthi-2006/NeXora_Ai_FlashCards"
    },
    {
      title: "Vr. Mouse",
      description: "Flutter virtual mouse controller with Bluetooth HID, air pointer, keyboard, trackpad, and sensor calibration.",
      imgUrl: app2,
      projectUrl: "https://github.com/aniket-awasthi-2006/Vr.Mouse"
    }
  ];
  const projects3 = [
    {
      title: "Aki Cricket",
      description: "Akinator-style AI cricket mind-reader built for GDG Agentic Premier League with Gemini, Firebase, and Next.js.",
      imgUrl: game1,
      projectUrl: "https://github.com/aniket-awasthi-2006/Aki-Cricket"
    }
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the products I’ve designed and built during my journey as a developer. Each project represents a problem I wanted to solve, an idea I wanted to explore, or a technology I wanted to master. I focus on building responsive, efficient, and visually polished applications with strong attention to user experience and maintainable code.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Websites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Games</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                     <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
