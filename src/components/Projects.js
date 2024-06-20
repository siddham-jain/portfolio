import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import yulu from "../assets/img/yulu.png";
import aerofit from "../assets/img/aerofit.png";
import quizapp from "../assets/img/quizapp.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsMain = [
    {
      title: "Fire Detection ML model",
      description: "Trained using TensorFlow2 and then converted to TFLite for deployment on RPi",
      imgUrl: projImg1,
    },
    {
      title: "Quiz-App",
      description: "Made using basic HTML, CSS, JS",
      imgUrl: quizapp,
    },
    {
      title: "News-Web-App",
      description: "For learning APIs implementation in JS",
      imgUrl: projImg3,
    }
  ];

  const projectsData = [
    {
      title: "AeroFit - Business Case Study",
      description: "Aerofit's Business Case Study with Python & Data Science",
      imgUrl: aerofit,
    },
    {
      title: "Yulu - Hypothesis Testing",
      description: "Decoded Yulu Rentals: Insights from Hypothesis Testing",
      imgUrl: yulu,
    }
  ];

  const projectsSide = [
    {
      title: "Image Editor",
      description: "CLI based image editor with basic functionalities",
      imgUrl: projImg1,
    },
    {
      title: "tic-tac-toe",
      description: "CLI based tic-tac-toe game built using JAVA",
      imgUrl: projImg2,
    },
    {
      title: "Payment Service Integration",
      description: "for learning integration of payment service",
      imgUrl: projImg3,
    }
  ];

  return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Main Quests</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Data Based Quests</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Side Quests</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projectsMain.map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                            />
                        ))
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {
                        projectsData.map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                            />
                        ))
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {
                        projectsSide.map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                            />
                        ))
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="background"/>
      </section>
  );
};

export default Projects;
