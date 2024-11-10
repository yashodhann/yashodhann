export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};

export type Experience = {
  id: number;
  pos: string;
  company: string;
  img: string;
  link?: string;
  time: string;
  tags: string[];
};