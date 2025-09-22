"use client"

import * as React from "react"
import Link from "next/link"
import { MapPin, HelpCircle, User, IterationCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function Header() {

    useEffect(() => {
        // Wait for Botpress to load before trying to configure
        if (typeof window !== "undefined") {
            const interval = setInterval(() => {
                if (window.botpressWebChat) {
                    window.botpressWebChat.configure({
                        botName: "Support Bot",
                        hideWidget: true, // keep hidden until user clicks button
                    });
                    clearInterval(interval);
                }
            }, 500);
        }
    }, []);

    const openChat = () => {
        if (window.botpressWebChat) {
            window.botpressWebChat.sendEvent({ type: "show" });
        }
    };

    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="px-3  mr-12  text-whites  text-lg flex flex-row items-center justify-center">

                    <IterationCcw className="size-6 stroke-2  text-white mr-1 mt-1" />
                    <h1 className="font-medium text-md tracking-tight text-white">ArrivePath</h1>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center space-x-8 text-sm">

                    {/* <Link href="/" className="text-white hover:text-gray-200 transition-colors">
                        Features
                    </Link>
                    <Link href="/" className="text-white hover:text-gray-200 transition-colors">
                        Resourses
                    </Link>
                    <Link href="/" className="text-white hover:text-gray-200 transition-colors">
                        Company
                    </Link>
                    <Link href="/" className="text-white hover:text-gray-200 transition-colors">
                        Blogs
                    </Link> */}
                </nav>

                {/* Utility Links */}
                <div className="flex items-center space-x-4 text-sm">

                    <Button onClick={openChat} className="text-white hover:text-gray-200 transition-colors flex items-center space-x-1 ">
                        <HelpCircle className="size-4" />
                        <span>Help</span>
                    </Button>
                    <div className="bg-white hover:bg-white/80 text-gray-800 border-none rounded-full px-4 py-2 ml-2">
                        Login
                    </div>
                </div>
            </div>
        </header>
    )
}

