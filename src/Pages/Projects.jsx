import React from "react";
import Card from "../Components/Card.jsx";
import "../App.css";

function Projects() {
  const projectList = [
    {
      title: "Empower Her",
      description: "A women's safety app with real-time location sharing and emergency alerts.",
      tags: ["React", "CSS", "Firebase"],
      github: "https://github.com/yourname/portfolio",
      demo: "https://yourportfolio.vercel.app",
    },
    {
      title: "Smart Attendance System",
      description: "A full-stack app to manage attendance using facial recognition technology.",
      tags: ["MERN", "Face Recognition", "JWT"],
      github: "https://github.com/yourname/task-manager",
    },
  ];

  return (
    <div className="project-grid">
      <h1 className="Projects-title">Projects</h1>
      {projectList.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;