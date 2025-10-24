import React from "react";
import "./Header.css";
import profileImage from "../Assests/AnubamaProfile.jpg";

function Header() {
    return (
        <div className="Header-section" id="Header">
            <div className="header-content">
                <div className="profile-container">
                    <img src={profileImage} alt="Anubama" className="profile-pic" />
                </div>
                <div className="header-text">
                    <h1 className="Header-title">Hi, I'm Anubama</h1>
                    <h2 className="Header-subtitle">Full Stack Developer</h2>
                    <p className="Header-description">
                        Passionate about creating amazing web experiences with modern technologies
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Header;