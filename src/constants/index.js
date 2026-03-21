import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";
import project6 from "../assets/projects/project-6.webp";
import project7 from "../assets/projects/project-7.webp";

// extra images for Traamp project
import project7Img1 from "../assets/projects/project-7-1.webp";
// import project7Img2 from "../assets/projects/project-7-2.webp";
// import project7Img3 from "../assets/projects/project-7-3.webp";

export const HERO_CONTENT = `I’m a software engineering student, full-stack developer, and AI/ML enthusiast. I build modern web applications and intelligent systems using modern technologies. I’m available for freelance projects, internships, and developer roles. Founder of iNLAX, creating innovative digital solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Founder | Developer",
    company: "iNLAX",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["React", "JavaScript", "MongoDB", "Wordpress"],
  },
];

export const ALLPROJECTS = [
  {
    title: "Traamp App - Tourism application",
    image: project7,
    description:
      "Traamp is a second year Software Development Group Project (SDGP) developed by me and my team to create a digital platform that connects tourists with verified tour guides in Sri Lanka. The project focuses on improving trust, accessibility, and visibility within the tourism industry through modern technology and user friendly design.",
    technologies: [
      "Flutter",
      "NodeJS",
      "NextJs",
      "Firestore",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
    ],
    id: "project7",
    featured: true,
    liveUrl: "https://traamp.com",
    githubUrl: "https://github.com/savidyakolonne/traamp-landingpg",
    youtubeUrl: "https://youtube.com/embed/W3dUOSqmktw" , 
    features: [
      {
        title: "Find Guide",
        subtitle: "Find SLTDA-verified guides, instantly.",
      },
      {
        title: "Hidden Map",
        subtitle: "Uncover secrets within your radius.",
      },
      {
        title: "Top Destinations",
        subtitle: "Explore the island’s iconic landmarks.",
      },
      {
        title: "Activities",
        subtitle: "Book adventures, from surfing to safaris.",
      },
      {
        title: "Weather",
        subtitle: "Stay ahead with real-time weather alerts.",
      },
      {
        title: "Emergency",
        subtitle: "Instant access to emergency support.",
      },
      {
        title: "News",
        subtitle: "The latest tourism news, right here.",
      },
      {
        title: "AI Assistant",
        subtitle: "Your personal AI guide, 24/7.",
      },
    ],
    gallery: [project7Img1],
  },

  {
    title: "Traamp App Landing page",
    image: project6,
    description:
      "Traamp is a second year Software Development Group Project (SDGP) developed by me and my team to create a digital platform that connects tourists with verified tour guides in Sri Lanka. The project focuses on improving trust, accessibility, and visibility within the tourism industry through modern technology and user friendly design.",
    technologies: ["NextJs", "TailwindCSS", "TypeScript"],
    id: "project6",
    featured: false,
    liveUrl: "https://traamp.com",
    githubUrl: "https://github.com/savidyakolonne/traamp-landingpg",
    gallery: [],
  },

  {
    title: "iNLAX",
    image: project5,
    description: "Web site for the iNLAX web development startup",
    technologies: ["React", "TailwindCSS", "JavaScript", "EmailJs"],
    id: "project5",
    featured: false,
    liveUrl: "https://www.inlax.site/",
    gallery: [],
  },

  {
    title: "Savi K. Portfolio",
    image: project4,
    description: "This is the latest project.",
    technologies: ["React", "TailwindCSS", "JavaScript", "EmailJs"],
    id: "project4",
    featured: false,
    liveUrl: "https://www.savidyakolonne.me/",
    youtubeUrl: "https://www.youtube.com/embed/uv-Iuvr64i8",
    gallery: [],
  },

  {
    title: "Nova Clothing",
    image: project3,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "TailwindCSS", "JavaScript", "MongoDB"],
    id: "project3",
    featured: false,
    youtubeUrl: "https://www.youtube.com/embed/QjlHIsejBKE",
    gallery: [],
  },

  {
    title: "EcoVolt - Blog site",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    id: "project2",
    featured: false,
    githubUrl: "https://github.com/savidyakolonne/EcoVolt-blogsite",
    youtubeUrl: "https://www.youtube.com/embed/xy-ejDuXsOc",
    gallery: [],
  },

  {
    title: "Savi K. - Portfolio Website",
    image: project1,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript"],
    id: "project1",
    featured: false,
    liveUrl: "https://savi-k.vercel.app/",
    githubUrl: "https://github.com/savidyakolonne/SaviK",
    youtubeUrl: "https://www.youtube.com/embed/-VyBSHMB2Rs",
    gallery: [],
  },
];

// Only latest 3 for homepage
export const PROJECTS = ALLPROJECTS.slice(0, 3);

export const EDUCATION = [
  {
    school: "Informatics Institute of Technology",
    degree: "BEng (Hons) Software Engineering (University of Westminster, UK)",
    year: "2024 Sep - Present",
  },
  {
    school: "Prince of Wales' College",
    year: "Completed: 2023",
    result: "O/L - 8As, 1B | A/L - CCS (Physical Stream)",
  },
];

export const CONTACT = {
  address: "Colombo, Sri Lanka",
  email: "savidya.kolonne@gmail.com",
};