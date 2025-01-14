"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { icon: <FaGithub size={20} />, href: "https://github.com" },
        { icon: <FaLinkedin size={20} />, href: "https://linkedin.com" },
        { icon: <FaTwitter size={20} />, href: "https://twitter.com" },
        { icon: <FaEnvelope size={20} />, href: "mailto:contact@example.com" }
    ];

    return (
        <footer className="bg-gradient-to-b text-white p-8 text-center from-transparent to-gray-900 ">
            
               Crafted with 💚 by TMint © {new Date().getFullYear()}
              
        </footer>
    );
};

export default Footer;