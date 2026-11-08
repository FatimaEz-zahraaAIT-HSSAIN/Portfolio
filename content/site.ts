export type LiveProject = {
    name: string;
    url: string;
    domain: string;
    desc: string;
    tags: string[];
    metric: string;
  };


  export type TimelineItem = { when: string; role: string; org: string; desc: string };
  export type EducationItem = { when: string; degree: string; institution: string; desc: string };
  export interface Certification {
    title: string;
    issuer: string;
    category: "Networking & IT" | "Data & AI" | "Development" | "Language" | "Workplace";
    date: string;
    fileUrl: string;
    fileType: "image" | "pdf";
  }
  export interface RecognitionItem {
    quote: string;
    author: string;
    role: string;
    fileUrl: string;
    fileType: "image" | "pdf";
  }

  export const site = {
    name: "Fatima Ez-Zahraa AIT-HSSAIN",
    handle: "fatima-ezzahraa-ait-hssain",
    promptUser: "fatima@dev",
    url: "https://www.linkedin.com/in/ait-hssain-fatimaez-zahraa/",
    metaDescription: "Business Analyst & Inside Sales — Casablanca, Morocco. Trilingual (Arabic, French, English).Turning data into decisions.",
    headline: "Hi, I'm Fatima",
    lede: "Business Analyst and Inside Sales professional based in Casablanca, Morocco. Trilingual (Arabic native, French fluent, English fluent). I combine data-driven problem-solving with sales enablement and customer-focused operations — and I'm open to opportunities.", status: "open to opportunities",
    about: [
      "I'm a Business Analyst and Inside Sales professional who enjoys owning the whole problem: understand the need, analyse the data, recommend the solution, and see it through with the teams that ship it. My recent work sits at the intersection of data pipelines, CRM insights, and consultative communication — qualifying opportunities, tracking them in CRM, and using what I learn to improve performance and customer outcomes.",
      "Across TELUS Digital, CASA Benchmark and Agora Technologies I've built Streamlit apps that automate financial-data extraction from PDFs and Excel, designed Power BI dashboards, and developed full-stack web apps with React, Tailwind CSS and Ant Design. I also train and coach new hires, facilitate daily briefings, and resolve complex escalations by digging into customer history and operational constraints. Currently studying a Master in Data Analysis at ENSET Mohammedia.",
    ],

    stack: {
      "data & analytics": ["Excel / Google Sheets", "Power BI", "Looker Studio", "SQL & NoSQL",
  "Streamlit", "Python", "Google Apps Script"],
      "consulting & analytical": ["Requirement analysis & data modeling", "Analytical problem-solving",
  "Synthesis & recommendations", "CRM tracking", "Lead qualification", "Consultative selling", "Project management"],
      "languages": ["Arabic (native)", "French (fluent)", "English (fluent)"],
      "tools": ["Salesforce", "Jira", "Lucidchart", "Figma", "VS Code", "Jupyter", "Anaconda", "Orange",
  "Linux", "Java 17", "Big Data"],
    } as Record<string, string[]>,

    live: [
      {
        name: "Financial data pipeline",
        url: "N/A",
        domain: "N/A",
        desc: "Streamlit application automating extraction and processing of complex financial data from PDF and Excel sources. Structured pipelines with Google Apps Script feed processed data into Power BI.",
        tags: ["Streamlit", "Python", "Google Apps Script", "Power BI"],
        metric: "automated revenue reporting",
      },
      {
        name: "Leave & attendance tracker",
        url: "N/A",
        domain: "N/A",
        desc: "Web application for leave management and employee attendance tracking (clock-in /clock-out). Reusable components and a responsive interface built with React.js, Tailwind CSS and Ant Design.",
        tags: ["React.js", "Tailwind CSS", "Ant Design"],
        metric: "full-stack, responsive",
      },
      {
        name: "My portfolio",
        url: "https://portfolio.fatimaezzahraa-aithssain.workers.dev/",
        domain: "view live project",
        desc: "Personal developer & professional portfolio built with Next.js, TypeScript, and Tailwind CSS. Features live GitHub API integration, academic history, interactive certificate previews, and professional recognition.",
        tags: ["JavaScript","TypeScript", "Next.js", "Tailwind CSS"],
        metric: "responsive, interactive",
      },
    ] as LiveProject[],

    timeline: [
      {
        when: "2026",
        role: "Resource Coordinator",
        org: "TELUS Digital",
        desc: "Operational coordination between sales teams, field technicians and external partners. Schedules, resource optimization and request tracking. Resolves complex escalations through in-depth research of customer history, employee notes and emails. Supported D2D sales enablement and negotiated escalations to practical resolutions.",
      },
      {
        when: "2025 — 26",
        role: "Subject Matter Expert (SME)",
        org: "SHS TS — TELUS Digital",
        desc: "Training and onboarding of new employees. Facilitated two daily sessions (morning briefing and end-of-shift debriefing). Technical and interpersonal coaching on equipment troubleshooting and call management.",
      },
      {
        when: "2024 — 26",
        role: "Bilingual Technical Support",
        org: "TELUS Digital",
        desc: "Assisted clients in resolving technical issues and processing requests. Collaborated cross-functionally, qualified customer needs, tracked interactions in CRM tools, and used consultative upselling to identify suitable solutions.",
      },
      {
        when: "2025",
        role: "Data Analyst",
        org: "CASA BENCHMARK",
        desc: "Built a Streamlit application automating extraction and processing of complex financial data from PDF and Excel sources. Structured data pipelines with Google Apps Script feeding processed data into Power BI. Designed interactive dashboards and visualizations for revenue reporting.",
      },
      {
        when: "2024",
        role: "Full-Stack Developer",
        org: "Agora Technologies",
        desc: "Developed a web application for leave management and employee attendance tracking (clock-in / clock-out). Built reusable components and a responsive interface with React.js, Tailwind CSS and Ant Design.",
      },
      {
        when: "2023",
        role: "Web Developer",
        org: "HR eXperts Maroc",
        desc: "Developed a simple, responsive web page using HTML, CSS and JavaScript. Implemented an interactive interface applying core front-end concepts: layout, styling and basic functionality.",
      }
    ] as TimelineItem[],
    education: [
    {
      degree: "Master in Data Analysis",
      institution: "ENSET Mohammedia",
      when: "2025 — now",
      desc: "Probabilities & statistics, machine learning fundamentals, Big Data. Agentic AI, JEE architecture and systems, multiplatform development. Java 17, XML & web services, Linux, web technologies.",
    },
    {
      degree: "Bachelor in Data Engineering",
      institution: "ENSAM Casablanca",
      when: "2024 — 25",
      desc: "Operational performance optimization projects. Enterprise organization and project management. Data quality, Big Data, SQL / NoSQL databases, cybersecurity.",
    },
    {
      degree: "DUT in Computer Engineering",
      institution: "EST Essaouira",
      when: "2022 — 2024",
      desc: "Core computer engineering foundations, programming, database management, and system development.",
    },
  ] as EducationItem[],

  certifications: [
    {
      title: "English for IT 2",
      issuer: "Cisco Networking Academy / OpenEDG",
      category: "Language",
      date: "2026",
      fileUrl: "/certs/cisco-english-it2.jpg",
      fileType: "image"
    },
    {
      title: "NDG Linux Unhatched",
      issuer: "Cisco Networking Academy / NDG",
      category: "Networking & IT",
      date: "2026",
      fileUrl: "/certs/cisco-ndg-linux-unhatched.jpg",
      fileType: "image"
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      category: "Networking & IT",
      date: "2026",
      fileUrl: "/certs/cisco-ccna-intro-networks.jpg",
      fileType: "image"
    },
    {
      title: "English for IT 1",
      issuer: "Cisco Networking Academy",
      category: "Language",
      date: "2026",
      fileUrl: "/certs/cisco-english-it1.jpg",
      fileType: "image"
    },
     {
      title: "Nanodegree: Foundation of Generative AI",
      issuer: "Udacity",
      category: "Data & AI",
      date: "2025",
      fileUrl: "/certs/udacity-genai.jpg",
      fileType: "image"
    },
     {
      title: "Data Science & Analytics",
      issuer: "Cisco Networking Academy",
      category: "Data & AI",
      date: "2024",
      fileUrl: "/certs/hplife-data-science.jpg",
      fileType: "image"
    },
     {
      title: "EF SET English Certificate — C2 (82/100)",
      issuer: "EF Standard English Test (EF SET)",
      category: "Language",
      date: "2024",
      fileUrl: "/certs/efset-english.jpg",
      fileType: "image"
    },
     {
      title: "ReactJS Fundamentals",
      issuer: "Great Learning",
      category: "Development",
      date: "2026",
      fileUrl: "/certs/greatlearning-reactjs.jpg",
      fileType: "image"
    },
     {
      title: "How to deal with angry customers",
      issuer: "Telus Digital",
      category: "Workplace",
      date: "2024",
      fileUrl: "/certs/telus-angry-customers.jpg",
      fileType: "image"
    },
     {
      title: "Unsolicited communication rules",
      issuer: "Telus Digital",
      category: "Workplace",
      date: "2024",
      fileUrl: "/certs/telus-utr.jpg",
      fileType: "image"
    },
  ] as Certification[],

recognition: [
    {
      quote: "“Fatima has been a fantastic presence on the team. She brings great energy to the floor, demonstrates excellent listening skills, and handles her jobs with notable efficiency and accuracy. She follows SME instructions carefully, applies guidance right away, and consistently delivers high-quality work.”",
      author: "Ahmed Amine",
      role: "SME — ADT, PACE Project · TELUS Digital",
      fileUrl: "/recog/ahmed-amine.png",
      fileType: "image"
    },
    {
      quote: "“She is doing a great job handling the Atlantic repair tickets and escalations, remaining persistent when facing system issues and consistently working toward a resolution. Fatima is very detail-oriented, and her previous experience is beneficial with the NS backlog resolution.”",
      author: "Oksana",
      role: "Resource Manager — Resource Strategy & Planning · TELUS Digital",
      fileUrl: "/recog/oksana.png",
      fileType: "image"
    },
    {
      quote: "“Fatima-Ezzahraa s'est imposée comme l'un des meilleurs éléments de notre service et une collaboratrice tout simplement indispensable. Elle s'est distinguée par sa capacité exceptionnelle à résoudre les problèmes complexes avec rapidité, calme et pragmatisme. Je la recommande chaleureusement et sans la moindre réserve.”",
      author: "Radia Chaouqui",
      role: "Team Leader — PACE Morocco · TELUS Digital",
      fileUrl: "/recog/radia-chaouqui.pdf",
      fileType: "pdf"
    }
  ] as RecognitionItem[],

    contact: {
      headline: "Open to opportunities — say hi.",
      email: "fatimaezzahraa.aithssain@gmail.com",
      socials: [
        { label: "phone", url: "https://web.whatsapp.com/send/?phone=212777706902" },
        { label: "location", url: "https://www.google.com/maps/place/Casablanca,+Morocco" },
        { label: "linkedin", url: "https://www.linkedin.com/in/ait-hssain-fatimaez-zahraa/" },
        { label: "github", url: "https://github.com/FatimaEz-zahraaAIT-HSSAIN"}
      ],
    },

    footerRight: "business analyst & inside sales · casablanca, morocco",
  };