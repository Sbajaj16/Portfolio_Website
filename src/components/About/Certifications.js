import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiAws,
  DiGoogleAnalytics,
} from "react-icons/di";
function Certifications() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.credly.com/badges/9fd5cfa2-f52b-4293-970d-f8632a5be500/public_url" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
          <DiAws/>
          <p style={{fontSize: 17}}>AWS Cloud Practitioner</p> 
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://skillshop.credential.net/c09fb18b-e5fc-434a-8ab4-dfa7417d6b3c" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
          <DiGoogleAnalytics />
          <p style={{fontSize: 17}}>Google Analytics</p> 
        </a>
      </Col>
    </Row>
  );
}

export default Certifications;


