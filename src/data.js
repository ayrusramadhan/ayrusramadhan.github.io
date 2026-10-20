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
    status: "coming-soon",
    summary:
      "I redesigned a five-step payment flow into two steps and tested it with 24 people over three rounds.",
    details: {
      Role: "UI/UX Designer",
      Team: "1 PM, 4 engineers, 1 researcher",
      Timeline: "10 weeks",
      Tools: "Figma, Maze, Amplitude",
    },
    sections: [
      {
        h: "The problem",
        p: "Four in ten people who started checkout left before paying. Session recordings showed most of them stalled on the payment-method step.",
        note: "I started with recordings, not a survey. People show what they do; surveys only show what they remember.",
      },
      {
        h: "What I tried",
        p: "I mapped the flow, removed every step that asked for something the app already knew, and tested three prototypes with different default behaviors.",
        note: "Pre-selecting the last-used payment method was the riskiest bet. Test participants never noticed it was a default.",
      },
      {
        h: "What shipped",
        p: "A two-step flow: confirm the amount and method, then pay with biometrics. Error messages name the fix, for example “Add 20,000 to your balance to pay.”",
        note: "Every error says what happened and what to do next. None of them apologize.",
      },
      {
        h: "What changed",
        p: "Completion rose from 61% to 78% in the first month after launch, and support tickets about failed payments fell by a third.",
      },
      {
        h: "What I would do differently",
        p: "I would bring engineering into prototype testing earlier. Two ideas I loved turned out to be expensive to build.",
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
