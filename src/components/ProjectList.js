import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
            href={project.href} // pass the href value as a prop
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;