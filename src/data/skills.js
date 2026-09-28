// Skill bars for the About page.
// level = self-assessed proficiency (0-100), used for the animated fill.
export const skillGroups = [
  {
    id: "frontend",
    title: "Front-End (Primary)",
    skills: [
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React.js", level: 85 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "Responsive & DOM", level: 85 },
    ],
  },
  {
    id: "backend",
    title: "Back-End (Primary)",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "REST API Integration", level: 85 },
      { name: "Express.js", level: 75 },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    id: "secondary",
    title: "Secondary / Backend Exposure",
    skills: [
      { name: "Python", level: 75 },
      { name: "FastAPI", level: 65 },
      { name: "Flask", level: 65 },
      { name: "LangChain", level: 65 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Vercel", level: 85 },
      { name: "Railway", level: 80 },
      { name: "Cross-Browser Debugging", level: 80 },
    ],
  },
];
