import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import cert1 from '../assets/media/cert1.jpg';
import cert2 from '../assets/media/cert2.png';
import cert3 from '../assets/media/cert3.jpg';
import cert4 from '../assets/media/cert4.jpg';
import cert5 from '../assets/media/cert5.jpg';
import cert6 from '../assets/media/cert6.jpg';
import cert7 from '../assets/media/cert7.jpg';
import cert8 from '../assets/media/cert8.jpg';
import cert9 from '../assets/media/cert9.jpg';
import cert10 from '../assets/media/cert10.jpg';
import cert11 from '../assets/media/cert11.jpg';
import post3 from '../assets/media/post3.jpg';
import post4 from '../assets/media/post4.jpg';
import post6 from '../assets/media/post6.png';
import post7 from '../assets/media/post7.jpg';
import post8 from '../assets/media/post8.jpg';
import post12 from '../assets/media/post12.jpg';
import post16 from '../assets/media/post16.jpg';
import app1 from '../assets/media/app1.mp4';


import {
  BriefcaseFill,
  CodeSlash,
  EnvelopeFill,
  GeoAltFill,
  Github,
  Kanban,
  Layers,
  LightningChargeFill,
  Linkedin,
  MortarboardFill,
  Palette,
  Stars,
  TelephoneFill,
} from 'react-bootstrap-icons';

// Replace the placeholder profile details and URLs below with your real portfolio content.
export const navigationLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'posts', label: 'Posts' },
  { id: 'contact', label: 'Contact' },
];

export const resume = {
  label: 'Download Resume',
  href: '/resume.pdf',
};

export const profile = {
  name: 'Aniket',
  role: 'Frontend Developer & UI Engineer',
  availability: 'Available for freelance and full-time collaborations',
  location: 'Indore, Madhya Pradesh, India / Remote',
  email: 'aniket.awasthi.developer@gmail.com',
  phone: '+91 97557 87743',
  summary:
    'I create premium developer-focused experiences that blend strong visual hierarchy, motion design, and maintainable front-end engineering.',
  heroTags: ['React', 'UI Systems', 'Motion Design', 'Accessibility'],
  stats: [
    { value: '2+', label: 'Years crafting production-ready interfaces' },
    { value: '6', label: 'Launches across SaaS, landing pages, and dashboards' },
    { value: '75+', label: 'Target Lighthouse score for performance and UX' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/yourhandle', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourhandle', icon: Linkedin },
    { label: 'Email', href: 'mailto:hello@aniket.dev', icon: EnvelopeFill },
  ],
};

export const aboutHighlights = [
  { label: 'Core stack', value: 'React, TypeScript, CSS architecture' },
  { label: 'Strengths', value: 'Motion, responsive UI, accessibility' },
  { label: 'Workflow', value: 'Design systems, prototypes, implementation' },
];

export const aboutCards = [
  {
    title: 'Interaction-first UI',
    text: 'Motion is used to support hierarchy, feedback, and delight without slowing the experience down.',
    icon: Stars,
  },
  {
    title: 'System thinking',
    text: 'Reusable components, content-driven structure, and scalable styling keep the portfolio easy to extend.',
    icon: Layers,
  },
  {
    title: 'Performance-minded delivery',
    text: 'Animations stay lightweight, assets are lazy-loaded where appropriate, and the layout remains responsive on every breakpoint.',
    icon: LightningChargeFill,
  },
];

export const skillGroups = [
  {
    title: 'Frontend Engineering',
    description: 'Robust component architecture, modern styling, and high quality delivery for web products.',
    icon: CodeSlash,
    skills: [
      { name: 'React', level: 94, detail: 'Build reusable, state-driven interfaces with clean component boundaries.' },
      { name: 'TypeScript', level: 88, detail: 'Use strict typing to improve reliability and speed up collaboration.' },
      { name: 'Next.js / SPA Architecture', level: 86, detail: 'Design routing, data loading, and rendering strategies for scale.' },
      { name: 'Responsive CSS Systems', level: 92, detail: 'Create layout systems that stay consistent across mobile and desktop.' },
    ],
  },
  {
    title: 'Experience Design',
    description: 'Visual design, polished motion, and interface craftsmanship across marketing and product surfaces.',
    icon: Palette,
    skills: [
      { name: 'UI Design', level: 90, detail: 'Craft clear hierarchy, spacing rhythm, and conversion-focused layouts.' },
      { name: 'Micro-interactions', level: 91, detail: 'Use motion to communicate feedback and improve usability.' },
      { name: 'Design Systems', level: 87, detail: 'Define reusable tokens, components, and usage rules.' },
      { name: 'Accessibility', level: 89, detail: 'Apply keyboard, semantic, and contrast best practices by default.' },
    ],
  },
  {
    title: 'Product Delivery',
    description: 'The execution layer that turns ideas into maintainable releases without losing design intent.',
    icon: Kanban,
    skills: [
      { name: 'Performance Optimization', level: 90, detail: 'Improve web vitals with bundle, render, and asset optimization.' },
      { name: 'API Integration', level: 82, detail: 'Connect front-end flows to backend services with resilient states.' },
      { name: 'Cross-team Communication', level: 88, detail: 'Align product, design, and engineering around delivery priorities.' },
      { name: 'QA and Iteration', level: 85, detail: 'Validate behavior thoroughly and ship fast feedback-driven updates.' },
    ],
  },
];

