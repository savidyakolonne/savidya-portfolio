import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { FaGithub, FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <div
              key={index}
              className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6"
            >
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
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>

                  {project.featured && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/20 px-3 py-1 text-sm font-medium text-yellow-300">
                      <FaStar className="text-xs" />
                      Featured
                    </span>
                  )}
                </div>

                <p className="mb-4 text-stone-400">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex flex-wrap gap-4">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                    >
                      Live Preview
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded border border-stone-700 px-4 py-2 text-white transition hover:bg-stone-800"
                    >
                      <FaGithub /> View on GitHub
                    </a>
                  )}

                  <Link
                    to={`/projects/${project.id}`}
                    className="flex items-center gap-2 rounded border border-stone-600 px-4 py-2 text-white transition hover:bg-stone-800"
                  >
                    More
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Button to All Projects */}
        <div className="mt-10 flex items-center justify-center">
          <Link to="/projects">
            <button className="shake-see-projects group flex cursor-pointer items-center gap-2 rounded-xl bg-white px-4 py-2 text-base text-black shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] sm:text-lg">
              <span className="relative z-10">See Projects</span>
              <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;