import React from 'react';
import ProjectCard from './ProjectCard';
import personalPortfolioPNG from '../../assets/img/personal-portfolio.png';
import menuAiPNG from '../../assets/img/menu-ai.png';
import covidCheckInPNG from '../../assets/img/covid-check-in.png';
import droneGamePNG from '../../assets/img/drone-game.png';
import searchCardsPNG from '../../assets/img/search-cards.png';
import carrotMarketPNG from '../../assets/img/carrot-market.png';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Projects = () => {
    const projects = [
        {
            title: 'Personal Portfolio Website',
            description: 'My own personal website to showcase my skills!',
            tags: [
                'React',
                'Bootstrap',
                'HTML',
                'CSS',
                'JavaScript',
                'Web Development',
                'Git',
            ],
            imgUrl: personalPortfolioPNG,
            link: 'https://doyupkim.ca',
            repoLink: 'https://github.com/danwlk/personal-portfolio',
        },
        {
            title: 'Carrot Market',
            description:
                'This is a better version of Facebook Marketplace. Users can sell and buy used items.',
            tags: [
                'React Native',
                'Node.js',
                'React',
                'JavaScript',
                'CSS',
                'Git',
                'Mobile Development',
            ],
            imgUrl: carrotMarketPNG,
            link: 'https://github.com/danwlk/carrot-market',
            repoLink: 'https://github.com/danwlk/carrot-market',
        },
        {
            title: 'menu-ai',
            description: 'A food menu that can be used only with your voice!',
            tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Git'],
            imgUrl: menuAiPNG,
            link: 'https://menu-ai.doyupkim.ca/',
            repoLink: 'https://github.com/danwlk/menu-ai',
        },
        {
            title: 'Search Cards',
            description:
                'Created 4 search cards to practice working with 4 different APIs.',
            tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Git'],
            imgUrl: searchCardsPNG,
            link: 'https://search-cards.doyupkim.ca/',
            repoLink: 'https://github.com/danwlk/search-cards',
        },
        {
            title: 'Covid Check In',
            description:
                'Created a COVID Health Check Website for North Vancouver School District.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Teamwork'],
            imgUrl: covidCheckInPNG,
            link: 'https://covid-check-in.doyupkim.ca/',
            repoLink: 'https://github.com/danwlk/covidHealthCheck',
        },

        {
            title: 'Drone Game (Text Based)',
            description: 'Players can experience the life of a drone racer.',
            tags: ['Java'],
            imgUrl: droneGamePNG,
            link: 'https://github.com/danwlk/droid-text-game',
            repoLink: 'https://github.com/danwlk/droid-text-game',
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Here are some projects to showcase my skills.
                            Clicking on the projects will take you to the
                            project repository.
                        </p>
                        <Row>
                            {projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        project={project}
                                    />
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
