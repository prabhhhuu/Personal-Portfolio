// Project data — single source of truth for the whole site.
// Every project supports both a card view (grid) and a detail case study.
//
// HOW TO ADD YOUR OWN MEDIA (screenshots / folders):
//   1. Drop files into  portfolio-frontend/public/assets/projects/<project-id>/
//   2. Set `image` to the first screenshot, e.g.  /assets/projects/image-gallery/cover.png
//   3. Add extra shots to `gallery: ["/assets/projects/<id>/2.png", ...]`
//   See ASSETS-README.txt in the project root for the full guide.

export const projects = [
  {
    id: "code-sensei",
    title: "Code Sensei — AI Coding Tutor",
    subtitle: "Flask · Groq LLMs",
    tags: ["Flask", "Python", "AI"],
    filterTags: ["Python", "AI"],
    image: "/assets/projects/code-sensei/cover.jpg",
    gallery: [],
    liveUrl: "https://code-sensei-ee38.onrender.com/editor",   // paste your Render URL, e.g. https://<app>.onrender.com
    repoUrl: "https://github.com/prabhhhuu/Code-Sensei",
    featured: true,

    short:
      "A full-stack AI tutor that reviews code with LLMs, auto-grades multi-language coding challenges, and tracks learner progress with streaks.",

    problem:
      "Beginners paste code into generic AI chats and get answers — but no feedback loop: nothing checks solutions against test cases, remembers what they've practiced, or keeps them consistent day to day.",

    approach:
      "Built a Flask app with session-based auth and an embedded code editor. Code review runs through Groq's LLM API with mode-specific prompts (explain / improve / optimize / secure). A custom test runner compiles and executes submissions in isolated subprocesses across Python, JavaScript, Java, C and C++, comparing real outputs against expected results. Every analysis and attempt is stored with auto-detected difficulty, powering a dashboard with language breakdowns and daily streaks. The database layer runs SQLite locally and Postgres in production via a single env var, and the whole app ships as a Docker image bundling every language toolchain.",

    result:
      "A deployed tutoring platform where learners get instant AI feedback, solve challenges with real pass/fail test results, and build daily streaks. Adding a new challenge is one data entry — the runner, grading and dashboard pick it up automatically.",

    highlights: [
      "Custom test runner — compiles & executes user code in 5 languages with per-language toolchains",
      "LLM code review via Groq API with four analysis modes",
      "Dockerized deploy on Render; SQLite/Postgres switchable with one env var",
    ],

    stack: ["Flask", "Python", "Groq API (LLM)", "JavaScript", "SQLite", "PostgreSQL", "Docker", "Render"],
},
  {
    id: "favourite-student-list",
    title: "Favourite Student List",
    subtitle: "React.js · Context API",
    tags: ["React", "Tailwind", "Context API"],
    filterTags: ["React", "Tailwind"],
    image: "/assets/projects/favourite-student-list/cover.png",
    gallery: [],
    liveUrl: "https://favourite-student-hazel.vercel.app/",
    repoUrl: "https://github.com/prabhhhuu/Favourite-student",
    featured: false,
    short:
      "A React app using the Context API for global state and Tailwind CSS for styling, deployed live on Vercel.",
    problem:
      "Several components needed access to the same list state — prop drilling through every level would make the code brittle and hard to extend.",
    approach:
      "Lifted shared state into a Context provider so any component can read and update the list without prop drilling. Styled entirely with Tailwind utility classes, keeping the CSS footprint minimal and the UI consistent across screen sizes.",
    result:
      "A clean, globally-styled app deployed on Vercel that demonstrates React's built-in state management patterns instead of reaching for a state library.",
    highlights: [
      "Context API for global state — no prop drilling",
      "Utility-first styling with Tailwind CSS",
      "Deployed live on Vercel",
    ],
    stack: ["React.js", "Context API", "Tailwind CSS", "Vercel"],
  },
  {
  id: "weather-report-app",
  title: "Weather Report App",
  subtitle: "React Weather Application",
  tags: ["React", "Axios", "Tailwind CSS"],
  filterTags: ["React", "API Integration"],
  image: "/assets/projects/weather-report/cover.png",
  gallery: [],
  liveUrl: "https://weather-app-report-peach.vercel.app/",
  repoUrl: "https://github.com/prabhhhuu/Weather-app-report",
  featured: true,

  short:
    "A responsive React weather application that fetches real-time weather data for any city using the OpenWeatherMap API.",

  problem:
    "Users need a simple way to quickly check current weather conditions for different cities without navigating through complex weather platforms.",

  approach:
    "Built a responsive React application that integrates the OpenWeatherMap API using Axios to fetch real-time weather data. Added proper error handling for invalid cities and network issues, with a responsive Tailwind CSS interface designed to work across different screen sizes.",

  result:
    "A responsive and user-friendly weather application that provides real-time weather information for any city with reliable API handling and clear error feedback.",

  highlights: [
    "Real-time weather data using OpenWeatherMap API",
    "Axios-based API integration",
    "Error handling for invalid cities and network issues",
    "Fully responsive design with Tailwind CSS",
  ],

  stack: ["React", "Axios", "Tailwind CSS", "OpenWeatherMap API"],
},
  {
    id: "redstore",
    title: "RedStore",
    subtitle: "Responsive E-Commerce Website",
    tags: ["JavaScript", "HTML", "CSS"],
    filterTags: ["JavaScript"],
    image: "/assets/projects/redstore/cover.png",
    gallery: [],
    liveUrl: "https://prabhhhuu.github.io/RedStore-ecommerce/",
    repoUrl: "https://github.com/prabhhhuu/RedStore-ecommerce",
    featured: false,
    short:
      "A responsive storefront (HTML5, CSS3, JavaScript) with live search and filtering via vanilla JS.",
    problem:
      "The original project had a broken Tailwind build pipeline — styles output was bloated and inconsistent, and the storefront needed live product search that worked without a framework.",
    approach:
      "Rebuilt the Tailwind CSS build pipeline from scratch, cutting output file size and restoring consistent styling. Implemented live search and category filtering in vanilla JavaScript — typing filters products in real time by listening to input events and re-rendering the product grid. The layout is mobile-first responsive across breakpoints.",
    result:
      "A fast, framework-free storefront with instant search, plus a repaired build pipeline — a good demonstration of debugging build tooling, not just app code.",
    highlights: [
      "Live search + filtering in vanilla JS",
      "Rebuilt a broken Tailwind build pipeline",
      "Smaller CSS output, consistent styling",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
];

export const getProjectById = (id) => projects.find((p) => p.id === id);

export const featuredProjects = projects.filter((p) => p.featured);

export const allFilterTags = [
  "All",
  ...Array.from(new Set(projects.flatMap((p) => p.filterTags))),
];
