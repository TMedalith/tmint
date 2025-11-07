import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
    const socialLinks = [
        { href: "mailto:tatiana.paucard@email.com", icon: <FaEnvelope />, label: "Email" },
        { href: "https://wa.me/906829019", icon: <FaWhatsapp />, label: "WhatsApp" },
        { href: "https://www.linkedin.com/in/tatiana-paucar-de-la-cruz/", icon: <FaLinkedin />, label: "LinkedIn" },
        { href: "https://github.com/TMedalith", icon: <FaGithub />, label: "GitHub" },
    ];

    return (
        <div className="hidden md:flex fixed top-1/2 -translate-y-1/2 right-6 z-50 flex-col items-center gap-3">
            <ul className="flex flex-col items-center gap-3">
                {socialLinks.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="flex items-center justify-center w-12 h-12 bg-deep-black dark:bg-cream-white border-2 border-deep-black dark:border-cream-white text-white dark:text-deep-black hover:bg-electric-lime hover:border-electric-lime dark:hover:bg-electric-lime dark:hover:border-electric-lime hover:text-deep-black transition-all duration-300"
                        >
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialMedia;