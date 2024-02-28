import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={12} className="text-center text sm-end">
            <p>CopyRight 2024. All Rights Reserved by Doyup Kim</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
