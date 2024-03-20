import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SightSage from "../../Assets/Projects/SightSage.jpeg";
import zazba from "../../Assets/Projects/Zazba Logo.jpg";
import data from "../../Assets/Projects/DataScience.webp";
import world from "../../Assets/Projects/WordLink.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SightSage}
              isBlog={false}
              title="SightSage Food and Nutrition Inc."
              description="Developed an E-commerce website, utilizing React.js, TypeScript, and SASS for a sophisticated Front End experience on the Shopify Platform. The project featured the creation of high-performance RESTful APIs with Node.js, enabling efficient data exchange between the website and backend systems. This integration facilitated a seamless shopping experience, from product browsing to checkout. The use of modern web technologies not only optimized the site's responsiveness and usability but also showcased advanced full-stack development skills in building scalable online platforms."
              demoLink="https://sightsage.com/"
            />
          </Col>
          <Col md={4} className="project-card">
         <ProjectCard
              imgPath={world}
              isBlog={false}
              title="WorldLink Exports LLC-FZ"
              description={`Developed a  website for a Commodity Trading Company based in Dubai (U.A.E), leveraging the power of React.js and Next.js to create a dynamic and highly responsive Front End. This project involved the integration of the Mailchimp API, enabling the seamless collection of visitor contact information directly through the website. The implementation of these technologies not only enhanced the site's user experience but also facilitated an efficient mechanism for lead generation and customer engagement.`}
              demoLink="https://worldlinkexport.com/"
            />
          </Col>
          <Col md={4} className="project-card">
         <ProjectCard
              imgPath={data}
              isBlog={false}
              title="Statistical Significance of Weather Patterns on Bike Rental Count Predictions"
              description={`In this project, I collaborated with a team to develop a prediction model for bike sharing demand using the "Bike Sharing Dataset" from the UCI Machine Learning Repository. We utilized the R programming language and implemented Poisson Regression to model the count data (i.e., the number of bike rentals). The predictors included temperature, humidity, wind speed, year, whether it was a working day, and the weather situation. The Poisson Regression model allowed us to effectively predict bike rental demand and contribute to the optimization of the bike sharing system.`}
              demoLink="https://github.com/Sparsh16/stat301-Group-Project"
            />
          </Col>

          <Col md={4} className="project-card">
         <ProjectCard
              imgPath={zazba}
              isBlog={false}
              title="Zazba Trust"
              description={`In this project, I worked on the website (built on Wix) of a Non-Profit Organization called Zazba, which is committed to helping children without access to formal education, aiming to boost their prospects for a dignified life. I focused on improving the mobile view of the website through CSS media queries and enhancing the page speed of the website by adding JavaScript code.`}
              demoLink=" https://www.zazbatrust.org/"
            />
          </Col>

         

          <Col md={4} className="project-card">
         <ProjectCard
              imgPath={data}
              isBlog={false}
              title="Discriminating Between Sonar Signals Bounced Off a Metal Cylinder and a Roughly Cylindrical Rock"
              description={`In this project, I explored the application of a K-nearest neighbors (KNN) model to classify materials based on sonar measurements, achieving an impressive accuracy of approximately 90% on an unseen dataset. This outcome was particularly surprising, given the PCA analysis revealed a seemingly random scatter of rock and metal data points without clear clusters, challenging the typical expectations for KNN classification effectiveness.`}
              demoLink="https://github.com/Sparsh16/DSCI-100-Group-Project"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
