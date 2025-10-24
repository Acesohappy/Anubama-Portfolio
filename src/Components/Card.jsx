import React, { useState } from "react";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import "./Card.css";

function Card({ title, description, tags, github, demo }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="card" onMouseMove={handleMouseMove}>
      <div 
        className="card-spotlight"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`
        }}
      />
      
      <div className="card-content">
        <div className="card-header">
          <Sparkles className="sparkle-icon" size={20} />
          <h2 className="card-title">{title}</h2>
        </div>
        
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
            <a href={github} target="_blank" rel="noopener noreferrer" className="link-btn glass">
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="link-btn primary">
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;