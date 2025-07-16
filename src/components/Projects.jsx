import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="pb-4 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl font-bold"
        >
          Projects
        </motion.h2>

        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
              {/* Image Section */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/3"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/9] w-full object-cover rounded-lg shadow-sm"
                />
              </motion.div>

              {/* Text + Buttons Section */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-2/3"
              >
                <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-stone-400">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-2 flex-wrap">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                  >
                    Live Preview
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded border border-stone-700 px-4 py-2 text-white transition hover:bg-stone-800"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                  <Link to={`/projects/${project.id}`} className="flex items-center gap-2 border border-stone-600 text-white px-4 py-2 rounded hover:bg-stone-800 transition">
                    More
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Button to All Projects */}
        <div className="flex items-center justify-center mt-10">
          <Link to="/projects">
            <button className="shake-see-projects group flex items-center gap-2 text-base sm:text-lg bg-white text-black px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] cursor-pointer">
              <span className="relative z-10 ">See Projects</span>
              <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
