import React from "react";
import Link from "next/link";

interface SectionLinkProps {
  section: string;
  handleLinkSelection(section: string): void;
  isSelected: boolean;
}

const SectionLink: React.FC<SectionLinkProps> = ({
  section,
  handleLinkSelection,
  isSelected,
}) => {
  return (
    <Link
      key={section}
      href="#"
      scroll={false}
      onClick={() => handleLinkSelection(section)}
      className={`text-base font-thin px-2 ${
        isSelected ? "showLinkBorder" : ""
      }`}
    >
      {section}
    </Link>
  );
};

export default SectionLink;
