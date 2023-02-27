import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderImg from "../../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "FullStack Web Developer",
    "Front-End Developer",
    "Back-End Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(600);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenidos a mi portfolio</span>
            <h1>
              {"Hola mi nombre es Matias y soy..."}
              <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Soy Full Stack Web Developer, con experiencia realizando proyectos
              Full Stack desarrollados en el stack PERN con React, Redux,
              PostgreSQL, Express, Node js, HTML, CSS, Express, Java Script y
              Sequelize. <br />
              <br /> Uno de los proyectos fue realizado en equipo utilizando
              SCRUM con sprints de una semana. <br />
              <br /> Soy una persona con excelente formación académica,
              resiliente y con buenos valores; lo cual me hace un profesional
              muy comprometido y apasionado en lo que hago, con pensamiento
              analítico y creativo, en búsqueda activa de resultados y
              resolución de problemas, orientación, integración y excelente
              trabajo en equipo, empatía, iniciativa, curiosidad y dedicación a
              lo que hago.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
