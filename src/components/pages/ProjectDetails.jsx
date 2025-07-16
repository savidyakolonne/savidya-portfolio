import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALLPROJECTS } from '../../constants';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = ALLPROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="py-20 px-4 text-center text-white">
        <h2 className="text-3xl font-bold">Project not found</h2>
        <Link to="/projects" className="mt-4 inline-block text-blue-500 hover:underline">
          <FaArrowLeft className="inline mr-2" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-w-[1280px] aspect-video object-cover rounded-md mb-6 mx-auto"
        />

        <p className="text-stone-300 mb-6">{project.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-stone-800 text-stone-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* YouTube Video Player */}
        {project.youtubeUrl && (
          <div className="mb-8 max-w-[1280px] mx-auto">
            <h2 className="text-2xl font-semibold mb-3">Project Video</h2>
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={project.youtubeUrl}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-md"
              />
            </div>
          </div>
        )}

        <div className="flex gap-4 mb-8">
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
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-blue-400 hover:underline"
        >
          <FaArrowLeft />
          Back to All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
