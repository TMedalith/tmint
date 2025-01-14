import { useRef, useEffect } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import gsap from 'gsap';

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

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(
            socialLabelRef.current,
            { opacity: 0, rotation: 0 },
            { opacity: 1, rotation: 90, duration: 1, delay: 0.3, ease: "power2.out" }
        );

        gsap.fromTo(
            lineRef.current,
            { height: 0, opacity: 0 },
            {
                height: "40px",
                opacity: 1,
                duration: 0.8,
                delay: 0.6,
                ease: "power2.out",
                onComplete: () => {
                    gsap.to(lineRef.current, {
                        boxShadow: "2px 0 20px #FDE9EA",
                        duration: 1,
                        repeat: -1,
                        yoyo: true
                    });
                }
            }
        );

        linksRef.current.forEach((link, index) => {
            gsap.fromTo(
                link,
                { opacity: 0, x: 20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    delay: 0.8 + (index * 0.1),
                    ease: "power2.out"
                }
            );
        });


    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed top-1/2 -translate-y-1/2 z-[1000] flex flex-col items-center gap-3 right-6"
        >
            <div
                ref={socialLabelRef}
                className="flex items-center font-bold uppercase h-14 text-[#FDE9EA] tracking-widest text-sm"
                style={{ transformOrigin: "center center" }}
            >
                Social
            </div>

            <span
                ref={lineRef}
                className="w-px bg-gradient-to-b from-[#869F77] via-[#FDE9EA] to-[#F9E0DB] shadow-glow"
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
            <div className="absolute -z-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#588061]/10 via-[#869F77]/10 to-[#F9E0DB]/10 blur-xl animate-pulse" />
        </div>
    );
};

export default SocialMedia;