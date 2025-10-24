import "./About.css";

function About() {
    return (
        <div className="About-section" id="About">
            <h1 className="About-title">About Me</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hello! I'm <strong>Anubama</strong>, a pre-final year Computer Science Engineering student at 
                        <em> St. Joseph's College of Engineering</em>. I am a passionate 
                        <strong> Full Stack Developer</strong> who loves creating innovative solutions.
                    </p>
                    <p>
                        I am currently mastering the <em>MERN Stack</em> (MongoDB, Express.js, React.js, Node.js) 
                        and have hands-on experience with modern web technologies. My journey in programming 
                        has been driven by curiosity and a desire to build meaningful applications.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                        projects, or working on personal projects that solve real-world problems.
                    </p>
                </div>
                <div className="about-stats">
                    <div className="stat-item">
                        <h3>2+</h3>
                        <p>Years Learning</p>
                    </div>
                    <div className="stat-item">
                        <h3>5+</h3>
                        <p>Projects Built</p>
                    </div>
                    <div className="stat-item">
                        <h3>3+</h3>
                        <p>Technologies</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;