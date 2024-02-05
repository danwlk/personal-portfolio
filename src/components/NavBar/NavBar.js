import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "./logo.png";
import LinkedInLogo from "./linkedInLogo.png"
import GitHubLogo from "./gitHub.png"

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/doyupkim/"><img src={LinkedInLogo} alt="LinkedIn" /></a>
              <a href="https://github.com/danwlk?tab=repositories"><img src={GitHubLogo} alt="Github" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
