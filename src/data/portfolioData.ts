import { 
  Project, 
  SkillItem, 
  LearningTopic, 
  EducationItem, 
  MilestoneItem 
} from '../types';

export const personalInfo = {
  name: 'Benedek Feke',
  role: 'Junior Software Developer & Tester',
  headline: 'Engineered simplicity.',
  subheadline: 'Computer Science graduate (graduated with honors) pursuing Master\'s degree, with hands-on experience in Go, TypeScript, Python, Java (Spring Boot), advanced SQL, REST APIs, and QA automation.',
  location: 'Boľ, Slovakia',
  availability: 'Available for Junior Software Developer & Tester roles',
  email: 'fekebenedek@proton.me',
  phone: '+421 917 760 711',
  github: 'https://github.com/benedekfeke',
  linkedin: 'https://www.linkedin.com/in/benedek-feke-328848401',
  twitter: '',
  bioSummary: [
    'Computer Science graduate (Informatics, graduated with honors) now pursuing a Master\'s degree at Technical University of Košice, with hands-on experience in Go, TypeScript and Python, Java (Spring Boot), plus advanced SQL and REST API development.',
    'Experienced in building full-stack applications, automated test suites (Selenium, Playwright), and collaborating in an international QA environment using agile practices.',
    'Looking to grow as a Junior Software Developer, contribute to business-valuable features, and learn from experienced colleagues in a collaborative team.'
  ],
  placeholderPortrait: {
    url: '/assets/profile.jpg',
    alt: 'Benedek Feke - Professional Portrait',
    caption: 'Benedek Feke · Junior Software Developer & Tester'
  }
};

/**
 * =========================================================================
 * SKILLS & TECHNOLOGIES PROFICIENCY DATA (Direct from CV)
 * 
 * Edit the `proficiency` number (0 - 100) below to change the proficiency bar
 * width and mastery level in the skills section.
 * =========================================================================
 */
