import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 py-6 text-center text-muted-foreground border-t border-border">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} {cvData.personalInfo.name}. Built with React and Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;