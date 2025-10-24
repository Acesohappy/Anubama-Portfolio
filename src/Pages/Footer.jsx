import "./Footer.css";

function Footer() {
    return(
        <div className="Footer-section">
            <footer>
                <div className="footer-content">
                    <div className="footer-info">
                        <h3>Anubama</h3>
                        <p>Full Stack Developer passionate about creating amazing web experiences.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#Header">Home</a></li>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#Skills">Skills</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4>Connect With Me</h4>
                        <div className="social-links">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="mailto:anubama@example.com">Email</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="cred">© 2025 Anubama. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;