export const skillsData: SkillItem[] = [
  // --- BACKEND & APIS ---
  {
    name: 'SQL, REST API',
    category: 'backend',
    categoryLabel: 'Backend & APIs',
    proficiency: 90,
    levelLabel: 'Advanced',
    note: 'Advanced SQL queries, relational schema design, RESTful web services, HTTP status design & DTOs'
  },
  {
    name: 'Java, Spring Boot, JDBC, JPA',
    category: 'backend',
    categoryLabel: 'Backend & APIs',
    proficiency: 70,
    levelLabel: 'Intermediate',
    note: 'Spring Boot REST microservices, Spring Data JPA/Hibernate, direct JDBC access, JUnit test suites'
  },
  {
    name: 'RabbitMQ, AWS SNS/SQS, Kafka',
    category: 'backend',
    categoryLabel: 'Backend & APIs',
    proficiency: 40,
    levelLabel: 'Basics',
    note: 'Message brokers and queues, asynchronous pub/sub messaging, DLX failure routing'
  },

  // --- LANGUAGES ---
  {
    name: 'Go (Golang)',
    category: 'languages',
    categoryLabel: 'Languages',
    proficiency: 50,
    levelLabel: 'Intermediate',
    note: 'Goroutines, channels, microservices, AMQP queues, race condition handling & idempotency'
  },
  {
    name: 'Python and OOP',
    category: 'languages',
    categoryLabel: 'Languages',
    proficiency: 80,
    levelLabel: 'Intermediate',
    note: 'Object-oriented programming, data structures, automated testing scripts with Selenium & Playwright'
  },
  {
    name: 'TypeScript',
    category: 'languages',
    categoryLabel: 'Languages',
    proficiency: 65,
    levelLabel: 'Intermediate',
    note: 'Strict type safety, React component lifecycles, and scalable full-stack Next.js applications'
  },
  {
    name: 'Unity, C#',
    category: 'languages',
    categoryLabel: 'Languages',
    proficiency: 70,
    levelLabel: 'Intermediate',
    note: '3D interactive scene development, WebGL compilation, real-time client-server state sync'
  },

  // --- FRONTEND & UI ---
  {
    name: 'Next.js & React',
    category: 'frontend',
    categoryLabel: 'Frontend & UI',
    proficiency: 80,
    levelLabel: 'Intermediate',
    note: 'Full-stack Next.js applications, React hooks, scalable real-time UI state management'
  },
  {
    name: 'Three.js & 3D Visuals',
    category: 'frontend',
    categoryLabel: 'Frontend & UI',
    proficiency: 30,
    levelLabel: 'Intermediate',
    note: 'Spatial scenes, 3D game visualization, and interactive raycasting'
  },

  // --- DEVOPS & CLOUD ---
  {
    name: 'Git',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    proficiency: 90,
    levelLabel: 'Advanced',
    note: 'Advanced version control, branching strategies, conflict resolution, GitHub & GitLab workflows'
  },
  {
    name: 'Google Cloud, AWS',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    proficiency: 40,
    levelLabel: 'Intermediate',
    note: 'Cloud hosting, Cloud Run, S3, IAM roles, and cloud infrastructure deployment'
  },
  {
    name: 'SonarQube, CI/CD',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    proficiency: 40,
    levelLabel: 'Intermediate',
    note: 'GitHub Actions, GitLab CI, Azure DevOps pipelines, automated code quality gates'
  },
  {
    name: 'Docker, Kubernetes',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    proficiency: 60,
    levelLabel: 'Beginner',
    note: 'Multi-stage Dockerfiles, Docker Compose multi-service environments, container lifecycle'
  },
  {
    name: 'Terraform',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    proficiency: 30,
    levelLabel: 'Basics',
    note: 'Infrastructure as Code (IaC), declarative cloud resource provisioning'
  },
  {
    name: 'Logging & Monitoring: Grafana, Prometheus',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    proficiency: 25,
    levelLabel: 'Basics',
    note: 'Time-series metrics collection, alert rules, health dashboards, operational telemetry'
  },

  // --- QA & TESTING ---
  {
    name: 'Automated Testing (Python — Selenium, Playwright)',
    category: 'testing',
    categoryLabel: 'QA & Testing',
    proficiency: 95,
    levelLabel: 'Intermediate',
    note: 'Designed and executed manual and automated test scripts in Python (Selenium, Playwright)'
  },
  {
    name: 'Quality Assurance & Agile Testing',
    category: 'testing',
    categoryLabel: 'QA & Testing',
    proficiency: 85,
    levelLabel: 'Advanced',
    note: 'Daily collaboration with development teams in agile international environment, defect analysis & resolution'
  },

  // --- ARCHITECTURE & NETWORKING ---
  {
    name: 'CCNA 1-3 Completed',
    category: 'architecture',
    categoryLabel: 'Networking & Certs',
    proficiency: 100,
    levelLabel: 'Completed',
    note: 'Cisco Certified Network Associate: IP routing, switching, subnetting, TCP/IP network protocols'
  },
  {
    name: 'GenAI Tools & Prompting Knowledge',
    category: 'architecture',
    categoryLabel: 'Architecture & AI',
    proficiency: 95,
    levelLabel: 'Intermediate',
    note: 'Prompt engineering, Google Gemini API integration, LLM-assisted code reasoning pipelines'
  },
  {
    name: 'Collaboration & Analytical Thinking',
    category: 'architecture',
    categoryLabel: 'Team & Methodologies',
    proficiency: 90,
    levelLabel: 'Advanced',
    note: 'International team communication, critical analysis, iterative development & root cause resolution'
  }
];

/**
 * Ongoing learning and active research topics
 */
