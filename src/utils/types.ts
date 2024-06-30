import project from "./enum";

type Project = {
  title: string;
  description: string;
  type: project;
  links: { github: string; website: string };
};

type ProjectGroup = Omit<Project,"type"> & {type:project.group}
type ProjectSolo = Omit<Project,"type"> & {type:project.solo}

export default Project
export type{ProjectGroup,ProjectSolo}