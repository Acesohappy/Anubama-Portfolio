import React from "react";
import Card from "../Components/Card.jsx";
import "./Projects.css";

function Projects() {
  const projectList = [
    {
      title: "Empower Her",
      description: "A women's safety app with real-time location sharing and emergency alerts.",
      tags: ["React", "CSS", "Firebase"],
      github: "https://github.com/Acesohappy/EmpowerHerProject",
      demo: "https://empower-her-gamma.vercel.app/",
    },
    {
      title: "Smart Attendance System",
      description: "A full-stack app to manage attendance using facial recognition technology.",
      tags: ["MERN", "Face Recognition", "JWT"],
      github: "https://github.com/yourname/task-manager",
    },
  ];

  return (
    <div className="projects-section" id="Projects">
      <h1 className="projects-title">Projects</h1>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;