import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view stylish-card">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" height="250vh" />
      <Card.Body>
        <Card.Title className="project-title">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Tech Stack Section */}
        {props.techStack && (
          <div className="tech-stack">
            <strong>Tech Stack:</strong> {props.techStack.join(', ')}
          </div>
        )}
        {"\n"}

        <Button variant="primary" href={props.ghLink} target="_blank" style = {{marginTop: "10px"}}>
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" , marginTop: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
