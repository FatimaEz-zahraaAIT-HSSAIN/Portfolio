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
        name: "Responsive portfolio page",
        url: "N/A",
        domain: "N/A",
        desc: "Simple, responsive web page built with HTML, CSS and JavaScript — an interactive interface applying core front-end concepts: layout, styling and basic functionality.",
        tags: ["HTML", "CSS", "JavaScript"],
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