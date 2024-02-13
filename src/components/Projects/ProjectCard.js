import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ project: { title, description, imgUrl, tags } }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project display" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h6>Skills: {tags.map((tag) => {
            return <span>|{tag}| </span>;
          })}</h6>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
