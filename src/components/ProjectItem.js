import React from "react";

function ProjectItem({ name, about, technologies, href }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <a href={href}></a>
    </div>
  );
}

export default ProjectItem;