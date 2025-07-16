import React from 'react'
import profilePic from "../assets/saviProfilePic.webp"
import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    }
  }
}

const childrenVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
}

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-16 py-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        {/* ✅ Profile Image on the LEFT */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            src={profilePic}
            alt="saviProfile"
            className="w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] object-cover  rounded-full"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* ✅ Text Content on the RIGHT */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.h2
              variants={childrenVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              Savidya Kolonne
            </motion.h2>

            <motion.span
              variants={childrenVariants}
              className="mt-2 bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent"
            >
              Software Engineer Undergraduate
            </motion.span>

            <motion.p
              variants={childrenVariants}
              className="my-4 max-w-xl text-lg sm:text-xl text-stone-400 leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
  variants={childrenVariants}
  className="flex flex-row gap-5 mt-6" // increased gap from 4 → 8
>
 
  <a
    // href="/"
    target="_blank"
    rel="noopener noreferrer"
    download
    className="bg-white hover:bg-stone-200 transition px-6 py-3 rounded-full text-stone-800 text-sm font-semibold"
  >
    Download CV
  </a>

  
  <a
    href="https://your-inlax-site.com"
    target="_blank"
    rel="noopener noreferrer"
    className="backdrop-blur-md bg-white/10 border border-white/30 text-white hover:bg-white/20 transition px-6 py-3 rounded-full inline-flex items-center gap-2 text-sm font-semibold"
  >
    iNLAX
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3h7m0 0v7m0-7L10 14"
      />
    </svg>
  </a>
</motion.div>




          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Hero
