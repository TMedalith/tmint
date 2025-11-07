import React from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contacto = () => {
    const contactLinks = [
        { href: "mailto:tatiana.paucard@email.com", icon: FaEnvelope, label: "Email", text: "tatiana.paucard@email.com" },
        { href: "https://wa.me/906829019", icon: FaWhatsapp, label: "WhatsApp", text: "+51 906 829 019" },
        { href: "https://www.linkedin.com/in/tatiana-paucar-de-la-cruz/", icon: FaLinkedin, label: "LinkedIn", text: "Tatiana Paucar" },
        { href: "https://github.com/TMedalith", icon: FaGithub, label: "GitHub", text: "@TMedalith" },
    ];

    return (
        <section id="contact" className="relative py-32 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-deep-black border-t border-gray-200 dark:border-cream-white/10 transition-colors duration-300">
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header - Bold & Minimalist */}
                <div className="mb-20 animate-fade-in">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-2 h-2 bg-electric-lime"></div>
                        <span className="text-xs font-bold text-gray-600 dark:text-cream-white/60 uppercase tracking-widest">
                            Conectemos
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-deep-black dark:text-cream-white mb-6 tracking-tighter">
                        CONTÁCTAME
                    </h2>

                    <div className="flex items-start gap-8">
                        <div className="w-24 h-1 bg-electric-lime mt-4"></div>
                        <p className="text-lg text-gray-700 dark:text-cream-white/70 max-w-2xl leading-relaxed">
                            Me entusiasma crear soluciones innovadoras con tecnología. ¿Intercambiamos ideas?
                        </p>
                    </div>
                </div>

                {/* Contact Cards Grid - Brutalist */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {contactLinks.map((link, index) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group animate-slide-up"
                        >
                            {/* Brutalist Card */}
                            <div className="relative bg-white dark:bg-deep-black border-2 border-gray-200 dark:border-cream-white/20 p-8 hover:border-electric-lime transition-all duration-300 overflow-hidden">
                                <div className="flex items-center gap-6">
                                    {/* Icon Square */}
                                    <div className="flex items-center justify-center w-16 h-16 bg-electric-lime text-deep-black group-hover:bg-cream-white transition-all duration-300">
                                        <link.icon className="text-2xl" />
                                    </div>

                                    <div className="text-left flex-1">
                                        <p className="text-xs text-gray-600 dark:text-cream-white/60 font-bold mb-2 uppercase tracking-widest">
                                            {link.label}
                                        </p>
                                        <p className="text-deep-black dark:text-cream-white font-bold text-base break-all group-hover:text-electric-lime transition-colors">
                                            {link.text}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-electric-lime transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contacto;
