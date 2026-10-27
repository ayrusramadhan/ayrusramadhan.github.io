// All site content lives here. Replace the placeholders with your own.
export const NAME = "Surya Ramadhan";
export const EMAIL = "suryaramadhan340@gmail.com";
export const SPOTIFY_PLAYLIST_ID = "2yd62PezGik9AxXZT6kCD3"; // the part after /playlist/ in your Spotify link

export const socials = [
  ["Email", `mailto:${EMAIL}`],
  ["LinkedIn", "https://www.linkedin.com/in/suryarmdhn/"],
  ["Instagram", "https://www.instagram.com/sryrrmdhn/"],
  ["Dribbble", "https://dribbble.com/suryarmdhn"],
];

export const RESUME = {
  url: `${import.meta.env.BASE_URL}resume.pdf`,
  filename: "CV-Surya-Ramadhan.pdf",
};

// panel: cobalt | tang | lilac | mint    mock: phone | calendar | dashboard | onboarding
export const projects = [
  {
    slug: "dashboard-monitoring",
    title: "Designing a real-time solar energy monitoring dashboard",
    outcome:
      "Designed a dashboard to monitor solar power plant performance, energy production, and key operational metrics in one place.",
    tags: ["Energy", "Dashboard", "Web App"],
    panel: "cobalt",
    mock: "phone",
    image: `${import.meta.env.BASE_URL}images/projects/dashboard-monitoring.png`,
  },
  {
    slug: "inventory-management",
    title: "Simplifying spare parts inventory management",
    outcome:
      "Designed inventory interfaces to help users track stock availability, incoming parts, and spare part usage across projects.",
    tags: ["Inventory", "Web App", "B2B"],
    panel: "tang",
    mock: "calendar",
    image: `${import.meta.env.BASE_URL}images/projects/inventory-management.png`,
  },
  {
    slug: "logistics-design-system",
    title: "A design system for a logistics dashboard",
    outcome:
      "Forty components and one token set let two teams ship from the same library.",
    tags: ["Design system", "B2B"],
    panel: "lilac",
    mock: "dashboard",
  },
  {
    slug: "redesign-website",
    title: "Redesigning a school website",
    outcome:
      "Redesigned a school website to create a clearer structure and make essential information easier for students, parents, and prospective families to find.",
    tags: ["Education", "Web", "Freelance"],
    panel: "mint",
    mock: "onboarding",
  },
];