export const learningData: LearningTopic[] = [
  {
    id: 'learn-consensus',
    title: 'Distributed Consensus & Raft Implementations',
    area: 'Distributed Systems',
    status: 'Deep Dive',
    keyTakeaway: 'Studying leader election invariants, log replication protocols, and fault recovery in decentralized environments.',
    resources: 'Raft Paper (Ongaro & Ousterhout), MIT 6.824 Distributed Systems lectures'
  },
  {
    id: 'learn-azure-devops',
    title: 'Azure DevOps & CI/CD Pipelines',
    area: 'DevOps & Cloud',
    status: 'Completed',
    keyTakeaway: 'Configuring multi-stage YAML pipelines, automated test gates, artifact versioning, and branch protection policies.',
    resources: 'Microsoft Learn: DevOps Engineer Coursework & Hands-on Labs'
  },
  {
    id: 'learn-system-design',
    title: 'System Design Fundamentals',
    area: 'Software Architecture',
    status: 'In Progress',
    keyTakeaway: 'Mastering horizontal scalability, cache topologies, message broker queues, data partitioning, and fault-tolerant service decomposition.',
    resources: 'System Design Primer, Designing Data-Intensive Applications (DDIA)'
  },
  {
    id: 'learn-go-automation',
    title: 'Python Automation & Tooling',
    area: 'Backend & Automation',
    status: 'in progress–Practice',
    keyTakeaway: 'Building concurrent test automation harnesses, CLI developer utilities, and high-throughput background automation pipelines in Python.',
    resources: 'Python automation for DevOps, Real-World Automation Projects'
  }
];

/**
 * =========================================================================
 * FEATURED ENGINEERING PROJECTS & PRODUCTION WORK
 * =========================================================================
 */
