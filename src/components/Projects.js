import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import exercise from "../assets/img/exercise.png";
import reddit from "../assets/img/reddit.png";
import googletranslate from "../assets/img/googletranslate.png";
import snapchat from "../assets/img/snapchat.png";
import amazon from "../assets/img/amazon.png";
import airbnb from "../assets/img/airbnb.png";
import hulu from "../assets/img/hulu.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import chat from "../assets/img/chat.jpg";
import crypto from "../assets/img/crypto.png";
import blog from "../assets/img/blog.png";
import detroit from "../assets/img/detroit.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import google from "../assets/img/google.png";

export const Projects = () => {
  const projects = [
    {
      title: "NFL Fantasy Stats",
      description: "Full Stack node express, postgres, and sportsradar API ",
      imgUrl: detroit,
      site: "https://gym-app-puce.vercel.app/",
    },
    {
      title: "Reddit",
      description: "Design & Development",
      imgUrl: reddit,
      site: "https://reddit2-eight.vercel.app/",
    },
    {
      title: "Google Translate",
      description: "Design & Development",
      imgUrl: googletranslate,
      site: "https://google-translate-clone-seven.vercel.app/",
    },
    {
      title: "Hulu",
      description: "UI",
      imgUrl: hulu,
      site: "https://hulu-clone-one-jade.vercel.app/",
    },
    {
      title: "CryptoTracker",
      description: "Crypto price tracker app",
      imgUrl: crypto,
      site: "https://crypto-app-chaostradamus.vercel.app/",
    },

    {
      title: "Basic Chat App",
      description: "Design & Development",
      imgUrl: chat,
      site: "https://chatapp2022-qev6svoln-chaostradamus.vercel.app/login",
    },
  ];

  const projects2020 = [
    {
      title: "Amazon",
      description: "Design & Development",
      imgUrl: amazon,
      site: "https://clone-e3a68.web.app/",
    },
    {
      title: "Snapchat",
      description: "Design & Development",
      imgUrl: snapchat,
      site: "https://snapchat-clone-982a1.web.app/",
    },
    {
      title: "Air BNB",
      description: "UI",
      imgUrl: airbnb,
      site: "https://airbnb-clone-olive-ten.vercel.app/",
    },
    {
      title: "Google Search Clone",
      description: "Api Call Design",
      imgUrl: google,
      site: "https://google-search-clone-jws4.vercel.app/search",
    },
    {
      title: "Gym App",
      description: "Design & Development",
      imgUrl: exercise,
      site: "https://gym-app-puce.vercel.app/",
    },
  ];

  const upcoming = [
    {
      title: "Blog Site",
      description: "simple blog post site",
      imgUrl: blog,
      // site: "https://snapchat-clone-982a1.web.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Projects that I have been working on throughout the years...
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">2025</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">2024</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Upcoming</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2020.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {upcoming.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="section">
                        <p>hellooo</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          {/* Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo. */}
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
