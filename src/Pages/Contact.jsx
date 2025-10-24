import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="Contact-section" id="Contact">
            <h1 className="Contact-title">Get In Touch</h1>
            <div className="contact-content">
                <div className="contact-info">
                    <h3>Let's Connect!</h3>
                    <p>
                        I'm always interested in new opportunities and exciting projects. 
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <strong>Email:</strong>
                            <span>anubama@example.com</span>
                        </div>
                        <div className="contact-item">
                            <strong>Phone:</strong>
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="contact-item">
                            <strong>Location:</strong>
                            <span>Chennai, India</span>
                        </div>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;