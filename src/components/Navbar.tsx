"use client";

import React from "react";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ModeToggle";
import DashboardBtn from "@/components/DashboardBtn";
import { useTheme } from "next-themes";

const Navbar = () => {
    const { resolvedTheme } = useTheme(); // Ensures system theme is handled

    return (
        <nav className="border-b">
            <div className="flex h-16 items-center px-4 container mx-auto">
                {/* LEFT SIDE - LOGO */}
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
                >
                    <CodeXml />
                    <span>
                        InterviewSync
                    </span>
                </Link>
                {/* RIGHT SIDE - ACTIONS */}
                <SignedIn>
                    <div className="flex items-center space-x-4 ml-auto">
                        <DashboardBtn />
                        <ModeToggle />
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navbar;
