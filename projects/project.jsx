import React from "react";
import "projects/projectstyle.css"; // import the CSS file for styling

const ProjectCard = ({ title, description, tech, link, image }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-visual">
          <canvas className="project-canvas">
            <img src={image} alt={title} className="project-image" />
          </canvas>
        </div>
        <div className="project-info">
          <h3>{title}</h3>
          <h4>{description}</h4>
          <ul>
            {tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="project-tech">
            {tech.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <a href={link} className="view-more-btn">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Frame Level Speech Classification",
      description: "Classification model to classify phonemes from pre-processed speech utterances.",
      tech: ["Python", "Numpy", "GCP", "Pandas"],
      link: "projects/speech-classification.html",
      image: "path_to_speech_image.jpg",
    },
    {
      title: "SketchAI",
      description: "AI-powered platform that converts user sketches into product-ready images.",
      tech: ["Python", "Dialogflow", "AWS"],
      link: "projects/chatbot.html",
      image: "path_to_sketchai_image.jpg",
    },
    {
      title: "Virtual Assistant for Visually Impaired",
      description: "Deep Learning based prototype for end-to-end communication for Blind People.",
      tech: ["Python", "OpenCV", "API Design", "Pandas", "Numpy"],
      link: "projects/vision-blind.html",
      image: "path_to_virtual_assistant_image.jpg",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="section-content">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
