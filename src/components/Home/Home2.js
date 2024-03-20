import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3em" }}>
          <span className="purple"> About Me</span> 
            </h1>
            <br/>
            <p style={{ className: "home-about-body", fontSize: 20 }}>
            Hello Folks, I am <span className="purple">Sparsh Bajaj</span> based in <span className="purple">Vancouver, Canada.</span>
            <br />
            <br />
            As a passionate <span className="purple">data science</span> and <span className="purple">full stack web development</span> enthusiast, I aim to blend business with technology for growth. 
            
            Skilled in data analysis and visualization, I deliver insights to drive decisions. 
            
            <br />
            <br />I embrace technology's transformative power, 
          
            continually advancing my knowledge to remain at the industry's forefront. Confident and detail-oriented, I am ready to contribute significantly to any team.
            <br />
            <br />
            A recent graduate of the <span className="purple">Sauder School of Business</span> (2023) at the <span className="purple">University of British Columbia</span>, Vancouver, I am poised to make a significant impact in the tech industry.
            <br />
            <br/>
          </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sparsh16"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/sparsh.bajaj.5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sparsh-bajaj160899/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sparsh._.16/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
