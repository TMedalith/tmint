"use client";

import { cn } from "@/lib/utils";
import React, { JSX, useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction,
    speed,
    pauseOnHover = true,
    className,
}: {
    items: {
        name?: string;
        title: string | JSX.Element;
        quote?: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-full  overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex  min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover
                )}
            >
                {items.map((item, idx) => (
                    <div className="flex  gap-4  items-center" key={item.name || idx}>
                        <li
                            className=" relative  flex-shrink-0  px-4 py-2 "
                            style={{
                                background:
                                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                            }}
                        >
                            <blockquote>
                                <div
                                    aria-hidden="true"
                                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                                ></div>

                                <div className="relative z-20  flex  items-center">

                                    <span className=" text-xl leading-[1.6] text-gray-400 font-medium">
                                        {item.title}
                                    </span>
                                </div>

                            </blockquote>




                        </li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_77)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.8572 0H11.1429V9.93067L4.12081 2.90862L2.90863 4.12081L9.93067 11.1429H0V12.8572H9.93066L2.90863 19.8792L4.12081 21.0913L11.1429 14.0693V24H12.8572V14.0693L19.8792 21.0913L21.0913 19.8792L14.0693 12.8572H24V11.1429H14.0693L21.0913 4.1208L19.8792 2.90862L12.8572 9.93066V0Z" fill="url(#paint0_linear_1_77)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1_77" x1="23.9044" y1="10.4389" x2="0.0864411" y2="10.6194" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7A87FB" />
                                    <stop offset="1" stopColor="#FFD49C" />
                                </linearGradient>
                                <clipPath id="clip0_1_77">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                ))}


            </ul>
        </div>
    );
};