export const projectsData: Project[] = [
  {
    id: 'patternview',
    slug: 'patternview',
    title: 'Patternview',
    clientOrOrg: 'Technical University of Kosice (Bachelor Thesis)',
    role: 'Author & Full-Stack Architect',
    year: '2025',
    category: 'full-stack',
    categoryLabel: 'Interactive Educational Platform',
    shortDescription: 'Bachelor thesis project: an interactive visualization platform for algorithms and data structures combining Next.js, Unity WebGL, and Gemini AI reasoning.',
    fullOverview: 'Patternview is an educational software platform designed for deep, intuitive understanding of algorithms and computational data structures. Engineered as a Bachelor\'s thesis at Technical University of Košice, the project overcomes traditional textbook learning hurdles by providing real-time visual feedback.\n\nRather than presenting static diagrams or pre-recorded clips, Patternview embeds interactive Unity WebGL graphics into a modern Next.js environment. Users directly manipulate data collections (sorting algorithms, tree balancing, graph traversals), step through execution frames, and interact with the Google Gemini API for context-aware code explanations, invariant verification, and time-complexity breakdowns.',
    problemStatement: 'Computer science students frequently struggle to build accurate mental models of recursive stack traces, memory mutations, and pointer reassignments when relying solely on static slides and mathematical proofs.',
    keyHighlights: [
      'Engineered interactive Unity WebGL computational visualizers embedded seamlessly into a responsive Next.js application shell',
      'Integrated Google Gemini API to analyze algorithmic state mutations and supply dynamic, personalized tutoring prompts',
      'Architected serverless PostgreSQL database (Neon) and Auth0 identity verification for user progress persistence',
      'Designed zero-layout-shift UI using custom state machines and Lottie vector animations for frictionless step-through navigation'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Unity WebGL', 'Gemini API', 'PostgreSQL (Neon)', 'Auth0', 'Lottie', 'Tailwind CSS'],
    imagePlaceholderUrl: '/assets/patternview_main_logo.png',
    imageAlt: 'Patternview Algorithm Visualization Platform preview',
    objectFit: 'contain',
    featured: true,
    aspectRatio: '16/10',
    githubUrl: 'https://github.com/benedekfeke/patternview',
    architectureDetails: [
      { label: 'WebGL Engine Bridge', value: 'Bidirectional communication channel linking React UI controls with Unity WebGL memory buffers for low-latency simulation manipulation.' },
      { label: 'AI Code Explanation', value: 'Structured prompt pipelines over Google Gemini API generating pedagogical explanations for specific algorithmic bottlenecks.' },
      { label: 'Data & Auth Layer', value: 'Serverless PostgreSQL on Neon coupled with Auth0 JWT tokens to manage authenticated student sessions and module progression.' },
      { label: 'Supported Paradigms', value: 'Sorting pipelines (Quicksort, Mergesort, Heapsort), dynamic programming matrices, graph shortest-paths, and binary search trees.' }
    ],
    isPlaceholder: false
  },
  {
    id: 'dots',
    slug: 'dots-and-boxes-3d',
    title: 'Dots & Boxes 3D',
    clientOrOrg: 'TUKE GameStudio Ecosystem',
    role: 'Systems & Game Engineer',
    year: '2025',
    category: 'systems',
    categoryLabel: 'Game Engine & Micro-Services',
    shortDescription: 'Combinatorial strategy game implementation featuring recursive Minimax AI decision trees, Spring Boot REST/JPA services, and React Three Fiber 3D visuals.',
    fullOverview: 'A full-stack, multi-interface implementation of the combinatorial Dots & Boxes game. The project encompasses a rigorous algorithmic Java core, AI opponent bots, modular Spring Boot web services, and an interactive 3D spatial interface built with React Three Fiber and Three.js.\n\nThe system was engineered to isolate game state invariants from the delivery layer: the pure domain core drives both head-to-head terminal CLI sessions and interactive 3D browser viewports. A dedicated Spring Boot GameStudio server exposes RESTful leaderboards, comments, and player rating micro-services backed by interchangeable JDBC and JPA/Hibernate database layers.',
    problemStatement: 'Decoupling complex combinatorial rule engines from varying presentation layers (terminal vs 3D web) while maintaining sub-millisecond move evaluation times and ACID transaction integrity on high-score updates.',
    keyHighlights: [
      'Authored intelligent game bot utilizing recursive Minimax search trees with alpha-beta pruning for difficulty-scaled AI gameplay',
      'Architected dual-pipeline persistence layer providing interchangeable raw JDBC and Spring Data JPA/Hibernate implementations',
      'Developed responsive 3D game board rendered in React Three Fiber with raycasting, spatial lighting, and dynamic camera transitions',
      'Engineered Spring Boot RESTful micro-services managing player rating metrics, score history, and moderated user feedback',
      'Wrote comprehensive JUnit automated test suites verifying board closure rules, boundary edge cases, and REST endpoints'
    ],
    technologies: ['Java', 'Spring Boot', 'React Three Fiber', 'Three.js', 'React', 'TypeScript', 'JPA / Hibernate', 'JDBC', 'JUnit', 'REST API'],
    imagePlaceholderUrl: '/assets/Dots_main_page.jpg',
    imageAlt: 'Dots & Boxes 3D Game Engine preview',
    objectFit: 'cover',
    featured: true,
    aspectRatio: '16/10',
    githubUrl: 'https://github.com/benedekfeke/dots',
    architectureDetails: [
      { label: 'Minimax Search Bot', value: 'Recursive game tree evaluation with alpha-beta heuristic pruning to evaluate prospective box completions and territory defense.' },
      { label: 'Spring Boot REST Core', value: 'Central GameStudioServer with REST endpoints (ScoreServiceRest, RatingServiceRest, CommentServiceRest) handling JSON payloads and DTO validation.' },
      { label: 'Dual Storage Architecture', value: 'Polymorphic service interfaces supporting both low-overhead direct JDBC queries and JPA entity management with relational constraints.' },
      { label: 'Interactive 3D Viewport', value: 'Spatial scene geometry rendered with @react-three/fiber, enabling mouse hover hit-testing on grid line segments.' }
    ],
    isPlaceholder: false
  },
  {
    id: 'go-order-management',
    slug: 'go-order-management-rabbitmq',
    title: 'Go Event-Driven OMS',
    clientOrOrg: 'Distributed Systems Project',
    role: 'Backend Systems Engineer',
    year: '2026',
    category: 'systems',
    categoryLabel: 'Distributed Microservices',
    shortDescription: 'High-concurrency order management microservices engine in Go with RabbitMQ queues, strict idempotency guarantees, race condition safeguards, and Docker Compose orchestration.',
    fullOverview: 'A high-throughput, event-driven Order Management System (OMS) engineered in Go to handle distributed asynchronous order lifecycles under extreme concurrency.\n\nMicroservices architectures introduce severe edge cases during high-volume spikes: double-billing from network retries, negative inventory caused by race conditions, and data inconsistency across service boundaries. This system resolves these failure modes through strict idempotency layers, Redis distributed locking, optimistic concurrency controls, and RabbitMQ message broker topologies with transactional outbox patterns.',
    problemStatement: 'Under high concurrent traffic spikes (e.g., flash sales), synchronous HTTP order flows frequently collapse under cascading timeouts, leading to duplicate customer charges and oversold stock when inventory write locks contend.',
    keyHighlights: [
      'Idempotency & Deduplication Engine: Implemented unique idempotency tokens and atomic Redis locks to guarantee exactly-once processing of order and payment events',
      'Race Condition Safeguards: Deployed PostgreSQL optimistic concurrency control (version tags) alongside Redis distributed mutexes to eliminate inventory over-allocation',
      'RabbitMQ Messaging Pipeline: Designed topic and direct exchange topologies with durable worker queues, channel prefetch limits, and Dead-Letter Exchanges (DLX) for poisoned message containment',
      'Microservices Decomposition: Separated independent Order, Inventory, Payment, and Notification microservices communicating purely via asynchronous AMQP events',
      'Docker & Docker Compose Orchestration: Packaged multi-stage minimal Go binaries into isolated container networks with automated health checks and persistent storage volumes'
    ],
    technologies: ['Go (Golang)', 'RabbitMQ', 'Docker', 'Docker Compose', 'PostgreSQL', 'Redis', 'Microservices', 'AMQP', 'Distributed Locking'],
    imagePlaceholderUrl: '/assets/Go_rabbitmq_oms_thumbnail.jpg',
    imageAlt: 'Go Distributed Order Management System Architecture preview',
    objectFit: 'cover',
    featured: true,
    aspectRatio: '16/10',
    architectureDetails: [
      { label: 'Idempotency Controls', value: 'Atomic Redis SETNX key registration with automated expiration windows and transaction replay caches to ensure duplicate webhook payloads are rejected cleanly.' },
      { label: 'Race Condition Defense', value: 'Row-level version tokens (OCC) in PostgreSQL transactions paired with distributed Redis locks prevent concurrent checkout operations from claiming the same inventory item.' },
      { label: 'Message Broker Topology', value: 'RabbitMQ durable queues with publisher confirms, manual consumer ACKs, prefetch QoS tuning, and automatic routing to Dead-Letter Exchanges (DLX) upon max retry exhaustion.' },
      { label: 'Microservices Boundaries', value: 'Order Service (lifecycle coordinator), Inventory Service (stock reservations), Payment Service (mock gateway processing), and Notification Service (async dispatch).' },
      { label: 'Containerization & Compose', value: 'Multi-stage Dockerfiles compiling lightweight static Go binaries; Docker Compose defines network dependencies, health probes, RabbitMQ management UI, and persistent volume mounts.' }
    ],
    isPlaceholder: false
  },
];

/**
 * Education history (Direct from CV)
 */
export const educationData: EducationItem[] = [
  {
    degree: "Master's degree, Informatics/Computer Science",
    institution: 'Technical University of Košice',
    location: 'Košice, Slovakia',
    period: '2026 – Present',
    gradeOrHonors: 'In Progress',
    description: 'Pursuing advanced graduate studies in Informatics and Computer Science, focusing on distributed systems, cloud computing, advanced software engineering, and concurrent systems.',
    coursework: [
      'Distributed Systems & Microservices',
      'Advanced Cloud Architectures',
      'High-Concurrency Systems Engineering',
      'Software Verification & Formal Methods'
    ]
  },
  {
    degree: "Bachelor's degree, Informatics/Computer Science",
    institution: 'Technical University of Košice',
    location: 'Košice, Slovakia',
    period: '2023 – 2026',
    gradeOrHonors: 'Graduated with honors',
    description: 'Rigorous theoretical and practical foundation in computer science, algorithms, software engineering, databases, and network protocols. Graduated with honors.',
    coursework: [
      'Data Structures & Algorithm Optimization',
      'Database Systems & Relational Theory',
      'Software Architecture & Design Patterns',
      'Computer Networks & Cisco CCNA 1-3',
      'Operating Systems & Concurrent Programming'
    ],
    capstoneOrThesis: '"Patternview: Interactive 3D Educational Algorithm Visualization using Unity WebGL & React"'
  },
  {
    degree: 'Eight-Year Gymnasium Secondary Education',
    institution: 'Gymnázium–Gimnázium Kráľovský Chlmec',
    location: 'Kráľovský Chlmec, Slovakia',
    period: '2015 – 2023',
    gradeOrHonors: 'Maturita Exam',
    description: 'Eight-year academic gymnasium with an intensive focus on mathematics, physics, chemistry, analytical logic, and modern languages.',
    coursework: [
      'Advanced Mathematics & Discrete Logic',
      'Physics & Scientific Computing',
      'English & Languages'
    ]
  }
];

/**
 * Spoken languages (Direct from CV)
 */
export const spokenLanguagesData = [
  { language: 'English', level: 'C1', label: 'C1 Advanced / Professional' },
  { language: 'Hungarian', level: 'Native', label: 'Fluent / Native' },
  { language: 'Slovak', level: 'Intermediate', label: 'Intermediate' }
];

/**
 * Professional milestones and career background (Direct from CV)
 */
export const milestonesData: MilestoneItem[] = [
  {
    period: 'Nov 2025 – Present',
    role: 'Quality Assurance / Software Tester',
    organization: 'Datadocksolutions (International Environment)',
    summary: 'Collaborate daily with engineering teams in an agile international environment. Design and execute manual and automated test scripts (Python — Selenium, Playwright), analyze test metrics, report defects, verify bug fixes, and assist with operational workflows.',
    tags: ['Python', 'Selenium', 'Playwright', 'Agile QA', 'Test Automation', 'Defect Analysis', 'Jira']
  },
  {
    period: 'Aug 2025 – Apr 2026',
    role: 'Lead Developer — Patternview',
    organization: 'Personal Project',
    summary: 'Architected and built a 3D interactive full-stack visualization platform using Unity, Next.js, React and TypeScript. Implemented client-server state synchronization over WebGL using react-unity-webgl and custom React hooks.',
    tags: ['Unity', 'C#', 'Next.js', 'React', 'TypeScript', 'WebGL', 'State Sync']
  },
  {
    period: 'Jan 2025 – May 2025',
    role: 'Full-Stack Developer — Dots & Boxes 3D',
    organization: 'Personal Project',
    summary: 'Engineered a Java Spring Boot REST backend with JPA and SQLite, consumed by a responsive React frontend. Implemented custom Minimax/Heuristic game-playing bots, real-time move validation, and Three.js 3D board rendering.',
    tags: ['Java', 'Spring Boot', 'REST API', 'React', 'Three.js', 'OOP', 'Game Bots']
  }
];

export const editorialPrinciples = [
  {
    title: 'Clarity Over Cleverness',
    description: 'Code is read ten times more often than it is written. Simple data structures, self-documenting naming, and deterministic functions outlive flashy, convoluted abstractions.'
  },
  {
    title: 'Performance as an Aesthetic',
    description: 'Speed and low latency are not mere technical checkboxes—they are the foundation of user trust. A responsive UI and lean bundle deliver a calm, respectful digital experience.'
  },
  {
    title: 'Restraint & Editorial Craft',
    description: 'True design quality comes from knowing what to leave out. We avoid visual noise, artificial gradients, and unnecessary chrome to let content and purpose take center stage.'
  }
];
