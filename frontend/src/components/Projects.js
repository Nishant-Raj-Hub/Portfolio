import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import noddytube from "../assets/img/noddytube.png";
import portfolio from "../assets/img/portfolio.png";
import todo from "../assets/img/todo.png";
import basketball from "../assets/img/basketball.png";
import memeshare from "../assets/img/Memeshare.png";
import weathermonkey from "../assets/img/weathermonkey.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import quizmania from "../assets/img/quizmania.png";
import sharedprefs from "../assets/img/sharedprefs.png";
import musicplayer from "../assets/img/musicplayer.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const webProjects = [
      {
        title: "Noddytube",
        description: "Build with Rapid API",
        imgUrl: noddytube,
        href: "https://noddytube.vercel.app",
      },
      {
        title: "My Portfolio",
        description: "About me",
        imgUrl: portfolio,
        href: "#",
      },
      {
        title: "Todo List",
        description: "Build with NextJs",
        imgUrl: todo,
        href: "https://noddytodo.netlify.app",
      },
    ];

    const AndroidProjects = [
      {
        title: "Meme Share",
        description: "Build with kotlin",
        imgUrl: memeshare,
        href: "https://github.com/Nishant-Raj-Hub/my-meme",
      },
      {
        title: "Basketball Manager",
        description: "Build with kotlin",
        imgUrl: basketball,
        href: "https://github.com/Nishant-Raj-Hub/Basketball-Manager",
      },
      {
        title: "Quiz Mania",
        description: "Build with kotlin",
        imgUrl: quizmania,
        href: "https://github.com/Nishant-Raj-Hub/Quiz-mania",
      },
      {
        title: "Music Player",
        description: "Build with java",
        imgUrl: musicplayer,
        href: "https://github.com/Nishant-Raj-Hub/music-player",
      },
      {
        title: "Weather Monkey",
        description: "Build with kotlin",
        imgUrl: weathermonkey,
        href: "https://github.com/Nishant-Raj-Hub/weather-monkey",
      },
      {
        title: "SharedPrefs",
        description: "Build with java",
        imgUrl: sharedprefs,
        href: "https://github.com/Nishant-Raj-Hub/SharedPrefs",
      },
    ];


    return (
        
        <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Versatile developer adept in making projects using ReactJS, NextJS, and Android dev. Delivered impactful web and mobile projects. Expert in creating responsive, scalable solutions. Committed to innovation and exceeding client expectations.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Android Development</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="third">Android Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}


                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          AndroidProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
    )
}