import { useRef} from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
    const containerRef = useRef(null);
    const socialLabelRef = useRef(null);
    const lineRef = useRef(null);
    const linksRef = useRef<(HTMLLIElement | null)[]>([]);

    const socialLinks = [
        { href: "mailto:tatiana.paucard@email.com", icon: <FaEnvelope />, label: "Email" },
        { href: "https://wa.me/906829019", icon: <FaWhatsapp />, label: "WhatsApp" },
        { href: "https://www.linkedin.com/in/tatiana-paucar-de-la-cruz/", icon: <FaLinkedin />, label: "LinkedIn" },
        { href: "https://github.com/TMedalith", icon: <FaGithub />, label: "GitHub" },
    ];

   
    return (
        <div
            ref={containerRef}
            className="fixed top-1/2 -translate-y-1/2 z-[1000] flex flex-col items-center gap-3 right-3 md:right-6"
        >
            <div
                ref={socialLabelRef}
                className="rotate-90 flex items-center font-bold uppercase w-5 md:w-14 h-14 text-[#FDE9EA] tracking-widest text-sm"
                style={{ transformOrigin: "center center" }}
            >
                Social
            </div>

            <span
                ref={lineRef}
                className="w-px mt-8 h-10 bg-gradient-to-b from-[#869F77] via-[#FDE9EA] to-[#F9E0DB] shadow-glow"
            />
            

            <ul className="flex flex-col items-center gap-5">
                {socialLinks.map((link, index) => (
                    <li
                        key={index}
                        ref={el => { linksRef.current[index] = el; }}
                        className="relative group"
                    >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 z-10 text-2xl text-white relative rounded-md hover:bg-[#97bba055] transition duration-300 ease-in"
                        >
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="absolute -z-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#869F77]/10 via-[#869F77]/10 to-[#F9E0DB]/10 blur-xl animate-pulse" />
        </div>
    );
};

export default SocialMedia;