export const projects = [
  {
    id: 'pulse-commerce',
    title: 'Pulse Commerce',
    category: 'Product',
    summary: 'A premium commerce dashboard for campaign tracking, stock visibility, and operational decision-making.',
    description:
      'This concept leans into analytics-heavy product UI with cleaner cards, stronger contrast, modular stats, and a glassmorphism visual system built for long-form dashboard use.',
    image: projImg1,
    stack: ['React', 'TypeScript', 'Dashboard UI', 'Charts'],
    metrics: ['-32% dashboard load time', '+18% faster campaign review flow', 'WCAG-conscious color contrast'],
    links: {
      live: 'https://your-live-demo.com/pulse-commerce',
      github: 'https://github.com/yourhandle/pulse-commerce',
    },
  },
  {
    id: 'spectra-studio',
    title: 'Spectra Studio',
    category: 'Marketing',
    summary: 'A bold product-marketing site with animated storytelling, rich gradients, and conversion-led layout decisions.',
    description:
      'The project demonstrates how expressive landing pages can stay fast and clear by using selective animation, layered background atmospherics, and concise content blocks.',
    image: projImg2,
    stack: ['React', 'Motion Design', 'Landing Page', 'SEO-ready UI'],
    metrics: ['+24% CTA engagement', 'Fluid mobile-first layout', 'Reusable section patterns'],
    links: {
      live: 'https://your-live-demo.com/spectra-studio',
      github: 'https://github.com/yourhandle/spectra-studio',
    },
  },
  {
    id: 'atlas-admin',
    title: 'Atlas Admin',
    category: 'Product',
    summary: 'An internal operations console designed for clarity, speed, and multi-step workflows.',
    description:
      'Atlas focuses on reducing cognitive load through cleaner navigation, better data grouping, and stateful interactions that feel lightweight instead of overwhelming.',
    image: projImg3,
    stack: ['React', 'Admin UI', 'Forms', 'Accessibility'],
    metrics: ['Simplified 5-step workflows', 'Keyboard-friendly interaction patterns', 'Scalable component primitives'],
    links: {
      live: 'https://your-live-demo.com/atlas-admin',
      github: 'https://github.com/yourhandle/atlas-admin',
    },
  },
  {
    id: 'northstar-brand',
    title: 'Northstar Brand',
    category: 'Brand',
    summary: 'A portfolio-style company presence built around storytelling, motion, and clear brand hierarchy.',
    description:
      'Northstar showcases a more editorial direction with layered imagery, soft animation timing, and a more spacious rhythm across sections and supporting content.',
    image: projImg1,
    stack: ['Brand Web', 'Storytelling', 'UI Direction', 'Responsive Layout'],
    metrics: ['Faster path to key messaging', 'Improved mobile readability', 'Consistent CTA visibility'],
    links: {
      live: 'https://your-live-demo.com/northstar-brand',
      github: 'https://github.com/yourhandle/northstar-brand',
    },
  },
];

