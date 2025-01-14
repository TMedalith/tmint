"use client";
import React from 'react';

const Contact = () => {


    return (
        <section className="py-20 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute inset-0" />

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-[58%] space-y-10">
                        <div className="heading-group space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold">
                                <span className="bg-gradient-to-r from-[#FDE9EA] via-[#F9E0DB] to-[#E7B5AC] bg-clip-text text-transparent">
                                    Ready to Innovate?
                                </span>
                                <br />
                                <span className="text-[#869F77]">Let's Create Impact Together</span>
                            </h1>
                        </div>

                        <p className="description text-xl text-[#F9E0DB]/90 leading-relaxed font-light backdrop-blur-md bg-white/5 p-6 rounded-xl border border-[#588061]/20">
                            Passionate about building scalable solutions and driving innovation through code.
                            Open to exciting opportunities and collaborative projects.
                        </p>

                        <a href="mailto:tatiana.paucard@gmail.com" className="contact-button group relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#588061] to-[#869F77] rounded-xl opacity-90 group-hover:opacity-100 transition-all duration-300" />
                            <div className="relative px-10 py-5 text-lg font-medium text-white flex items-center gap-3">
                                <span>Get in Touch</span>
                                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                        </a>
                    </div>

                    <div className="w-full md:w-[42%] decorative-svg">
                        <svg viewBox="0 0 400 400" className="w-full h-auto">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#588061', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#869F77', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            
                            {}
                            <g className="connection-lines" stroke="url(#grad1)" strokeWidth="2" fill="none">
                                <path d="M50,200 C150,150 250,250 350,200" />
                                <path d="M50,180 C150,130 250,230 350,180" />
                                <path d="M50,220 C150,170 250,270 350,220" />
                            </g>
                            
                            {}
                            <g className="connection-nodes">
                                <circle cx="50" cy="200" r="8" fill="#588061" className="tech-icon" />
                                <circle cx="200" cy="200" r="12" fill="#869F77" className="tech-icon" />
                                <circle cx="350" cy="200" r="8" fill="#588061" className="tech-icon" />
                                
                                {}
                                <circle cx="200" cy="200" r="20" fill="#869F77" className="connection-pulse" opacity="0.3" />
                            </g>
                            
                            {}
                            <g className="decorative-elements" fill="none" stroke="#E7B5AC" strokeWidth="1">
                                <circle cx="100" cy="100" r="20" />
                                <circle cx="300" cy="300" r="20" />
                                <path d="M150,50 L170,50 L160,70 Z" />
                                <path d="M250,350 L270,350 L260,330 Z" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;