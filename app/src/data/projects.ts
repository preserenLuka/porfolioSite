export interface Project {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BlockCraft Launcher",
    desc: "Custom launcher and small utilities for a Minecraft server community.",
    tags: ["React", "Electron", "Node.js"],
    link: "#",
  },
  {
    id: 2,
    title: "PixelStore",
    desc: "Small e-commerce demo with a focus on fast UI and simple checkout flow.",
    tags: ["Next.js", "Stripe"],
    link: "#",
  },
  {
    id: 3,
    title: "TaskMate",
    desc: "Personal task manager with sync and minimal UI.",
    tags: ["React", "Express"],
    link: "#",
  },
];
