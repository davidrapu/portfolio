import {
  siPython,
  siTypescript,
  siJavascript,
  siOpenjdk,
  siCplusplus,
  siReact,
  siTailwindcss,
  siShadcnui,
  siHtml5,
  siCss,
  siNodedotjs,
  siExpress,
  siFastapi,
  siPydantic,
  siPrisma,
  siJsonwebtokens,
  // siClaude,
  // siGooglegemini,
  siPytorch,
  siScikitlearn,
  siPandas,
  siNumpy,
  siPostgresql,
  siMysql,
  siDocker,
  siGit,
  siVercel,
  siRailway,
  siJira,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

export type Skill = {
  label: string; // text shown in the ticker
  icon: SimpleIcon; // icon.path is the SVG path, icon.hex the brand colour
};

export const skills: Skill[] = [
  // Languages
  { label: "Python", icon: siPython },
  { label: "TypeScript", icon: siTypescript },
  { label: "JavaScript", icon: siJavascript },
  { label: "Java", icon: siOpenjdk },
  { label: "C++", icon: siCplusplus },
  // Frontend
  { label: "React", icon: siReact },
  { label: "Tailwind CSS", icon: siTailwindcss },
  { label: "shadcn/ui", icon: siShadcnui },
  { label: "HTML", icon: siHtml5 },
  { label: "CSS", icon: siCss },
  // Backend
  { label: "Node.js", icon: siNodedotjs },
  { label: "Express", icon: siExpress },
  { label: "FastAPI", icon: siFastapi },
  { label: "Pydantic", icon: siPydantic },
  { label: "Prisma", icon: siPrisma },
  { label: "JWT", icon: siJsonwebtokens },
  // AI and data
  // { label: "Claude", icon: siClaude },
  // { label: "Gemini", icon: siGooglegemini },
  { label: "PyTorch", icon: siPytorch },
  { label: "scikit-learn", icon: siScikitlearn },
  { label: "pandas", icon: siPandas },
  { label: "NumPy", icon: siNumpy },
  { label: "PostgreSQL", icon: siPostgresql },
  { label: "MySQL", icon: siMysql },
  // Tools
  { label: "Docker", icon: siDocker },
  { label: "Git", icon: siGit },
  { label: "Vercel", icon: siVercel },
  { label: "Railway", icon: siRailway },
  { label: "Jira", icon: siJira },
];
