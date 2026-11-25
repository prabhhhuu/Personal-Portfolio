// Timeline entries for the About page (newest first).
export const timeline = [
  {
    id: "asvix",
    period: "Sep 2026 — Nov 2026",
    title: "Full Stack Engineer Intern",
    org: "Asvix",
    type: "Internship",
    points: [
      "Loaded and organised 27,000+ normalised surveillance records from IDSP and WHO sources into Pinecone for context-aware outbreak answers.",
      "Split IDSP and WHO data into two Pinecone namespaces to keep the sources from mixing.",
      "Worked around Pinecone's 40 KB metadata limit by storing report excerpts and fetching full reports on demand.",
      "Tested the APIs with 33 checks (27 offline, 6 live) covering accuracy, data consistency and error handling.",
    ],
  },
  {
    id: "genai-intern",
    period: "Jun 2025 — Jul 2025",
    title: "Generative AI Intern",
    org: "Sinthan AI Academy",
    type: "Internship",
    points: [
      "Built a multi-service AI chatbot prototype with Python, LangChain, Flask and Next.js.",
      "Connected the Google Gemini API for natural conversational replies.",
      "Stored documents in ChromaDB Cloud and used retrieval for context-aware answers.",
      "Handled API integration and debugging to make the prototype dependable.",
    ],
  },
  {
    id: "wareflow",
    period: "Open Source",
    title: "WareFlow — Inventory & Warehouse Management Tool",
    org: "Collaborative GitHub Project",
    type: "Open Source",
    points: [
      "Redesigned review.html using Tailwind CSS as a contributor, coordinating changes via Git/GitHub without altering unrelated files.",
      "Cleaned up repository hygiene: untracked accidentally committed node_modules and build artifacts.",
    ],
  },
  {
    id: "bca",
    period: "2023 — 2026",
    title: "B.C.A. — Bachelor of Computer Applications",
    org: "SRM Institute of Science and Technology, Kattankulathur",
    type: "Education",
    points: ["CGPA: 7.58"],
  },
  {
    id: "hsc",
    period: "2023",
    title: "Higher Secondary Education",
    org: "Christian Matriculation, Oddanchatram",
    type: "Education",
    points: ["Score: 87%"],
  },
];

export const certifications = [
  "Generative AI Certification — Sinthan AI Academy",
  "Prompt Engineering Course — errormakesclever",
];
