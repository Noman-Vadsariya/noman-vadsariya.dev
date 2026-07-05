import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Veeam Software",
    location: "San Jose, California",
    period: "Jun 2026 – Aug 2026",
    disciplines: ["SWE", "Data-Eng"],
    highlights: [
     "Prototyped full-text indexing in Databricks, improving search performance for large-scale string queries",
     "Ran a comparative analysis of LanceDB, Elasticsearch, and OpenSearch for vector search workloads, identifying a storage/compute-separated architecture that can cut compute costs by up to 60%"
    ],
  },
  {
    role: "Software Engineer Intern, Informatics Team",
    company: "USC Alzheimer's Therapeutic Research Institute",
    location: "San Diego, California (Remote)",
    period: "Jun 2023 – Aug 2025",
    disciplines: ["SWE", "Data-Eng"],
    highlights: [
      "Built a unified data aggregation layer across recording runs, instruments, and specimen types, cutting manual analysis effort by 30%+",
      "Implemented fine-grained RBAC and a centralized permission matrix across backend and frontend",
      "Developed 15+ Django REST APIs and TypeScript frontend components for research data workflows",
    ],
  },
  {
    role: "Software Engineer II — Content Classification",
    company: "Securiti.ai",
    location: "California",
    period: "Jun 2023 – Aug 2025",
    disciplines: ["SWE", "Data-Eng"],
    highlights: [
      "Architected Go-based microservices for enterprise data privacy workflows handling 15M+ files, reducing API latency by 15%",
      "Built the Validation Workbench and an agentic AI automation system for classifier tuning, improving classification accuracy",
      "Designed async processing pipelines that increased data export/classification throughput by 40%",
      "Containerized CI/CD across 10+ services (Jenkins, Docker), cutting deployment time by 35%",
    ],
  },
  {
    role: "AI Research Intern — AI R&D",
    company: "Motive",
    location: "Pakistan",
    period: "Jun 2022 – Sep 2022",
    disciplines: ["ML", "Data-Eng"],
    highlights: [
      "Architected end-to-end MLOps pipelines with Apache Airflow (orchestration) and Kubeflow (training + deployment), automating retraining for three core AI models.",
      "Built 20+ FastAPI / Flask endpoints serving real-time dashcam inferences — cut latency ~30% and improved response times for AI-driven applications.",
      "Implemented monitoring, logging, and alerting for deployed models, plus automated evaluation across Dev / QA / Prod environments.",
    ],
  },
  {
    role: "Teaching Assistant — Data Structures",
    company: "NUCES",
    location: "Karachi, Pakistan",
    period: "Aug 2022 – Jan 2023",
    disciplines: [],
    highlights: [
      "Delivered lectures and mentored 50+ students on data structures, algorithm design, and problem-solving in Java.",
      "Reviewed code for efficiency and correctness; ran workshops on recursion, tree/graph algorithms, and dynamic programming.",
    ],
  },
];
