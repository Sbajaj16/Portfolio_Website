import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Folks, I am <span className="purple">Sparsh Bajaj</span> based in <span className="purple">Vancouver, Canada.</span>
            <br />
            <br />
            As a passionate <span className="purple">data science </span>and <span className="purple">full stack web development</span> enthusiast, I aim to blend business with technology for growth.
            Skilled in data analysis and visualization, I deliver insights to drive decisions. 
            <br />
            <br />I embrace technology's transformative power, continually advancing my knowledge to remain at the industry's forefront. Confident and detail-oriented, I am ready to contribute significantly to any team.
            <br /><br />A recent graduate of the <span className="purple">Sauder School of Business</span> (2023) at the <span className="purple">University of British Columbia</span>, Vancouver, I am poised to make a significant impact in the tech industry.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Tech Stacks 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
          </ul>
          <p style={{ textAlign: "center", color: "rgb(155, 126, 172)" }}>
            "Utilize the power of technology to drive change!"
          </p>
          <footer className="blockquote-footer">Sparsh Bajaj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

