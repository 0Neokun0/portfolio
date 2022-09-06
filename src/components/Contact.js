import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Me"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="trial">{t("Contact.ContactMe")}</h2>
                  <p className="text-center">
                    {t("Contact.Info")}
                    <br></br>
                    {t("Contact.MessageMe")}{" "}
                    <a
                      href="https://www.linkedin.com/in/aditi-hinge-b2251b18b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "black", marginTop: "10rem" }}
                    >
                      LinkdIn
                    </a>{" "}
                    {t("Contact.SendMe")}{" "}
                    <a
                      href="mailto: aditi.hinge@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "black" }}
                    >
                      email
                    </a>{" "}
                    {t("Contact.Mail")}
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
