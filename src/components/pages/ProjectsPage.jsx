import React from 'react'
import { ALLPROJECTS } from '../../constants'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  return (
    <div className="py-16 px-4 sm:px-8">
      <h1 className="text-4xl font-bold mb-10 text-center text-white">All Projects</h1>

      <div className="grid gap-10 md:grid-cols-2">
        {ALLPROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="bg-stone-900 rounded-lg shadow-md p-6"
          >
            <div className="w-full aspect-video mb-4 overflow-hidden rounded-md">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>

            <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-stone-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-stone-800 text-stone-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Live Preview
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-stone-600 text-white px-4 py-2 rounded hover:bg-stone-800 transition"
              >
                <FaGithub /> GitHub
              </a>
              <Link to={`/projects/${project.id}`} className="flex items-center gap-2 border border-stone-600 text-white px-4 py-2 rounded hover:bg-stone-800 transition">
                More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
