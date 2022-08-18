import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, site }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <span>
            <a href={site} target="_blank">
              Link
            </a>
          </span>
        </div>
      </div>
    </Col>
  );
};
