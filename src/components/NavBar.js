import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/img/logo.png";
import LinkedInLogo from "../assets/img/linkedIn.png";
import GitHubLogo from "../assets/img/gitHub.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <a href="http://localhost:3000/">
            <img
              src={Logo}
              alt="Logo"
              style={{ filter: "invert(100%)", width: "100px" }}
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/doyupkim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedInLogo}
                  alt="LinkedIn"
                  style={{ width: "30px" }}
                />
              </a>
              <a
                href="https://github.com/danwlk?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHubLogo} alt="Github" style={{ width: "30px" }} />
              </a>
            </div>
            <button
              className="connectButton"
              onClick={() => console.log("Connect")}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
