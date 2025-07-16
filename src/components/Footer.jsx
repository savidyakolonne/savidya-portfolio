import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp
  
} from 'react-icons/fa' 

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6 text-center">
        
        {/* Name or Brand */}
        <h3 className="text-lg font-semibold">Savidya Kolonne</h3>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl">
          <a
            href="https://linkedin.com/in/savidyakolonne"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/savidyakolonne"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          
          <a
            href="mailto:savidya.kolonne@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://x.com/savidyakolonne"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="X (Twitter)"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/+94740581587"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Whatsapp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/share/16X1gaLw6t/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/savidyakolonne?igsh=MTU2ODd1eGY2cmF6Nw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          
        </div>

      
        <p className="text-sm text-stone-500">
          &copy; {new Date().getFullYear()} Savidya Kolonne. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
