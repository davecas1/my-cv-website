import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-10 p-6 bg-card text-card-foreground rounded-lg shadow-md">
      <h2 className="text-3xl font-bold border-b-2 border-primary pb-3 mb-6">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;