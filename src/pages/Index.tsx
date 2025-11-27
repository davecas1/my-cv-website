import React from "react";
import { cvData } from "@/data/cvData";
import Header from "@/components/Header";
import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import LanguageBadge from "@/components/LanguageBadge";
import Footer from "@/components/Footer";
// Removed: import { MadeWithDyad } from "@/components/made-with-dyad";

const Index: React.FC = () => {
  const { summary, experience, education, skills, projects, languages } = cvData;

  return (
    <div className="min-h-screen text-foreground">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
        <Header />

        <main>
          <Section title="About Me">
            <p className="text-lg leading-relaxed">{summary}</p>
          </Section>

          <Section title="Experience">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </Section>

          <Section title="Education">
            {education.map((edu, index) => (
              <ExperienceCard
                key={index}
                title={edu.degree}
                company={edu.institution}
                duration={edu.duration}
                description={[edu.description]}
                technologies={[]}
              />
            ))}
          </Section>

          <Section title="Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-card/80 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 capitalize text-muted-foreground">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <SkillBadge key={index} skill={skill.name} level={skill.level} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {languages && languages.length > 0 && (
            <Section title="Languages">
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <LanguageBadge key={index} language={lang.name} level={lang.level} />
                ))}
              </div>
            </Section>
          )}

          <Section title="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </Section>
        </main>

        <Footer />
        {/* Removed: <MadeWithDyad /> */}
      </div>
    </div>
  );
};

export default Index;