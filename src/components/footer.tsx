const Footer = () => {
  return (
    <footer className="bg-black-252 text-white-100 w-full py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 md:flex-row">
        <div className="flex flex-col items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Vincent Dinh</p>
          <p>Last updated: Sept 2025</p>
        </div>

        <div className="mt-4 flex space-x-6 md:mt-0">
          <a
            href="https://github.com/vinceednh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-highlight"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vincent-dnh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-highlight"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-highlight"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
