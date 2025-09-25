"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Squiggle() {
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        const pathLength = path.getTotalLength();

        // Hide path initially
        gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

        // Animate drawing on scroll
        gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });
    }, []);

    return (
        <svg

            viewBox="0 0 1000 2000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-w-full absolute top-0 left-0 -z-10 "
            preserveAspectRatio="none"
        >
            <path
                ref={pathRef}
                d="M-0 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 2000"
                stroke="#dbeafe"
                strokeWidth="1.6%"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
        </svg>
    );
}
