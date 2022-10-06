import React from "react";

function ProjectItem({ name, about, technologies }) {
  const Technologies = technologies.map((element)=>
  <span key ={element}>{element}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {Technologies}
      </div>
    </div>
  );
}

export default ProjectItem;
