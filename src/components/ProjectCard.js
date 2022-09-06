import { Col } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { IconContext } from "react-icons";

export const ProjectCard = ({ title, imgUrl, repoLink, liveLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className="proj-img" alt="project-card" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <IconContext.Provider
            value={{ color: "white", size: "28", className: "react-icons" }}
          >
            <div className="project-icons">
              <a target="_blank" href={liveLink} rel="noopener noreferrer">
                <FaLink title="Website" />
              </a>
              <a target="_blank" href={repoLink} rel="noopener noreferrer">
                <RiGitRepositoryLine
                  style={{ marginLeft: 80 }}
                  title="Repository"
                />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </Col>
  );
};
