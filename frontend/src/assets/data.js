import { bImage, cImage, dImage, fImage, mImage, rImage } from "./images";

export const listsData = [
  { id: "1", name: "Robot", spaceId: "1" },
  { id: "2", name: "Orchestrator", spaceId: "1" },
  { id: "3", name: "Studio", spaceId: "1" },
  { id: "4", name: "Task Scheduler", spaceId: "1" },
  { id: "5", name: "Process Designer", spaceId: "1" },
  { id: "1", name: "UI Design", spaceId: "2" },
  { id: "2", name: "React Components", spaceId: "2" },
  { id: "3", name: "State Management", spaceId: "2" },
  { id: "4", name: "CSS Frameworks", spaceId: "2" },
  { id: "1", name: "API Development", spaceId: "3" },
  { id: "2", name: "Database Management", spaceId: "3" },
  { id: "3", name: "Authentication", spaceId: "3" },
  { id: "4", name: "Middleware", spaceId: "3" },
  { id: "5", name: "Deployment", spaceId: "3" },
  { id: "1", name: "Social Media", spaceId: "4" },
  { id: "2", name: "Email Marketing", spaceId: "4" },
  { id: "3", name: "SEO", spaceId: "4" },
  { id: "4", name: "PPC Advertising", spaceId: "4" },
  { id: "1", name: "Blog Posts", spaceId: "5" },
  { id: "2", name: "Videos", spaceId: "5" },
  { id: "3", name: "Infographics", spaceId: "5" },
  { id: "4", name: "White Papers", spaceId: "5" },
];

export const spacesData = [
  { id: "1", name: "RPA", image: rImage, workspaceId: "1" },
  {
    id: "2",
    name: "Frontend",
    image: fImage,
    workspaceId: "2",
  },
  {
    id: "3",
    name: "Backend",
    image: bImage,
    workspaceId: "2",
  },
  {
    id: "4",
    name: "Campaigns",
    image: cImage,
    workspaceId: "3",
  },
  {
    id: "5",
    name: "Content Creation",
    image: cImage,
    workspaceId: "3",
  },
];

export const workspacesData = [
  {
    id: "1",
    title: "Creative",
    image: cImage,
    members: "23",
  },
  {
    id: "2",
    title: "Development",
    image: dImage,
    members: "15",
  },
  {
    id: "3",
    title: "Marketing",
    image: mImage,
    members: "12",
  },
];
