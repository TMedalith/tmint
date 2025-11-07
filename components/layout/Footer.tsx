import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-deep-black border-t border-gray-200 dark:border-cream-white/10 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo/Name */}
                    <div className="flex items-center gap-3">
                        <span className="text-xl font-black text-deep-black dark:text-cream-white tracking-tighter">
                            TATIANA PAUCAR
                        </span>
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-600 dark:text-cream-white/60 font-bold text-sm uppercase tracking-wider">
                        Creando el futuro © {new Date().getFullYear()}
                    </p>

                    {/* Decorative Accent */}
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-1 bg-electric-lime"></div>
                        <div className="w-8 h-1 bg-cream-white"></div>
                        <div className="w-4 h-1 bg-electric-lime"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
