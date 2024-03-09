import './Project-Card.css';

function ProjectCard(props) {
  return (
    <div className="project-card" onClick={() => window.location.href = props.projectUrl}>
      <h2 className="project-title">{props.projectTitle}</h2>
      {props.screenshot &&
        <div className='screenshot-container'>
          <img src={props.screenshot}></img>
        </div>}
      <span className="project-desc">{props.projectDesc}</span>
    </div>
  );
}

export default ProjectCard;
