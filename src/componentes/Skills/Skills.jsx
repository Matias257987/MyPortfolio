import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import express from "../../assets/img/express.svg";
import js from "../../assets/img/js.svg";
import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import react from "../../assets/img/react.svg";
import redux from "../../assets/img/redux.svg";
import node from "../../assets/img/node.svg";
import postgresql from "../../assets/img/postgresql.svg";
import sequelize from "../../assets/img/sequelize.svg";
import git from "../../assets/img/git.svg";
import bootstrap from "../../assets/img/bootstrap.svg";
import colorSharp from "../../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Soy una persona con habilidades tech de fullstack web developer,
                como React, Redux, PostgreSQL, Node js, HTML, CSS, Express, Java
                Script y Sequelize. Y habilidades soft, como resiliente,
                comprometido, apasionado, pensamiento analítico, en búsqueda
                activa de resultados y resolución de problemas, orientación,
                integración, trabajo en equipo, empatía, iniciativa, curiosidad
                y dedicación
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={react} alt="" />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <img src={js} alt="" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={express} alt="" />
                  <h5>Express js</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="" />
                  <h5>Redux js</h5>
                </div>
                <div className="item">
                  <img src={node} alt="" />
                  <h5>Node js</h5>
                </div>
                <div className="item">
                  <img src={postgresql} alt="" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={css} alt="" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={html} alt="" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={sequelize} alt="" />
                  <h5>Sequelize</h5>
                </div>
                <div className="item">
                  <img src={git} alt="" />
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
