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
          <h1 className="text-4xl font-extrabold tracking-tight mb-1">
            {personalInfo.name}
          </h1>
          <p className="text-xl font-light opacity-90">
            {personalInfo.title}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${personalInfo.email}`} className="hover:underline text-sm">
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">{personalInfo.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{personalInfo.location}</span>
          </div>
          <div className="flex space-x-3 mt-4">
            {personalInfo.linkedin && (
              <Button asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            )}
            {personalInfo.github && (
              <Button asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
            {personalInfo.website && (
              <Button asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
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