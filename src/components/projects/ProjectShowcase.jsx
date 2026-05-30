import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectShowcase = () => {
  return (
    <div className="mt-24">

      {projects.map(
        (project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={index % 2 !== 0}
          />
        )
      )}

    </div>
  );
};

export default ProjectShowcase;