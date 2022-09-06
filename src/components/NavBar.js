import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github.svg";
import gmail from "../assets/img/gmail.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Router>
      <Navbar fluid="true" expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="nav-container">
          <div>
            <button
              onClick={() => handleClick("en")}
              style={{
                color: "white",
                // backgroundColor: "yellow",
                width: "4em",
              }}
            >
              EN
            </button>
            <span>|</span>
            <button
              onClick={() => handleClick("jp")}
              style={{
                color: "white",
                // backgroundColor: "yellow",
                width: "4em",
              }}
            >
              日本
            </button>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                {t("Navbar.Home")}
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                {t("Navbar.Skills")}
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                {t("Navbar.Projects")}
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/aditi-hinge-b2251b18b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="linkdIn" title="LinkdIn" />
                </a>
                <a
                  href="https://github.com/aditi-hinge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github}
                    alt="github"
                    className="white-icon"
                    title="Github"
                  />
                </a>
                <a
                  href="mailto: aditi.hinge@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={gmail}
                    alt="gmail"
                    className="white-icon"
                    title="Gmail"
                  />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>{t("Navbar.Connect")}</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
