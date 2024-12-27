"use client";
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import SectionLink from "../SectionLink/SectionLink";
import MobileMenu from "../MobileMenu/MobileMenu";
const headerPadding = 90;

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Home");

  const sections: string[] = ["Home", "TechStack", "Experience", "Projects"];

  function handleThemeToggle() {
    const toggler = document.getElementById("toggle_theme");
    if (toggler) {
      toggler.classList.toggle("bx-moon");
      toggler.classList.toggle("bx-sun");
      document.body.classList.toggle("dark-mode");
    }
  }

  let sectionPositions: { [key: string]: any } = {};

  React.useEffect(() => {
    sections.forEach((section: string) => {
      if (!sectionPositions[section]) {
        sectionPositions[section] =
          document.getElementById(section.toLowerCase())?.offsetTop || 0;
      }
    });
    scrollTo({ top: 0 });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      scrollTo({
        behavior: "smooth",
        top: section.offsetTop - headerPadding + 20,
      });
    }
  };

  const handleLinkSelection = (section: string) => {
    scrollToSection(section.toLowerCase());
    setSelectedSection(section);
  };

  return (
    <header className="header max-sm:px-4">
      <span className="flex">
        <div
          className="space-y-2 sm:hidden pr-4 m-auto"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 bg-gray-600"></span>
          <span className="block h-0.5 w-8 bg-gray-600"></span>
          <span className="block h-0.5 w-8 bg-gray-600"></span>
        </div>
        <a href="#" className="logo">
          Lucas.
        </a>
      </span>

      <nav>
        <MobileMenu
          show={isNavOpen}
          handleClose={() => setIsNavOpen(false)}
          scrollToSection={scrollToSection}
          sections={sections}
        />
        <span className="max-sm:hidden">
          {sections.map((section: string) => (
            <SectionLink
              key={section}
              isSelected={selectedSection === section}
              section={section}
              handleLinkSelection={handleLinkSelection}
            />
          ))}
        </span>
      </nav>
      <button
        className={`${styles.toggle} max-sm:pr-4 `}
        onClick={() => handleThemeToggle()}
      >
        <i id="toggle_theme" className={`bx bx-sun toggle-icon`}></i>
      </button>
      <style>{`
		 .showLinkBorder {
		   border-bottom: 2px solid var(--secondary-color)
		 }
	   `}</style>
    </header>
  );
};

export default NavBar;
