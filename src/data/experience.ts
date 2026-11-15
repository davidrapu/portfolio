export type ExperienceEntry = {
  date: string;
  org: string;
  role: string;
  description: string;
};

// Newest first. Entries alternate left/right on the timeline by their position in this list.
export const experience: ExperienceEntry[] = [
  {
    date: "Oct 2026 — Present",
    org: "Huawei",
    role: "Software Intern · MTN Project Team · Lagos",
    description:
      "Supporting Huawei’s software team delivering solutions for MTN Nigeria, one of Africa’s largest telecom operators.",
  },
  {
    date: "2023 — 2026",
    org: "University of Essex",
    role: "BSc Artificial Intelligence · First Class",
    description:
      "Dean’s List of Excellence. Machine learning, computer vision, natural language engineering, data structures & algorithms.",
  },
  {
    date: "2025",
    org: "Bright Network IEUK",
    role: "Technology & Engineering Programme",
    description:
      "Industry experience programme covering technology and engineering practice with leading employers.",
  },
  {
    date: "Certification",
    org: "HackerRank",
    role: "Software Engineer Skills Certification",
    description:
      "Certified in core software engineering skills: problem solving, data structures and SQL.",
  },
];
