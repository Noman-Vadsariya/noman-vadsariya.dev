import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Veeam",
    location: "San Jose, California",
    period: "Jun 2026 – Aug 2026",
    disciplines: ["SWE", "ML", "Data-Eng"],
    highlights: [
     "Prototyped full-text indexing in Databricks, improving search performance for large-scale string queries",
     "Ran a comparative analysis of LanceDB, Elasticsearch, and OpenSearch for vector search workloads, identifying a storage/compute-separated architecture that can cut compute costs by up to 60%"
    ],
  },
  {
    role: "Software Engineer Intern, Informatics Team",
    company: "USC Alzheimer's Therapeutic Research Institute",
    location: "San Diego, California (Remote)",
    period: "Dec 2025 – Present",
    disciplines: ["SWE"],
    highlights: [
      "Built a unified data aggregation layer across recording runs, instruments, and specimen types, cutting manual analysis effort by 30%+",
      "Implemented fine-grained RBAC and a centralized permission matrix across backend and frontend",
      "Developed 15+ Django REST APIs and TypeScript frontend components for research data workflows",
    ],
  },
  {
    role: "Software Engineer II, Content Classification Team",
    company: "Securiti.ai",
    location: "California",
    period: "Jun 2023 – Aug 2025",
    disciplines: ["SWE", "Data-Eng"],
    highlights: [
      "Architected and optimized Go-based RESTful microservices powering enterprise data privacy workflows handling datasets exceeding 15M+ files, reducing API latency by 15% in production environments",
      "Designed and deployed asynchronous processing pipelines and scalable background workers, increasing large-scale data export and classification throughput by 40%",
      "Built the Validation Workbench and agentic AI automation system for classifier tuning, improving classification accuracy and reducing manual configuration effort",
      "Integrated structured error logging and Slack-based pipeline alerts, reducing incident response time by 30%",
      "Containerized CI/CD pipelines using Jenkins and Docker across 10+ services, reducing deployment time by 35%",
      "Built unit, performance, and integration tests, reducing production bugs by 25% and ensuring stable deployments",
    ],
  },
  {
    role: "AI Research Intern, AI R&D Team",
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
    role: "Teaching Assistant, Data Structures",
    company: "National University of Computer and Emerging Sciences (FAST)",
    location: "Karachi, Pakistan",
    period: "Aug 2022 – Jan 2023",
    disciplines: [],
    highlights: [
      "Delivered lectures and mentored 50+ students on data structures, algorithm design, and problem-solving in Java.",
      "Reviewed code for efficiency and correctness; ran workshops on recursion, tree/graph algorithms, and dynamic programming.",
    ],
  },
];
