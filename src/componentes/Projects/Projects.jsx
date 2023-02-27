import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import projImg1 from "../../assets/img/BreedsDogs.jpg";
import projImg2 from "../../assets/img/HenryBooks.jpg";
import projImg3 from "../../assets/img/gato2.jpg";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Henry Books",
      description: "E-commerce de libros",
      imgUrl: projImg2,
    },
    {
      title: "Breeds Dogs",
      description: "App donde puedes buscar y/o crear razas de perros",
      imgUrl: projImg1,
    },
    {
      title: "Cat Adventure",
      description: "Juego para android desarrolado con Unity",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {/* ESTO GENERA LA ANIMACION EN LAS TARJETAS
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                > 
                  
                TABLERO PARA SEPARAR TARJETAS DE 3 EN 3
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item> 
                  <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>

                  ESTO GENERA LA ANIMACION EN LAS TARJETAS
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  > 
                </div> 
              )} 
            </TrackVisibility> */}
            <h2>Projects</h2>
            <p>
              En esta sección podrán encontrar los proyectos en los que tuve el
              privilegio de trabajar.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Pane eventKey="first">
                <Row>
                  {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </Tab.Pane>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
