import { FaNodeJs, FaPython, FaJava, FaJsSquare, FaWordpress } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiMysql, SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

// Animation bounce
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const techSections = {
  Frontend: [
    {
      name: "React",
      icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
      duration: 2,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-7xl text-gray-300" />,
      duration: 2.1,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-7xl text-blue-500" />,
      duration: 2.15,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-7xl text-yellow-400" />,
      duration: 2.2,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-7xl text-sky-400" />,
      duration: 2.3,
    },
  ],

  Backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-7xl text-green-500" />,
      duration: 2.4,
    },
    {
      name: "Python",
      icon: <FaPython className="text-7xl text-blue-500" />,
      duration: 2.6,
    },
    {
      name: "Java",
      icon: <FaJava className="text-7xl text-red-600" />,
      duration: 2.8,
    },
  ],

  Database: [
    {
      name: "MySQL",
      icon: <SiMysql className="text-7xl text-blue-600" />,
      duration: 2.2,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-7xl text-green-600" />,
      duration: 3,
    },
  ],

  CMS: [
    {
      name: "WordPress",
      icon: <FaWordpress className="text-7xl text-blue-500" />,
      duration: 2.5,
    },
  ],
};

const Technologies = () => {
  return (
    <div className="pb-24 px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        {Object.entries(techSections).map(([section, icons]) => (
          <div key={section}>
            <h3 className="text-2xl font-semibold mb-6">{section}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {icons.map((tech, idx) => (
                <motion.div
                  key={idx}
                  variants={iconVariants(tech.duration)}
                  initial="initial"
                  animate="animate"
                  title={tech.name}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
