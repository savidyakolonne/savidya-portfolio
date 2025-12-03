import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp"; 
import project5 from "../assets/projects/project-5.webp"; 
import project6 from "../assets/projects/project-6.webp"; 

export const HERO_CONTENT = `I’m a passionate software engineering student with a growing interest in full stack development, machine learning, and artificial intelligence. I enjoy building modern web applications and constantly exploring new technologies to improve my skills. I’m also the founder of iNLAX, a startup focused on creating innovative digital solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Founder | Developer",
    company: "iNLAX",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["React", "JavaScript", "MongoDB", "Wordpress"],
  }
];

export const ALLPROJECTS = [

{
    title: "Traamp ",
    image: project6,
    description: "Traamp is a second year Software Development Group Project (SDGP) developed by me and my team to create a digital platform that connects tourists with verified tour guides in Sri Lanka. The project focuses on improving trust, accessibility, and visibility within the tourism industry through modern technology and user friendly design.",
    technologies: ["NextJs", "TailwindCSS", "TypeScript"],
    id: "project6",
    liveUrl: "https://traamp.com",
    githubUrl: "https://https://github.com/savidyakolonne/traamp-landingpg",
    // youtubeUrl: "#"

  },
  {
    title: "iNLAX",
    image: project5,
    description: "This is the latest project.",
    technologies: ["React", "TailwindCSS" , "JavaScript", "EmailJs"],
    id: "project5",
    liveUrl: "https://www.inlax.site/",
    //  githubUrl: "#",
    // youtubeUrl: "#"

    
  },

  {
    title: "Savi K. Portfolio",
    image: project4,
    description: "This is the latest project.",
    technologies: ["React", "TailwindCSS" , "JavaScript", "EmailJs"],
    id: "project4",
    liveUrl: "#",
    // githubUrl: "#",
    youtubeUrl: "https://www.youtube.com/embed/uv-Iuvr64i8"

    
  },
  {
    title: "Nova Clothing",
    image: project3,
    description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "TailwindCSS", "JavaScript", "MongoDB"],
    id: "project3",
    // liveUrl: "#",
    // githubUrl: "#",
    youtubeUrl: "https://www.youtube.com/embed/QjlHIsejBKE"
  },
  {
    title: "EcoVolt - Blog site",
    image: project2,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    id: "project2",
    // liveUrl: "#",
    githubUrl: "https://github.com/savidyakolonne/EcoVolt-blogsite",
    youtubeUrl:"https://www.youtube.com/embed/xy-ejDuXsOc"
  },
  {
    title: "Savi K. - Portfolio Website",
    image: project1,
    description: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript"],
    id: "project1",
    liveUrl: "https://savi-k.vercel.app/",
    githubUrl: "https://github.com/savidyakolonne/SaviK",
    youtubeUrl: "https://www.youtube.com/embed/-VyBSHMB2Rs"

  }
];

// Only latest 3 for homepage
export const PROJECTS = ALLPROJECTS.slice(0, 3);

export const EDUCATION = [
  {
    school: "Informatics Institute of Technology",
    degree: "BEng (Hons) Software Engineering (University of Westminster, UK)",
    year: "2024 Sep - Present"
  },
  {
    school: "Prince of Wales' College",
    year: "Completed: 2023",
    result: "O/L - 8As, 1B | A/L - CCS (Physical Stream)"
  }
];

export const CONTACT = {
  address: "284, de Alwis road, Warahena, Bentota, Sri Lanka ",
  phoneNo: "+94 74 058 1587 ",
  email: "savidya.kolonne@gmail.com",
};