export const timeline = [
  {
    type: 'Experience',
    title: 'Full Stack Developer Intern',
    company: 'CyberShoora',
    period: '3 Months',
    location: 'Remote',
    icon: BriefcaseFill,
    highlights: [
      'Worked on full stack development tasks involving front-end interfaces and backend integration.',
      'Collaborated with the development team to build and improve web application features.',
      'Gained practical experience in real-world development workflows, debugging, and deployment.',
    ],
    attachments: [
      {
        src: projImg1,
        alt: 'CyberShoora dashboard feature work screenshot',
        caption: 'Dashboard view built during internship work.',
      },
      {
        src: projImg2,
        alt: 'CyberShoora UI refinement screenshot',
        caption: 'UI improvements and feature validation state.',
      },
    ],
  },
  {
    type: 'Experience',
    title: 'Freelance Web Developer (Wix Studio)',
    company: 'Independent Clients',
    period: '2023 - 2024',
    location: 'Remote',
    icon: BriefcaseFill,
    highlights: [
      'Designed and developed modern, responsive websites for clients using Wix Studio.',
      'Customized layouts, animations, and UI elements to create visually engaging web experiences.',
      'Handled full project flow including client communication, design iteration, and final deployment.',
    ],
    attachments: [
      {
        src: projImg3,
        alt: 'Freelance website homepage screenshot',
        caption: 'Landing page delivered for a client project.',
      },
    ],
  },
  {
    type: 'Education',
    title: 'B.Tech in Computer Science & Technology',
    company: 'SAGE University',
    period: '2024 - 2028',
    location: 'Indore, India',
    icon: MortarboardFill,
    highlights: [
      'Focused on front-end engineering, UI fundamentals, and software architecture.',
      'Built early portfolio and client projects while strengthening product thinking.',
      'Developed a foundation in maintainable code structure and problem-solving.',
    ],
    attachments: [
      {
        src: projImg2,
        alt: 'SAGE University coursework project interface',
        caption: 'One of the interface prototypes built during coursework.',
      },
      {
        src: projImg1,
        alt: 'Academic project dashboard screenshot',
        caption: 'Academic project presentation screenshot.',
      },
    ],
  },
  {
    type: 'Education',
    title: 'Senior Secondary Education (Mathematics with Computer Science)',
    company: 'Kendriya Vidyalaya',
    period: '2022 - 2024',
    location: 'MHOW, India',
    icon: MortarboardFill,
    highlights: [
      'Studied core subjects including Mathematics, Computer Science, and foundational sciences.',
      'Built early programming fundamentals and logical problem-solving skills.',
      'Developed strong analytical thinking through mathematics and computational concepts.',
    ],
    attachments: [
      {
        src: projImg3,
        alt: 'Early computer science project visual',
        caption: 'Early-stage programming and CS practice project snapshot.',
      },
    ],
  },
];

export const certificates = [
  {
    title: 'Deloitte Cyber Job Simulation',
    issuer: 'Deloitte',
    issued: 'March 2026',
    summary: 'Completed a practical cyber security simulation focused on identifying security risks, analyzing vulnerabilities, and understanding real-world cyber defense strategies used by enterprise teams.',
    image: cert1,
    credentialUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_69ad1ffdc13bf07e52fe728e_1772954531793_completion_certificate.pdf',
  },
  {
    title: 'Gemini Certified Student',
    issuer: 'Google',
    issued: 'March 2026',
    summary: 'Certification validating knowledge of Google Gemini AI tools, prompt engineering fundamentals, and the application of generative AI in research, productivity, and development workflows.',
    image: cert2,
    credentialUrl: 'https://edu.google.accredible.com/a36327a4-a037-4f93-8035-da763e5f29aa',
  },
  {
    title: 'Generative AI',
    issuer: 'AI Academia',
    issued: 'January 2026',
    summary: 'Focused on generative AI systems, agentic AI concepts, and practical development approaches for building AI-driven tools and intelligent automation solutions.',
    image: cert3,
    credentialUrl: '',
  },
  {
    title: 'AI Tools and ChatGPT',
    issuer: 'Be10xDigital Pvt Ltd',
    issued: 'December 2025',
    summary: 'Hands-on training covering modern AI productivity tools, ChatGPT workflows, data analysis automation, and practical AI-assisted problem solving for real-world tasks.',
    image: cert4,
    credentialUrl: '',
  },
  {
    title: 'C++ Essentials 1',
    issuer: 'Cisco Networking Academy',
    issued: 'December 2025',
    summary: 'Covered fundamental C++ programming concepts including variables, control structures, functions, and foundational problem-solving using modern C++ syntax.',
    image: cert5,
    credentialUrl: 'https://www.credly.com/badges/80ebf7e8-18fc-4010-8c5b-51b800d44d98/public_url',
  },
  {
    title: 'Smart India Hackathon (Internal) 2025',
    issuer: 'SAGE University Indore',
    issued: 'September 2025',
    summary: 'Participated in the internal round of Smart India Hackathon, focusing on innovative problem solving, collaborative development, and building technology-driven solutions for real-world challenges.',
    image: cert6,
    credentialUrl: '',
  },
  {
    title: 'App Engine: 3 Ways',
    issuer: 'Google',
    issued: 'November 2024',
    summary: 'Explored multiple approaches to deploying applications on Google App Engine, including flexible deployment models and scalable cloud-based architecture.',
    image: cert7,
    credentialUrl: 'https://www.skills.google/public_profiles/4e4a842d-08dd-4926-9720-d7ad7edd9f8d/badges/12574198',
  },
  {
    title: 'Get Started with Google Cloud Storage',
    issuer: 'Google',
    issued: 'October 2024',
    summary: 'Learned the fundamentals of cloud storage architecture, data management, and secure storage practices using Google Cloud Storage services.',
    image: cert8,
    credentialUrl: 'https://www.skills.google/public_profiles/4e4a842d-08dd-4926-9720-d7ad7edd9f8d/badges/12388262',
  },
  {
    title: 'Smart Start',
    issuer: 'Sunstone',
    issued: 'October 2024',
    summary: 'Professional development program focused on productivity, multitasking skills, and foundational workplace readiness for technology students.',
    image: cert9,
    credentialUrl: '',
  },
  {
    title: 'Student Development Program',
    issuer: 'SAGE University Indore',
    issued: 'October 2024',
    summary: 'Training program designed to enhance technical awareness, problem-solving ability, and practical technology skills through guided sessions and workshops.',
    image: cert10,
    credentialUrl: '',
  },
  {
    title: 'The Basics of Google Cloud Compute',
    issuer: 'Google',
    issued: 'October 2024',
    summary: 'Introduced core cloud computing concepts including virtual machines, scalable compute infrastructure, and deployment models within Google Cloud.',
    image: cert11,
    credentialUrl: 'https://www.skills.google/public_profiles/4e4a842d-08dd-4926-9720-d7ad7edd9f8d/badges/12242487',
  },
];

