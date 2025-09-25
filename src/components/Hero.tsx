"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

const Hero = () => {

    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;

        gsap.fromTo(
            el,
            { y: 0 },
            {
                y: -100,
                scrollTrigger: {
                    trigger: el,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <section
            className="relative min-h-screen mask-b-from-80% mask-b-to-98%   bg-cover bg-center bg-no-repeat bg-[url('https://ik.imagekit.io/1zd8gzbhye/arrivefriends.jpg?updatedAt=1757969722549')] flex items-center justify-start "
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex items-center justify-start">
                <div className="grid lg:grid-cols-1 gap-8 items-center">
                    {/* Text content */}
                    <div className="text-white space-y-6 max-w-4xl flex items-center flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-center">
                            Arrival Made Easy for Students
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-light leading-normal tracking-tight max-w-2xl text-center">
                            We’ve got your back from airport pickup to finding housing making your arrival easy and stress-free.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 md:flex-row max-w-2xl">
                        <Button
                            data-tally-open="3q90rY"
                            data-tally-hide-title="1"
                            data-tally-overlay="1"
                            data-tally-form-events-forwarding="1"
                            className="bg-white hover:bg-white/80 backdrop-blur-md text-gray-800 font-normal text-base border-none rounded-full px-6 py-6"
                        >
                            Get Started!
                        </Button>
                    </div>
                </div>
            </div>

            {/* Smooth bottom blur overlay */}
            <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-black/80 via-black/20 to-transparent  pointer-events-none" />
        </section>
    );
};

export default Hero;
