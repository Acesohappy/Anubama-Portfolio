import React from 'react';
import Project from '../Components/Project.jsx';
import '../App.css';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to My Portfolio</h1>
            <p>This is the home page of my portfolio website.</p>
            <div className="about">
                <h1>About</h1>
                <p>Hi this is anubama Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, repudiandae odit, 
                    quas possimus quam excepturi modi tempore pariatur doloremque, 
                    voluptatibus earum tenetur hic. Quos consectetur, libero et officiis aspernatur animi?</p>
            </div>
            <div className="projects">
                <h1>Projects</h1>
                <Project/>
            </div> 
            <div className="events">
                <h1>Events</h1>
            </div>
        </div>
    )
}
export default Home;