// import { kebabCase, kebabArray } from "@/utils/utils";
import { Experience } from "types";

const experience: Experience[] = [
  {
    id: 0,
    pos: "Wordpress Development Intern",
    company:"Meru Accounting",
    img: "/static/experience/meru.png",
    link: "",
    time: "May 2023 – Present",
    tags: [
            "Worked closely with content and UI/UX team to improve website pages.",
            "Tweaked PHP based wordpress themes and plugins to optimise performance and add functionalities to website.",
            "Worked on with custom CSS and JS to enable specific tasks.",
            "Used plugins like Elementor to design pages."
          ],
  },
  {
    id: 1,
    pos: "Wordpress Development Intern",
    company:"R Digital Media and Research",
    img: "/static/experience/R.png",
    link: "",
    time: "July 2023 – Present",
    tags: [
            "Worked closely on content and UI/UX to improve website pages.",
            "Tweaked PHP based wordpress themes and plugins to optimise performance and add functionalities to website.",
            "Coordinated with clients to understand their requirements.",
            "Improved client website speed by 20%"
          ],
  },
  {
    id: 2,
    pos: "Webmaster",
    company:"PCCOE IEEE Student Branch",
    img: "/static/experience/pccoe.webp",
    link: "",
    time: "Aug 2022 – June 2023",
    tags: ["Designed a whole plan and architecture for dynamic and responsive website for event at National level.",
            "Coordinated with the team to develop the Webiste for College Event with Admin privileges, Payment gateway and certificate distributor in ReactJs, NestJs and MongoDB.",
            "Worked with REST APIs to retrieve and display data from databases.",
            "Improved website performance and speed through optimization techniques by 55%.",
            "Developed a proper DevOps plan and Setup CI/CD pipeline using Github actions to host website."
          ],
  },
  {
    id: 3,
    pos: "Full Stack Web-developer",
    company:"ACRYLIC SOLUTIONS PVT. LTD.",
    img: "/static/experience/acrylic.png",
    link: "",
    time: "Oct 2022 - March 2023",
    tags: [
            "Worked with MVC frameworks to develop robust and scalable backends",
            "Troubleshot and fixed bugs and issues in the backend to ensure smooth operation of the applications",
            "Worked with REST APIs to retrieve and display data from databases.",
            "Improved website performance and speed through optimization techniques by 55%.",
            "Developed a proper DevOps plan and Setup CI/CD pipeline using Github actions to host website."
          ],
  },
  {
    id: 4,
    pos: "Product Development Intern",
    company:"Dazzme Fashions",
    img: "/static/experience/dazzme.png",
    link: "",
    time: "Jul 2022 – Sep 2022",
    tags: [
            "Worked with MVC frameworks to develop robust and scalable backends",
            "Troubleshot and fixed bugs and issues in the backend to ensure smooth operation of the applications",
            "Designed and developed dynamic and responsive websites using ReactJS",
            "Designed and developed a proper DevOps plan and Setup CI/CD pipeline using Github Actions"
          ],
  },
];

// export const allTags = []

// projects.forEach((project) => {
//   project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
// });

// export const allKebabTags = allTags.map(tag => (
//   kebabCase(tag)
// ))

export default experience