import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaUnity } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows,
  SiPowerbi,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title = "Windows"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title = "Visual Studio Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title = "Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUnity title = "Unity"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi title = "Power BI" />
      </Col>
    </Row>
  );
}

export default Toolstack;
