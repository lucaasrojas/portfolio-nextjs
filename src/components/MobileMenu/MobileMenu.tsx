import Link from "next/link";

interface MobileMenuProps {
  show: boolean;
  sections: string[];
  handleClose: () => void;
  scrollToSection: (section: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  show,
  sections,
  handleClose,
  scrollToSection,
}) => {
  const handleLinkClick = (section: string) => {
    scrollToSection(section.toLowerCase());
    handleClose();
  };
  return (
    show && (
      <div className="showMenuNav">
        <div
          className="absolute top-0 right-0 px-8 py-8"
          onClick={() => handleClose()}
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        {sections.map((section: string) => (
          <Link
            key={section}
            href="#"
            scroll={false}
            onClick={() => handleLinkClick(section)}
            className=""
          >
            {section}
          </Link>
        ))}
        <style>{`
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
      </div>
    )
  );
};

export default MobileMenu;
