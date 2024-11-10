import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Multi Factor Authentication",
    desc: "Two-Factor Authentication, also commonly referred to as 2FA, is a specific type of multi-factor authentication (MFA) that requires two forms of identification.",
    img: "/static/projects/MFAuth.png",
    link: "https://mfa.yashodhan.co",
    github: "",
    tags: ["NextJS","MERN", "MongoDB","Vercel","OTPAuth"],
  },
  {
    id: 1,
    title: "Shortify: URL Shortner",
    desc: "✂️ Shortify is a URL shortener service that associates long user-generated links with shorter ones.",
    img: "/static/projects/urlshortner.png",
    link: "https://short.yashodhan.co",
    github: "",
    tags: ["NextJS", "Page Based Routing", "Postgres", "Redux", "Vercel"],
  },
  {
    id: 2,
    title: "Event Management Frontend",
    desc: "This has all the frontend resources you will need to handel a event or fest.",
    img: "/static/projects/event-frontend.png",
    link: "",
    github: "https://github.com/yashodhann/EventClient",
    tags: ["ReactJS","React Router", "Firebase","Github Actions","DigitalOcean"],
  },
  {
    id: 3,
    title: "Event Management Backend",
    desc: "This repo contains all backend resources to handel a event or fest.",
    img: "/static/projects/praxis-backend.png",
    link: "",
    github: "https://github.com/yashodhann/EventServer",
    tags: ["NestJS","MongoDB", "Github Actions","DigitalOcean"],
  },
  {
    id: 4,
    title: "Paytm Payments Gateway",
    desc: "This is ReactJS based Paytm-PG integration which was hosted on digital ocean.",
    img: "/static/projects/paytm-pg.png",
    link: "",
    github: "https://github.com/yashodhann/Payment",
    tags: ["ReactJS","Express", "Firebase", "DigitalOcean"],
  }
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects