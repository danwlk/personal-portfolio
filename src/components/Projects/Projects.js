import React from "react";
import ProjectCard from "./ProjectCard";
import personalPortfolioPNG from "../../assets/img/personal-portfolio.png";
import menuAiPNG from "../../assets/img/menu-ai.png";
import covidCheckInPNG from "../../assets/img/covid-check-in.png";
import droneGamePNG from "../../assets/img/drone-game.png";
import ticTacToePNG from "../../assets/img/tic-tac-toe.png";
import myEducationPNG from "../../assets/img/my-education.png";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "My own personal website to showcase my skills!",
      tags: [
        "React",
        "Bootstrap",
        "HTML",
        "CSS",
        "JavaScript",
        "Web Development",
        "Git",
      ],
      imgUrl: personalPortfolioPNG,
      link: "https://github.com/danwlk/personal-portfolio",
    },
    {
      title: "menu-ai",
      description: "A food menu that can be used only with your voice!",
      tags: ["React", "HTML", "CSS", "JavaScript", "Git"],
      imgUrl: menuAiPNG,
      link: "https://github.com/danwlk/menu-ai",
    },
    {
      title: "Covid Check In",
      description:
        "Created a COVID Health Check Website for North Vancouver School District.",
      tags: ["HTML", "CSS", "JavaScript", "Teamwork"],
      imgUrl: covidCheckInPNG,
      link: "https://github.com/danwlk/covidHealthCheck"
    },
    {
      title: "MyEducation",
      description:
        "Teachers can use this software to create their class, add and remove students, and keep track of student grades.",
      tags: ["Java"],
      imgUrl: myEducationPNG,
      link: "https://github.com/danwlk/MyEducation"
    },
    {
      title: "Drone Game (Text Based)",
      description: "",
      tags: ["Java"],
      imgUrl: droneGamePNG,
      link: "https://github.com/danwlk/droid-text-game"
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Created a tic-tac-toe game in python that people can play on their computer when bored.",
      tags: ["Python"],
      imgUrl: ticTacToePNG,
      link: "https://github.com/danwlk/ticTacToe"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some projects to showcase my skills. Clicking on the projects will take you to the project repository.</p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} project={project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
