import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

import onepiece from "../assets/img/onepiece.png";
import photogallery from "../assets/img/photogallery.PNG";
import calculator from "../assets/img/calculator.PNG";
import etchasketch from "../assets/img/etchasketch.png";
import shopping from "../assets/img/shopping.PNG";
import todo from "../assets/img/todo.PNG";
import weatherapp from "../assets/img/weather.PNG";

export const Projects = () => {
  const { t, i18n } = useTranslation();
  const projectsTab1 = [
    {
      title: `${t("Projects.Shopping")}`,
      imgUrl: shopping,
      repoLink: "https://github.com/aditi-hinge/shopping-cart",
      liveLink: "https://aditi-hinge.github.io/shopping-cart/",
    },
    {
      title: `${t("Projects.PhotoGallery")}`,
      imgUrl: photogallery,
      repoLink: "https://github.com/aditi-hinge/react-gallery",
      liveLink: "https://aditi-hinge.github.io/react-gallery/",
    },
    {
      title: `${t("Projects.MemoryGame")}`,
      imgUrl: onepiece,
      repoLink: "https://github.com/aditi-hinge/memory-game",
      liveLink: "https://aditi-hinge.github.io/memory-game/",
    },
  ];

  const projectsTab2 = [
    {
      title: `${t("Projects.WeatherApp")}`,
      imgUrl: weatherapp,
      repoLink: "https://github.com/aditi-hinge/weather-app",
      liveLink: "https://aditi-hinge.github.io/weather-app/",
    },
    {
      title: `${t("Projects.ToDo")}`,
      imgUrl: todo,
      repoLink: "https://github.com/aditi-hinge/to-do",
      liveLink: "https://aditi-hinge.github.io/to-do/",
    },
    {
      title: `${t("Projects.EtchASketch")}`,
      imgUrl: etchasketch,
      repoLink: "https://github.com/aditi-hinge/etch-a-sketch",
      liveLink: "https://aditi-hinge.github.io/etch-a-sketch/",
    },
  ];

  const projectsTab3 = [
    {
      title: `${t("Projects.Calculator")}`,
      imgUrl: calculator,
      repoLink: "https://github.com/aditi-hinge/calculator",
      liveLink: "https://aditi-hinge.github.io/calculator/",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>{t("Projects.Title")}</h2>
                  <p>
                    {t("Projects.Description")}
                    <br></br>
                    {t("Projects.Info")}
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first" role="button">
                          {t("Projects.Tab1")}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" role="button">
                          {t("Projects.Tab2")}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" role="button">
                          {t("Projects.Tab3")}
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsTab3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background-right"
      ></img>
    </section>
  );
};
