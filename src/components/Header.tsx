import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { cvData } from "@/data/cvData";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const { personalInfo } = cvData;

  return (
    <header className="bg-primary text-primary-foreground p-8 rounded-lg shadow-lg mb-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">
            {personalInfo.name}
          </h1>
          <p className="text-2xl font-light opacity-90">
            {personalInfo.title}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <a href={`mailto:${personalInfo.email}`} className="hover:underline">
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex space-x-4 mt-4">
            {personalInfo.linkedin && (
              <Button asChild variant="secondary" size="icon">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            )}
            {personalInfo.github && (
              <Button asChild variant="secondary" size="icon">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
            {personalInfo.website && (
              <Button asChild variant="secondary" size="icon">
                <a href={personalInfo.website} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;