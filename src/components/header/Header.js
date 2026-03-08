import { useEffect, useState } from "react";
import "./styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute("id");
          const navLink = document.querySelector(`a[href="#${id}"]`);
          if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("active"));
            navLink?.classList.add("active");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <h1>Mikes</h1>
      <div className="burger" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
      <nav className={menuOpen ? "open" : ""}>
        <ul onClick={closeMenu}>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#works" className="nav-link">Works</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;