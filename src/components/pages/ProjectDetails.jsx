import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ALLPROJECTS } from "../../constants";
import { FaGithub, FaArrowLeft, FaStar } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = ALLPROJECTS.find((p) => p.id === id);

  const allImages = project ? [project.image, ...(project.gallery || [])] : [];

  const [selectedImage, setSelectedImage] = useState(
    allImages.length > 0 ? allImages[0] : null
  );

  if (!project) {
    return (
      <div className="py-20 px-4 text-center text-white">
        <h2 className="text-3xl font-bold">Project not found</h2>
        <Link
          to="/projects"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          <FaArrowLeft className="inline mr-2" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-8 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>

          {project.featured && (
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
              <FaStar className="text-xs" />
              Featured
            </span>
          )}
        </div>

        {selectedImage && (
          <img
            src={selectedImage}
            alt={project.title}
            className="w-full max-w-[1280px] aspect-video object-cover rounded-md mb-6 mx-auto"
          />
        )}

        {allImages.length > 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {allImages.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(img)}
                className={`overflow-hidden rounded-lg border transition ${
                  selectedImage === img
                    ? "border-blue-500"
                    : "border-stone-700 hover:border-stone-400"
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} preview ${index + 1}`}
                  className="w-full h-28 object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <p className="text-stone-300 mb-6 leading-7">{project.description}</p>

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

        {project.features && project.features.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-stone-900 border border-stone-800 rounded-xl p-4"
                >
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-stone-400">{feature.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        )}

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

        <div className="flex flex-wrap gap-4 mb-8">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Live Preview
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-stone-600 text-white px-4 py-2 rounded hover:bg-stone-800 transition"
            >
              <FaGithub /> GitHub
            </a>
          )}
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