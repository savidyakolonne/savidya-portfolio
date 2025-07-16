import { EDUCATION } from "../constants"; // Adjust path if needed
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="pb-4">
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl font-bold">Education</motion.h2>

      {/* Wrapper to center content */}
      <div className="flex flex-col items-center space-y-8 px-4">
        {EDUCATION.map((edu, index) => (
          <motion.div
           whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            key={index}
            className="w-full max-w-xl border-l-4 border-blue-500 pl-4"
          >
            <h3 className="text-2xl font-semibold">{edu.school}</h3>
            {edu.degree && (
              <p className="text-lg text-gray-600">{edu.degree}</p>
            )}
            {edu.result && (
              <p className="text-md text-gray-500">{edu.result}</p>
            )}
            {edu.year && (
              <p className="text-sm text-gray-400 italic">{edu.year}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;

