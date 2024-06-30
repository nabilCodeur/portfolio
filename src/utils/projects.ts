import project from "./enum";
import { ProjectGroup, ProjectSolo } from "./types";

const projectsGroups: Array<ProjectGroup> = [
  {
    title: "Clone de Vinted",
    description:
      "Projet qui reproduit le design et la navigation du site Vinted",
    type: project.group,
    links: {
      github: "https://github.com/arnaudpant/vinted",
      website: "https://bootcamp-vinted.netlify.app/",
    },
  },
  {
    title: "Cartes de visite",
    description: "Créer une carte de visite et la partager avec un QR code",
    type: project.group,
    links: {
      github: "https://github.com/Michel-Developpement/visit-card",
      website: "https://www.visit-card.online/",
    },
  },
];

const projectsSolo: Array<ProjectSolo> = [
  {
    title: "Clone de Netflix",
    description:
      "Projet qui reproduit Netflix en utilisant une API pour les films, et Firebase pour l'authentification et les favoris.",
    type: project.solo,
    links: {
      github: "https://github.com/nabilCodeur/clone-netflix",
      website: "https://clone-netflix-8ji1.vercel.app/",
    },
  },
];

export { projectsGroups, projectsSolo };
