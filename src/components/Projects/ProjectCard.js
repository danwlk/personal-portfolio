import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({
  project: { title, description, imgUrl, tags, link, repoLink },
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx" key={title}>
        <img src={imgUrl} alt="project display" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h6>
            Skills:{" "}
            {tags.map((tag) => {
              return <span>|{tag}| </span>;
            })}
          </h6>
          <span>{description}</span>
          <div className="proj-links">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button>Check out the Project!</button>
            </a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <button>View the Source Code</button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
