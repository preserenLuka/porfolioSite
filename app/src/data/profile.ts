export interface Profile {
  initials: string;
  name: string;
  locationLabel: string;
  locationHref: string;
  bio: string;
  skills: string[];
}

export const profile: Profile = {
  initials: "LP",
  name: "Luka Prešeren",
  locationLabel: "žaloviče 15a, Slovenija",
  locationHref:
    "https://www.google.com/maps/search/?api=1&query=žaloviče+15a+Slovenija",
  bio: `I'm 20 years old and learning web development. I focus on practical
projects: small tools, UIs, and things I find fun to build. I use
React on the frontend and Node/Express for simple backends.`,
  skills: [
    "React",
    "TypeScript",
    "Node.js / Express",
    "HTML & CSS",
    "Basic SQL",
  ],
};
