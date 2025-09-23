"use client"

import * as React from "react"
import Link from "next/link"
import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="px-3 mr-12 text-lg flex flex-row items-center justify-center">
                    <svg width="45" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" fill="transparent" />
                        <g>
                            <polygon points="100,30 45,170 65,170 100,70 135,140 155,140 100,30"
                                fill="white" />
                            {/* <rect x="90" y="120" width="55" height="20" fill="white" /> */}
                            <rect x="100" y="125" width="45" height="15" fill="white" />
                        </g>
                    </svg>


                    <h1 className="font-medium text-md tracking-tight text-white">
                        ArrivePath
                    </h1>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center space-x-8 text-sm">
                    {/* Add links if needed */}
                </nav>

                {/* Utility Links */}
                <div className="flex items-center space-x-4 text-sm">
                    {/* <Link
                        href="/"
                        className="text-white hover:text-gray-200 transition-colors flex items-center space-x-1"
                    >
                        <HelpCircle className="w-4 h-4" />
                        <span>Help</span>
                    </Link> */}
                    <div
                        data-tally-open="3q90rY"
                        data-tally-hide-title="1"
                        data-tally-overlay="1"
                        data-tally-form-events-forwarding="1"
                        className="bg-white hover:bg-white/80 text-gray-800 border-none rounded-full px-4 py-2 ml-2"
                    >
                        Start now
                    </div>
                </div>
            </div>
        </header>
    )
}
