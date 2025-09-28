import React from "react";
import { Github, ExternalLink } from "lucide-react";
import "../App.css";

function Card({ title, description, tags, github, demo }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="card-links">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github size={18} /> Code
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={18} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;