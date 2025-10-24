import "./Skills.css";

function Skills() {
    const skills = [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "CSS", level: 95 },
        { name: "HTML", level: 95 },
        { name: "Express.js", level: 70 },
        { name: "Git", level: 85 }
    ];

    return (
        <div className="Skills-section" id="Skills">
            <h1 className="Skills-title">My Skills</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                            <div 
                                className="skill-progress" 
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;