import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

import html from "../assets/img/html.png";
import react from "../assets/img/react.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import typescript from "../assets/img/typescript.png";
import firebase from "../assets/img/firebase.png";
import github from "../assets/img/github.png";
import styledComponents from "../assets/img/styled.png";
import git from "../assets/img/git.png";
import restAPI from "../assets/img/rest-api.png";
import sass from "../assets/img/sass.png";
import vscode from "../assets/img/vscode.png";

import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t, i18n } = useTranslation();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{t("Navbar.Skills")}</h2>
              <p>
                {t("Skills.Experience")}
                <br></br>
                {t("Skills.Info")}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <div className="image-box">
                    <img
                      src={react}
                      alt="React-logo"
                      style={{ height: "150px", width: "auto" }}
                    />
                  </div>
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <div className="image-box">
                    <img
                      src={firebase}
                      alt="firebase-logo"
                      id="firebase"
                      style={{ height: "150px", width: "auto" }}
                    />
                  </div>
                  <h5>FIREBASE</h5>
                </div>
                <div className="item">
                  <div className="image-box">
                    <img
                      src={html}
                      alt="html-logo"
                      id="html"
                      style={{ height: "150px", width: "auto" }}
                    />
                  </div>

                  <h5>HTML5</h5>
                </div>

                <div className="item">
                  <div className="image-box">
                    <img
                      src={javascript}
                      alt="javascript-logo"
                      id="javascript"
                      style={{ height: "150px", width: "auto" }}
                    />
                  </div>

                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <div className="image-box">
                    <img
                      src={github}
                      alt="github-logo"
                      style={{ height: "150px", width: "auto" }}
                    />
                  </div>

                  <h5>GITHUB</h5>
                </div>
                <div className="item">
                  <div className="image-box">
                    <img
                      src={styledComponents}
                      alt="styled-components-logo"
                      style={{ height: "150px", width: "auto" }}
                    />
                  </div>

                  <h5>STYLED COMPONENTS</h5>
                </div>
                <div className="item">
                  <div className="image-box">
                    <img
                      src={css}
                      alt="css-logo"
                      id="css"
                      style={{ height: "150px", width: "auto" }}
                    />
                  </div>
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <div className="image-box">
                    <img
                      src={git}
                      alt="git-logo"
                      style={{ height: "150px", width: "auto" }}
                    />
                  </div>

                  <h5>GIT</h5>
                </div>
                <div className="item">
                  <div className="image-box">
                    <img
                      src={restAPI}
                      alt="rest-api-logo"
                      style={{ height: "150px", width: "auto" }}
                    />
                  </div>

                  <h5>REST API</h5>
                </div>
                <div className="item">
                  <div className="image-box">
                    <img
                      src={sass}
                      alt="sass-logo"
                      style={{
                        minHeight: "150px",
                        maxHeight: "50px",
                        width: "auto",
                      }}
                    />
                  </div>
                  <h5>SASS</h5>
                </div>
                <div className="item">
                  <div className="image-box">
                    <img
                      src={typescript}
                      alt="typscript-logo"
                      id="typescript"
                      style={{ height: "150px", width: "auto" }}
                    />
                  </div>
                  <h5>TYPESCRIPT</h5>
                </div>
                <div className="item">
                  <div className="image-box">
                    <img
                      src={vscode}
                      alt="vscode-logo"
                      style={{ height: "150px", width: "auto" }}
                    />
                  </div>
                  <h5>VSCODE</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
