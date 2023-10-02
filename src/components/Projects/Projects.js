import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import temp from "../../Assets/Projects/temp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Heavenly"
              description="Discover the delectable world of Heavenly Apple with our beautifully designed landing page, meticulously crafted using HTML and CSS. This inviting webpage showcases the essence of our premium apple products, capturing the freshness, flavor, and natural beauty of our orchards."
              ghLink="https://github.com/nitishkumar80/HeavenlyLandingPagegithub/"
              demoLink="https://651952976399a3415d30f416--fanciful-daifuku-b0a623.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Translator - App "
              description="
              Create a powerful and user-friendly translation tool with our React Translator App built using popular technologies such as React.js, react-dom, axios, react-scripts, and web-vitals. This dynamic web application leverages the Google Translate API to seamlessly translate text between multiple languages..
              "
              ghLink="https://github.com/nitishkumar80/Translator"
              demoLink="https://6519518183a6403c0567569c--magical-kelpie-ba07bb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={temp}
              isBlog={false}
              title="Temperature Converter"
              description="An intuitive web tool built with HTML, CSS, and JavaScript. Easily convert Fahrenheit, and Kelvin with just a few clicks. Enjoy a user-friendly interface, real-time calculations, and a sleek design for all your temperature conversion needs.."
              ghLink="#"
              demoLink="https://651aad2717e8450471d71fcb--taupe-flan-103a6b.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio"
              description="Experience the art of personal expression through our interactive portfolio, skillfully crafted using HTML, CSS, and JavaScript. Our dynamic webpage is a visual journey through a showcase of creative works, achievements, and skills. Seamlessly blending design and technology, this portfolio offers an engaging user experience. Viewers can explore projects, read about experiences, and interact with various elements to gain a deeper insight into the creator's talents. This portfolio is more than a static collection; it's a living testament to innovation and passion. Whether you're an artist, developer, designer, or creator of any kind, our interactive portfolio template provides the canvas to paint your unique story and talents. Showcase your best work and captivate your audience with this HTML, CSS, and JavaScript-powered portfolio masterpiece."
              ghLink="https://github.com/nitishkumar80/Partfolio"
              demoLink="https://nitishkumar80.github.io/Partfolio/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
