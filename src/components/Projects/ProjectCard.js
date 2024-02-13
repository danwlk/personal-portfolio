import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({
  project: { title, description, imgUrl, tags, link },
}) => {
  return (
    <Col sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
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
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
