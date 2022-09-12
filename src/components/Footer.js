import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github.svg";
import gmail from "../assets/img/gmail.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-md-center">
          <Col size={12} sm={6} className="text-center text-sm-center">
            <div className="footer-content justify-content-md-center">
              <div className="social-icon social-icon-footer ">
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
              <p>Copyright 2022. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
