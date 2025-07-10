import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chai_shai from "../../Assets/Projects/chai_shai.png";
import dashcraft from "../../Assets/Projects/dashcraft.jpg";
import dragonfly from "../../Assets/Projects/image.png";
import CodeAmie from "../../Assets/Projects/CodeAmie.png";
import hp from "../../Assets/Projects/1712517375480.jpg";
import ml from "../../Assets/Projects/ml.jpg";

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
              imgPath={CodeAmie}
              isBlog={false}
              title="CODEAMIE"
              techstack={["React.js, Tailwind CSS, Google Gemini API"]}
              description="CodeAmie is a web app that uses Google’s Gemini model to provide AI-powered code reviews across multiple languages, including JavaScript, Python, C++, and more. It offers real-time feedback on code quality, best practices, and potential bugs. With syntax highlighting, clipboard support, and a sleek dark-themed UI, CodeAmie delivers a smooth and user-friendly developer experience."
              ghLink="https://github.com/D18hr-uv/CodeAmie"
              demoLink="https://code-amie.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashcraft}
              isBlog={false}
              title="DASHCRAFT"
              techstack={["Flask, Python, HTML, CSS, JavaScript"]}
              description="DashCraft is a Flask-based interactive data visualization dashboard that allows users to upload datasets and create dynamic visualizations such as line charts, scatter plots, and pie charts. It features customizable axis selection, a light/dark mode toggle, and a sleek, responsive design. DashCraft provides an intuitive interface for effective data exploration and analysis."
              ghLink="https://github.com/D18hr-uv/DashCraft"
              demoLink="https://dashcraft.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dragonfly}
              isBlog={false}
              title="DRAGONFLY"
              techstack={["HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Google Maps API"]}
              description="Developed a user-friendly web platform for an Autonomous Drone-Based Real-Time Pollution Monitoring System as part of SIH'24. Implemented Google Maps API for displaying real-time and user-searched locations with atmospheric data, and contributed to designing an intuitive, interactive interface. The system leverages edge computing and 5G for scalable, real-time environmental monitoring."
              ghLink="https://github.com/D18hr-uv/DragonFly"
              demoLink="https://dragon-fly-nine.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chai_shai}
              isBlog={false}
              title="CHAI - SHAI"
              techstack={["HTML, CSS, JavaScript"]}
              description="This is a HTML & CSS based snacks ordering website, where one can order various kinds of snacks as per need."
              ghLink="https://github.com/D18hr-uv/Chai_Shai"
              demoLink="https://d18hr-uv.github.io/Chai_Shai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hp}
              isBlog={false}
              title="HARRY POTTER THEME PAGE"
              techstack={["HTML, CSS"]}
              description="This is a basic HTML & CSS website which. It is basically a Harry Potter theme page in which, I use different CSS styling methods to develop a beautiful theme page."
              ghLink="https://github.com/D18hr-uv/HarryPotter"
              demoLink="https://d18hr-uv.github.io/HarryPotter/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="CREDIT EDA"
              techstack={["Python, Pandas, Matplotlib, Seaborn"]}
              description="'Credit EDA' is a machine learning and data science project analyzing credit history. It explores the 'application_data.csv' and 'previous_application.csv' datasets, handling missing values, performing univariate, bivariate, and multivariate analysis, and visualizing correlations. The project aims to describe an individual's credit history, identifying patterns and insights for informed decision-making"
              ghLink="https://github.com/D18hr-uv/CreditEDA"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="SMS SPAM DETECTION"
              techstack={["Python, Pandas, Matplotlib, Seaborn, Scikit-learn"]}
              description="Machine Learning and Data Science project to find out SMS spam in a dataset of messages labeled as Ham or Spam is used to train a spam detection model. To address data imbalance, oversampling is applied. The data is analyzed by comparing word counts and the presence of currency symbols in Ham and Spam messages. After cleaning the data with an nltk lemmatizer, a bag of words is created using TfidfVectorizer from sklearn. The model is then trained using a Naive Bayes classifier and evaluated for performance."
              ghLink="https://github.com/D18hr-uv/SMS_Spam_Detection"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="HATE SPEECH DETECTION"
              techstack={["Python, Pandas, Matplotlib, Seaborn, Scikit-learn"]}
              description="Machine Learning and Data Science project to figure out hate speech on Social media. The data is cleaned and prepared for analysis. The data is analyzed and the model is trained on the cleaned data. The model is then evaluated for performance."
              ghLink="https://github.com/D18hr-uv/Hate_Speech_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
