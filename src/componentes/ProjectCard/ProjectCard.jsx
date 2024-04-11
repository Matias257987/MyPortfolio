import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  repo,
  deploy,
  muestra,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          {repo ? (
            <a
              className="btn btn-outline-info"
              href={repo}
              target="_blank"
              rel="noreferrer"
            >
              ver repositorio
            </a>
          ) : null}
          <br />
          {deploy ? (
            <a
              className="btn btn-outline-info"
              href={deploy}
              target="_blank"
              rel="noreferrer"
            >
              ir al sitio
            </a>
          ) : null}
          <br />
          {muestra ? (
            <a
              className="btn btn-outline-info"
              href={muestra}
              target="_blank"
              rel="noreferrer"
            >
              ir al sitio
            </a>
          ) : null}
        </div>
      </div>
    </Col>
  );
};
