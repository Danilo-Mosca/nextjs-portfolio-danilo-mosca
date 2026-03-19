import Link from "next/link";
import React from "react";

export default function AlternativeNavbar() {
    return (
        <nav className="fixed top-0 w-full z-10 bg-[#151515] shadow-md shadow-background">
            <div className="max-w-3xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-2 p-4">

                <div className="font-title text-4xl hover:text-accent-green transition-colors">
                    <Link href="#hero" className="hover:text-accent-green transition-colors">MD</Link>
                </div>

                <div className="flex flex-wrap items-center gap-4 lg:gap-8">
                    <Link href="#about" className="hover:text-accent-green transition-colors">About</Link>

                    <Link href="#skills" className="hover:text-accent-green transition-colors">Skills</Link>

                    <Link href="#projects" className="hover:text-accent-green transition-colors">Projects</Link>

                    <Link href="#workflow" className="hover:text-accent-green transition-colors">Workflow</Link>

                    <Link href="#contacts" className="hover:text-accent-green transition-colors">Contacts</Link>
                </div>
            </div>
        </nav>
    );
}