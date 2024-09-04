import {
  bImage,
  cImage,
  dImage,
  fImage,
  mImage,
  rImage,
  menuImage,
} from "./images";

export const listsData = [
  {
    id: "1",
    name: "Robot",
    spaceId: "RPA123",
    image: menuImage,
  },
  {
    id: "3",
    name: "Studio",
    spaceId: "RPA123",
    image: menuImage,
  },
  {
    id: "2",
    name: "Orchestrator",
    spaceId: "RPA123",
    image: menuImage,
  },
  {
    id: "4",
    name: "Task Scheduler",
    spaceId: "RPA123",
    image: menuImage,
  },
  {
    id: "5",
    name: "Process Designer",
    spaceId: "RPA123",
    image: menuImage,
  },
  {
    id: "6",
    name: "UI Design",
    spaceId: "2",
    image: menuImage,
  },
  {
    id: "7",
    name: "React Components",
    spaceId: "Frontend48123",
    image: menuImage,
  },
  {
    id: "8",
    name: "State Management",
    spaceId: "Frontend48123",
    image: menuImage,
  },
  {
    id: "9",
    name: "CSS Frameworks",
    spaceId: "Frontend48123",
    image: menuImage,
  },
  {
    id: "10",
    name: "API Development",
    spaceId: "Backend154545",
    image: menuImage,
  },
  {
    id: "11",
    name: "Database Management",
    spaceId: "Backend154545",
    image: menuImage,
  },
  {
    id: "12",
    name: "Authentication",
    spaceId: "Backend154545",
    image: menuImage,
  },
  {
    id: "13",
    name: "Middleware",
    spaceId: "Backend154545",
    image: menuImage,
  },
  {
    id: "14",
    name: "Deployment",
    spaceId: "Backend154545",
    image: menuImage,
  },
  {
    id: "15",
    name: "Social Media",
    spaceId: "Campaigns75145",
    image: menuImage,
  },
  {
    id: "16",
    name: "Email Marketing",
    spaceId: "Campaigns75145",
    image: menuImage,
  },
  {
    id: "17",
    name: "SEO",
    spaceId: "Campaigns75145",
    image: menuImage,
  },
  {
    id: "18",
    name: "PPC Advertising",
    spaceId: "Campaigns75145",
    image: menuImage,
  },
  {
    id: "19",
    name: "Blog Posts",
    spaceId: "ContentCreation48546",
    image: menuImage,
  },
  {
    id: "20",
    name: "Videos",
    spaceId: "ContentCreation48546",
    image: menuImage,
  },
  {
    id: "21",
    name: "Infographics",
    spaceId: "ContentCreation48546",
    image: menuImage,
  },
  {
    id: "22",
    name: "White Papers",
    spaceId: "ContentCreation48546",
    image: menuImage,
  },
];

export const spacesData = [
  {
    id: "RPA123",
    name: "RPA",
    image: rImage,
    workspaceId: "1",
  },
  {
    id: "Frontend48123",
    name: "Frontend",
    image: fImage,
    workspaceId: "2",
  },
  {
    id: "Backend154545",
    name: "Backend",
    image: bImage,
    workspaceId: "2",
    lists: [
      {
        id: "10",
        name: "API Development",
      },
      {
        id: "11",
        name: "Database Management",
      },
      {
        id: "12",
        name: "Authentication",
      },
      {
        id: "13",
        name: "Middleware",
      },
      {
        id: "14",
        name: "Deployment",
      },
    ],
  },
  {
    id: "Campaigns75145",
    name: "Campaigns",
    image: cImage,
    workspaceId: "3",
    lists: [
      {
        id: "15",
        name: "Social Media",
      },
      {
        id: "16",
        name: "Email Marketing",
      },
      {
        id: "17",
        name: "SEO",
      },
      {
        id: "18",
        name: "PPC Advertising",
      },
    ],
  },
  {
    id: "ContentCreation48546",
    name: "Content Creation",
    image: cImage,
    workspaceId: "3",
    lists: [
      {
        id: "19",
        name: "Blog Posts",
      },
      {
        id: "20",
        name: "Videos",
      },
      {
        id: "21",
        name: "Infographics",
      },
      {
        id: "22",
        name: "White Papers",
      },
    ],
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

export const fakeUsersData = {
  name: "shady",
  workspaces: ["1", "2", "3"],
};
