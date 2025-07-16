import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between py-6 px-4 sm:px-8">
      {/* Logo */}
      <div className="flex-shrink-0 mb-4 sm:mb-0">
        <a href="/" aria-label="Home">
          <h1 className="cursor-pointer text-3xl font-bold">Savi K.</h1>
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/savidyakolonne/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/savidyakolonne"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-800 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://x.com/SavidyaKolonne"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-blue-400 transition"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.facebook.com/share/16X1gaLw6t/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-700 transition"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/savidyakolonne?igsh=MTU2ODd1eGY2cmF6Nw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-600 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
