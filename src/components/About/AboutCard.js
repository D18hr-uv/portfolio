import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhruv Bhardwaj </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I am currently a Computer Science Engineeing Student at <span className="purple">Netaji Subhas University of Technology </span>
            <br />
            I have completed an project based internship in <span className="purple">Data Science </span> under <span className="purple">Wissenaire, IIT Bhubaneswar (1stop.ai). </span>
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