// Add one entry per project slug. Projects without an entry fall back to the first one.
export const caseStudies = {
  "dashboard-monitoring": {
    status: "published",
    // status: "coming-soon",
    summary:
      "Designed a real-time solar energy monitoring dashboard to track energy production, monitor system performance, and provide clear insights into operational data.",
    details: {
      Role: "UI/UX Designer",
      Team: "1 IT Manager, 1 Developer, 1 UI/UX Designer",
      Timeline: "5 Weeks",
      Tools: "Figma, Figjam, Lucide",
    },
    sections: [
      {
        h: "Overview",
        p: "ATLAS Core is a monitoring system designed to help clients monitor the operational performance of Solar Power Plants (PLTS) after project completion. The system presents energy production information and plant performance through a dashboard that combines various operational indicators into a single view.",
        image: "/images/projects/dashboard-monitoring.png",
        imageAlt: "ATLAS dashboard page",
        caption:
          "Monitoring dashboard to help clients monitor energy production and PLTS operational performance in a single integrated view.",
      },
      {
        h: "The problem",
        p: "Before designing ATLAS Core, I analyzed the existing internal monitoring system to understand the information needed for client PLTS monitoring. \n From this analysis, I studied the data and indicators that needed to be displayed, as well as how this information could be structured so that clients could more easily monitor energy production and plant performance.",
        paragraphs: ["The design challenges that needed to be addressed were:"],
        bullets: [
          {
            title: "Information density",
            text: "presenting various performance indicators without making the dashboard feel overly cluttered.",
          },
          {
            title: "Information priority",
            text: "determining the main information that needs to be visible first when users open the dashboard.",
          },
          {
            title: "Data visualization",
            text: "organizing energy production and plant performance information into appropriate visual formats.",
          },
        ],
      },
      {
        h: "Design Process",
        blocks: [
          {
            type: "paragraph",
            content: [
              {
                text: "A. Analyzing Existing System References",
                bold: true,
              },
              {
                text: "\nBefore starting interface design, I analyzed the internal monitoring system already in use as a reference. This process was carried out to understand the available energy production information and determine relevant information to display to clients.",
              },
            ],
          },
          {
            type: "paragraph",
            content: [
              {
                text: "B. Structuring Dashboard Information",
                bold: true,
              },
              {
                text: "\nAfter understanding the required information, I structured the dashboard hierarchy based on energy production periods and target achievement status. The information was grouped so that users can view primary data first, then understand the details through charts and notifications.",
              },
            ],
          },
          {
            type: "paragraph",
            content:
              "The information structure is divided into three main parts:",
          },
          {
            type: "bullets",
            items: [
              {
                title: "Energy Production",
                text: "displays daily, monthly, and annual accumulated energy production data.",
              },
              {
                title: "Energy Tracker",
                text: "presents daily, monthly, and yearly energy production data in chart form depending on filters.",
              },
              {
                title: "Energy Production Notifications",
                text: "provides information regarding daily and monthly production target achievements.",
              },
            ],
          },
          {
            type: "paragraph",
            content: [
              {
                text: "C. Designing Layout and Data Visualization",
                bold: true,
              },
              {
                text: "\nBased on the structured information, I began designing the dashboard layout to determine the placement of each element. Production data, Energy Tracker charts, and notifications were arranged in a single view so that information could be easily scanned.",
              },
            ],
          },
          {
            type: "paragraph",
            content:
              "At this stage, I also determined the data presentation format appropriate for each type of information, ensuring that numerical data, production trends, and target achievement status can be visually distinguished.",
          },
          {
            type: "paragraph",
            content: [
              {
                text: "D. Design Finalization and Implementation",
                bold: true,
              },
              {
                text: "\nAfter the dashboard draft was completed, I finalized the design as a reference for implementation. The design covers the display of energy production information, Energy Tracker charts, and target achievement notifications.",
              },
            ],
          },
          {
            type: "paragraph",
            content:
              "The finalized design was then used in the implementation process with developers until ATLAS Core was deployed.",
          },
        ],
      },
      {
        h: "Final Design",
        blocks: [
          {
            type: "paragraph",
            content: [
              {
                text: "The ATLAS Core dashboard brings solar power plant (PLTS) production data into a single view. Information is organized from site details and production summaries to visualizations that help users track energy production over different time periods.",
              },
            ],
          },
          {
            type: "paragraph",
            content: [
              {
                text: "A. Site Overview & Information",
                bold: true,
              },
              {
                text: "\nThis section provides an overview of the monitored solar power plant, including its name, operational status, capacity, system type, and site area. Additional details, such as the commercial operation date, coordinates, PV module capacity, and mounting type, are presented in the Site Information panel.",
              },
            ],
          },
          {
            type: "paragraph",
            content:
              "This layout helps users identify the monitored site and access its key information in one place.",
          },
          {
            type: "image",
            src: `${import.meta.env.BASE_URL}images/projects/site-overview-information.png`,
            alt: "Site Overview dan Site Information pada dashboard monitoring",
            caption: "Site Overview & Information", // Opsional
          },
          {
            type: "paragraph",
            content: [
              {
                text: "B. Energy Production Summary",
                bold: true,
              },
              {
                text: "\nThis section summarizes energy production across three key metrics: daily energy production, monthly energy achievement, and annual cumulative achievement.",
              },
            ],
          },
          {
            type: "paragraph",
            content:
              "Each card displays the energy production value alongside its target and achievement percentage. The daily production card also includes a comparison with the previous day, while the monthly and annual cards use progress bars to compare actual production against PLN and company targets.",
          },
          {
            type: "paragraph",
            content:
              "By organizing the metrics by time period, users can review energy production at a glance and understand how it compares with the defined targets.",
          },
          {
            type: "image",
            src: `${import.meta.env.BASE_URL}images/projects/energy-production.png`,
            alt: "Site Overview dan Site Information pada dashboard monitoring",
            caption: "Daily, Monthly & Annual Energy Production", // Opsional
          },
          {
            type: "paragraph",
            content: [
              {
                text: "C. Energy Tracker",
                bold: true,
              },
              {
                text: "\nThe Energy Tracker presents energy production data in a chart, allowing users to observe production patterns over a selected period.",
              },
            ],
          },
          {
            type: "paragraph",
            content:
              "Users can switch between Daily, Monthly, and Annual views and navigate between periods using the date controls. This visualization complements the numerical summaries by providing a clearer view of how energy production changes over time.",
          },
          {
            type: "image",
            src: `${import.meta.env.BASE_URL}images/projects/energy-tracker.png`,
            alt: "Site Overview dan Site Information pada dashboard monitoring",
            caption:
              "Energy Tracker visualizes energy production trends across daily, monthly, and annual views, allowing clients to monitor production over selected periods.", // Opsional
          },
        ],
      },
      {
        h: "Outcome",
        blocks: [
          {
            type: "paragraph",
            content: [
              {
                text: "ATLAS Core was successfully implemented as a monitoring system that brings solar power plant energy production data into a single dashboard. The design combines site information, energy production summaries, target achievement indicators, and production trend visualizations in one interface.",
              },
            ],
          },
          {
            type: "paragraph",
            content:
              "With its organized information structure, clients can review daily energy production, monthly achievement, annual cumulative production, and production trends across selected time periods.",
          },
        ],
        // note: "Every error says what happened and what to do next. None of them apologize.",
      },
    ],
  },
};

export const about = {
  role: "UI/UX Designer",
  headline: "Making complex things feel simple.",
  bio: "With 3 years of experience in UI/UX design, I focus on understanding user needs and translating complex business requirements into clear, intuitive interfaces. My work spans web and mobile applications, from mapping user flows and creating wireframes to developing interactive prototypes and collaborating with developers to bring designs to life.",
  photo: "", // Isi URL foto jika sudah tersedia.
  approach: [
    {
      title: "Understand the problem",
      description:
        "Start with the people, their goals, and the obstacles in their way.",
    },
    {
      title: "Explore and simplify",
      description:
        "Turn ideas into clear flows and prototypes that are easy to discuss.",
    },
    {
      title: "Test and refine",
      description:
        "Use feedback to improve the experience and explain the decisions behind it.",
    },
  ],
  tools: [
    { category: "Design & collaboration", names: ["Figma", "FigJam"] },
    {
      category: "Productivity & Documentation",
      names: ["Google Workspace", "Microsoft Office"],
    },
    {
      category: "Frontend Fundamentals",
      names: ["HTML", "CSS", "Bootstrap", "Tailwind"],
    },
  ],
};
