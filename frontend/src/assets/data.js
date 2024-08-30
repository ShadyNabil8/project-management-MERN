import { bImage, cImage, dImage, fImage, mImage, rImage } from "./images";
import sImage from "./images/s.png";

export const workspacesData = [
  {
    id: "1",
    title: "Creative",
    image: cImage,
    members: "23",
    spaces: [
      {
        id: "1",
        name: "RPA",
        image: rImage,
        lists: [
          { id: "1", name: "Robot" },
          { id: "2", name: "Orchestrator" },
          { id: "3", name: "Studio" },
          { id: "4", name: "Task Scheduler" },
          { id: "5", name: "Process Designer" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Development",
    image: dImage,
    members: "15",
    spaces: [
      {
        id: "2",
        name: "Frontend",
        image: fImage,
        lists: [
          { id: "1", name: "UI Design" },
          { id: "2", name: "React Components" },
          { id: "3", name: "State Management" },
          { id: "4", name: "CSS Frameworks" },
        ],
      },
      {
        id: "3",
        name: "Backend",
        image: bImage,
        lists: [
          { id: "1", name: "API Development" },
          { id: "2", name: "Database Management" },
          { id: "3", name: "Authentication" },
          { id: "4", name: "Middleware" },
          { id: "5", name: "Deployment" },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Marketing",
    image: mImage,
    members: "12",
    spaces: [
      {
        id: "4",
        name: "Campaigns",
        image: cImage,
        lists: [
          { id: "1", name: "Social Media" },
          { id: "2", name: "Email Marketing" },
          { id: "3", name: "SEO" },
          { id: "4", name: "PPC Advertising" },
        ],
      },
      {
        id: "5",
        name: "Content Creation",
        image: cImage,
        lists: [
          { id: "1", name: "Blog Posts" },
          { id: "2", name: "Videos" },
          { id: "3", name: "Infographics" },
          { id: "4", name: "White Papers" },
        ],
      },
    ],
  },
];