export const posts = [
  {
    title: 'Completed Deloitte Cyber Job Simulation',
    date: 'March 2026',
    summary: 'Completed the Deloitte Cyber Job Simulation and explored real-world cybersecurity tasks, learning how industry teams approach threat analysis and secure development.',
    mediaType: 'image',
    mediaSrc: cert1,
    mediaAlt: 'Deloitte cyber simulation certificate highlight',
    tags: ['CyberSecurity', 'Deloitte', 'Learning'],
  },
  {
    title: 'Gemini Certified - Exploring AI Collaboration',
    date: 'March 2026',
    summary: 'Earned the Gemini Certification and explored prompt engineering, AI productivity workflows, and practical applications of generative AI tools.',
    mediaType: 'image',
    mediaSrc: cert2,
    mediaAlt: 'Gemini certification and AI collaboration post visual',
    tags: ['AI', 'Gemini', 'Certification'],
  },
  {
    title: "There's an AI for That - Discovering 46,000+ AI Tools",
    date: 'March 2026',
    summary: 'Explored theresanaiforthat.com and how it helps developers discover AI tools for automation, productivity, and workflow optimization.',
    mediaType: 'image',
    mediaSrc: post3,
    mediaAlt: 'AI tools discovery post visual',
    tags: ['AI Tools', 'Productivity', 'SoftwareEngineering'],
  },
  {
    title: 'HackTour India x GDG On Campus Experience',
    date: 'February 2026',
    summary: 'Shared my experience attending the HackTour India x GDG On Campus workshop at SAGE University Indore and learning through hands-on development sessions.',
    mediaType: 'image',
    mediaSrc: post4,
    mediaAlt: 'HackTour India workshop recap visual',
    tags: ['Hackathon', 'GDG', 'DeveloperCommunity'],
  },
  {
    title: 'Completed Generative AI Course with AI Academia',
    date: 'January 2026',
    summary: 'Completed a Generative AI program and gained practical exposure to modern AI systems and their potential for solving real-world problems.',
    mediaType: 'image',
    mediaSrc: cert3,
    mediaAlt: 'Generative AI completion post visual',
    tags: ['GenerativeAI', 'ArtificialIntelligence', 'Learning'],
  },
  {
    title: '2026: Refactoring for Scale',
    date: 'January 2026',
    summary: 'Outlined my developer roadmap for 2026, focusing on performance optimization, scalable system design, and strategic career growth.',
    mediaType: 'image',
    mediaSrc: post6,
    mediaAlt: '2026 roadmap and refactoring visual',
    tags: ['SoftwareEngineering', 'CareerGrowth', 'BuildInPublic'],
  },
  {
    title: 'git commit -m "Initial commit: 2026 Goals"',
    date: 'January 2026',
    summary: 'A developer-themed New Year post describing my approach to improving execution, building scalable systems, and focusing on higher-impact work.',
    mediaType: 'image',
    mediaSrc: post7,
    mediaAlt: 'Developer goals post visual',
    tags: ['DeveloperMindset', 'TechCommunity', 'Goals'],
  },
  {
    title: 'AI Tools Workshop - 20+ Hours Saved Weekly',
    date: 'December 2025',
    summary: 'Completed the be10x AI Tools Workshop and learned how AI can accelerate coding, presentation building, and data analysis workflows.',
    mediaType: 'image',
    mediaSrc: post8,
    mediaAlt: 'AI tools workshop outcome visual',
    tags: ['AI', 'Productivity', 'Automation'],
  },
  {
    title: 'Cisco Networking Academy - C++ Essentials Certification',
    date: 'December 2025',
    summary: 'Completed the C++ Essentials course from Cisco Networking Academy, covering programming fundamentals and object-oriented programming basics.',
    mediaType: 'image',
    mediaSrc: cert5,
    mediaAlt: 'Cisco C++ essentials post visual',
    tags: ['C++', 'Programming', 'Cisco'],
  },
  {
    title: 'Project Launch: NeXora AI FlashCards',
    date: 'November 2025',
    summary: 'Launched NeXora, an AI-powered flashcard learning app designed to generate study materials automatically and improve learning efficiency.',
    mediaType: 'video',
    mediaSrc: app1,
    mediaAlt: 'NeXora project launch visual',
    tags: ['AI', 'Flutter', 'EdTech'],
  },
  {
    title: 'Smart India Hackathon Internal 2025 Experience',
    date: 'November 2025',
    summary: 'Participated in the Smart India Hackathon internal round, focusing on rapid prototyping, problem-solving, and collaborative innovation.',
    mediaType: 'image',
    mediaSrc: cert6,
    mediaAlt: 'Smart India Hackathon experience visual',
    tags: ['Hackathon', 'Innovation', 'ProblemSolving'],
  },
  {
    title: 'Web3 Master Workshop Experience',
    date: '2025',
    summary: 'Attended a Web3 Master Workshop covering blockchain fundamentals, smart contracts, decentralized applications, and the future of Web3 development.',
    mediaType: 'image',
    mediaSrc: post12,
    mediaAlt: 'Web3 workshop summary visual',
    tags: ['Web3', 'Blockchain', 'dApps'],
  },
  {
    title: 'Google Cloud - App Engine: 3 Ways Certification',
    date: '2025',
    summary: 'Earned a Google Cloud certification focusing on deploying applications with App Engine and understanding cloud-native architectures.',
    mediaType: 'image',
    mediaSrc: cert7,
    mediaAlt: 'Google Cloud App Engine certificate post visual',
    tags: ['GoogleCloud', 'CloudComputing', 'Certification'],
  },
  {
    title: 'Google Cloud Storage Fundamentals',
    date: '2025',
    summary: 'Completed a certification covering the fundamentals of Google Cloud Storage and cloud-based data management.',
    mediaType: 'image',
    mediaSrc: cert8,
    mediaAlt: 'Google Cloud Storage fundamentals visual',
    tags: ['GoogleCloud', 'CloudStorage', 'Certification'],
  },
  {
    title: 'Student Development & Smart Start Certifications',
    date: '2025',
    summary: 'Completed two certifications including the Student Development Program and the SMART START foundation skills course.',
    mediaType: 'image',
    mediaSrc: cert9,
    mediaAlt: 'Student development certifications visual',
    tags: ['Certification', 'ProfessionalDevelopment'],
  },
  {
    title: 'Learning Excel with AI - Ace Academy Sunstone',
    date: '2025',
    summary: 'Started a course focused on integrating AI with Excel workflows to improve data analysis and productivity.',
    mediaType: 'image',
    mediaSrc: post16,
    mediaAlt: 'Excel with AI learning post visual',
    tags: ['Excel', 'AI', 'Learning'],
  },
  {
    title: 'Starting My B.Tech Journey with Sunstone',
    date: '2025',
    summary: "Announced the start of my Bachelor's degree journey with Sunstone and my commitment to building a career in technology.",
    tags: ['BTech', 'Education', 'CareerJourney'],
  },
];
export const contactCards = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: EnvelopeFill,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: 'tel:+919876543210',
    icon: TelephoneFill,
  },
  {
    label: 'Location',
    value: profile.location,
    href: 'https://maps.google.com/?q=India',
    icon: GeoAltFill,
  },
];

