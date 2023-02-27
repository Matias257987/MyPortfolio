import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/Logo.PNG";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <div className="footer-container">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6}>
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/matias-acosta-32c"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a
                  href="https://github.com/Matias257987"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon2} alt="Icon" />
                </a>
              </div>
            </Col>
            <Col size={12} sm={6}>
              <span>Contacto:</span>
              <br />
              <p>
                email:{" "}
                <a
                  href="mailto:acostamatias25@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  acostamatias25@gmail.com
                </a>
              </p>
            </Col>
          </div>
          <br />
          <p className="copy">Copyright 2023. All Rights Reserved</p>
        </Row>
      </Container>
    </footer>
  );
};
