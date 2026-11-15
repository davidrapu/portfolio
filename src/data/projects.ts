import cognifyScreenshot from "../assets/projects/cognify.webp";
import usePopcornScreenshot from "../assets/projects/usepopcorn.webp";
import eatNSplitScreenshot from "../assets/projects/eatnsplit.webp";

// What fills a project's 16:10 preview: a real screenshot for websites, or a drawn
// illustration of what the project does for everything else.
export type ProjectVisualSpec =
  | { kind: "screenshot"; src: string; alt: string }
  | { kind: "chat" } // RAG chatbot conversation
  | { kind: "tracker" } // nurse.ly record types
  | { kind: "scores" } // per-emotion F1 bars
  | { kind: "network" } // CNN layers → predicted class
  | { kind: "fitness" } // GA best-fitness curve
  | { kind: "trigram" } // P(w3 | w1, w2) token chain
  | { kind: "terminal" }; // Virtual Café client session

export type FeaturedProject = {
  title: string;
  year: string;
  category: string;
  tagline: string;
  description: string;
  highlight: string;
  tags: string[];
  repo: string;
  live?: string;
  visual: ProjectVisualSpec;
};

export type OtherProject = {
  title: string;
  year: string;
  stack: string;
  description: string;
  repo: string;
  live?: string;
  visual: ProjectVisualSpec;
};

const GITHUB = "https://github.com/davidrapu";

// Order matters: featured projects are numbered 01, 02… and alternate left/right in this order.
export const featuredProjects: FeaturedProject[] = [
  {
    title: "Cognify",
    year: "2025–26",
    category: "Product",
    tagline: "Ten-minute games that flag early cognitive decline.",
    description:
      "A full-stack platform for early detection of Mild Cognitive Impairment. Nine games across memory, attention, reaction speed and problem-solving feed a normalised scoring system and a Random Forest risk model served from FastAPI.",
    highlight: "96.75% risk-model accuracy",
    tags: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "FastAPI"],
    repo: `${GITHUB}/Cognify`,
    live: "https://cog-nify.app",
    visual: { kind: "screenshot", src: cognifyScreenshot, alt: "Cognify home page" },
  },
  {
    title: "RAG FAQ Assistant",
    year: "2026",
    category: "AI system",
    tagline: "A support bot that only answers from what it knows.",
    description:
      "Each message is embedded locally, the closest FAQ entries are pulled from Postgres with pgvector, and Claude streams an answer grounded in them to a React chat widget. Guardrails cover hallucination, prompt injection and personal data.",
    highlight: "25 / 30 passed an LLM-as-judge eval",
    tags: ["Python", "FastAPI", "Claude API", "pgvector", "React", "Docker"],
    repo: `${GITHUB}/chatbots`,
    visual: { kind: "chat" },
  },
  {
    title: "nurse.ly",
    year: "2025",
    category: "Team product",
    tagline: "Health tracking for a child’s first years.",
    description:
      "A full-stack child health tracker built in a Scrum team. Parents log feeding, sleep, nappies, temperature, growth and medication. I led the database design, Docker integration and Pytest integration testing.",
    highlight: "Led database, Docker & testing",
    tags: ["Python", "FastAPI", "MySQL", "React", "TypeScript", "Docker"],
    repo: `${GITHUB}/nurse.ly`,
    live: "https://nurse-ly.vercel.app",
    visual: { kind: "tracker" },
  },
  {
    title: "Tweet Emotion Classifier",
    year: "2026",
    category: "NLP",
    tagline: "Reading the emotion behind a tweet.",
    description:
      "Classifies tweets into six emotions: sadness, joy, love, anger, fear and surprise. Text is cleaned with NLTK, turned into TF-IDF features and classified with logistic regression, then tested on 83,362 held-out tweets.",
    highlight: "89% accuracy on 83k tweets",
    tags: ["Python", "scikit-learn", "NLTK", "pandas"],
    repo: `${GITHUB}/Text-Classification-Model`,
    visual: { kind: "scores" },
  },
  {
    title: "CNN Image Classifier",
    year: "2025",
    category: "Computer vision",
    tagline: "Teaching a network to tell a cat from a truck.",
    description:
      "A multi-layer convolutional network trained in PyTorch on CIFAR-10’s ten classes, with data augmentation for better generalisation. Evaluated with confusion matrices and learning curves.",
    highlight: "80% test accuracy on CIFAR-10",
    tags: ["PyTorch", "Python", "NumPy"],
    repo: `${GITHUB}/CNN-Model`,
    visual: { kind: "network" },
  },
];

export const otherProjects: OtherProject[] = [
  {
    title: "Evolutionary Algorithms & GP",
    year: "2026",
    stack: "Python · Jupyter",
    description:
      "A genetic algorithm extended into a stack-based genetic programming system with tournament selection, crossover, mutation and elitism.",
    repo: `${GITHUB}/Evolutionary-Algorithm-Genetic-Programming`,
    visual: { kind: "fitness" },
  },
  {
    title: "Trigram Language Model",
    year: "2025",
    stack: "NLTK · Gemini API",
    description:
      "Next-word prediction and sentence generation on the Brown corpus, with Laplace smoothing and a Gemini comparison.",
    repo: `${GITHUB}/NLE-Model`,
    visual: { kind: "trigram" },
  },
  {
    title: "Virtual Café",
    year: "2025",
    stack: "Java · Sockets · Threads",
    description:
      "A multi-client Java server where customers order tea and coffee and watch their order move from waiting to brewing to the tray.",
    repo: `${GITHUB}/Virtual-Cafe`,
    visual: { kind: "terminal" },
  },
  {
    title: "usePopcorn",
    year: "2025",
    stack: "React · OMDb API",
    description:
      "Search movies from the OMDb API, see the details and keep a rated list of everything you’ve watched.",
    repo: `${GITHUB}/usePopcorn`,
    live: "https://use-popcorn-three-lime.vercel.app",
    visual: { kind: "screenshot", src: usePopcornScreenshot, alt: "usePopcorn showing Interstellar" },
  },
  {
    title: "Eat-N-Split",
    year: "2025",
    stack: "React",
    description: "Split a bill with friends and keep track of who owes who.",
    repo: `${GITHUB}/Eat-N-Split`,
    live: "https://eat-n-split-pi-eight.vercel.app",
    visual: { kind: "screenshot", src: eatNSplitScreenshot, alt: "Eat-N-Split bill splitter" },
  },
];
