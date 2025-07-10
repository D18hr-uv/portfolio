import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,//add typescript as well
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title = "C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title = "Javascript"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title = "Node.js"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title = "React.js"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title = "MongoDB"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title = "Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title = "Python"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql title = "MySQL"/>
      </Col>
    </Row>
  );
}

export default Techstack;
