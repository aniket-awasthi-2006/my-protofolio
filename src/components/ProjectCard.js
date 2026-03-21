import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    
    <Col size={12} sm={6} md={4}>
      <a href={projectUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' , height: '100%'}}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`${title} preview`} className="proj-image"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
   
  )
}
