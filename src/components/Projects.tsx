import { projectsGroups, projectsSolo } from "@/utils/projects";
import CarouselModel from "./CarouselModel";

const Projects = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold uppercase">Projets de groupe</h2>
      <CarouselModel projects={projectsGroups} />
      <h2 className="text-xl font-bold uppercase">Projets solo</h2>
      <CarouselModel projects={projectsSolo} />
    </div>
  );
};

export default Projects;
