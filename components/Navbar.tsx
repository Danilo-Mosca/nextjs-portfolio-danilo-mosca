"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from 'lucide-react';    // importo l'icona del menu hamburger da lucide-react, che è una libreria di icone SVG per React.

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);    // Stato React per aprire/chiudere il menu (controlla se il menu è aperto o chiuso)

    return (
        <nav className="fixed top-0 w-full z-10 bg-[#151515] shadow-md shadow-background">
            <div className="max-w-3xl mx-auto flex justify-between items-center p-4">

                {/* Logo */}
                {/* L'ANIMAZIONE: transition-all duration-300 transform hover:scale-110
                che ho aggiunto sia qui che a tutti i link (mobile e desktop) anima i link ingrandendoli leggermente */}
                <div className="font-title text-4xl hover:text-accent-green transition-all duration-300 transform hover:scale-110">
                    <Link href="#hero">MD</Link>
                </div>

                {/* Bottone hamburger (visibile solo su mobile) */}
                <button
                    // lg:hidden → nasconde elementi su desktop
                    className="lg:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* Se isOpen è true allora mostro la X (vuol dire che il menu hamburger è aperto), altrimenti mostro l'icona per aprire il menu */}
                    {isOpen ? (
                        <X className="w-7 h-7 hover:text-accent-green transition-colors cursor-pointer" />
                    ) : (
                        <Menu className="w-7 h-7 hover:text-accent-green transition-colors cursor-pointer" />
                    )}
                </button>

                {/* Menu desktop */}
                {/* Con hidden nasconde il menu su mobile, tablet ecc, mentre su desktop (grazie a lg:flex) viene visualizzato con items centrati e spaziati */}
                {/* Quindi hidden lg:flex → mostra il menu classico solo su desktop */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="#about" className="hover:text-accent-green transition-all duration-300 transform hover:scale-110">About</Link>
                    <Link href="#skills" className="hover:text-accent-green transition-all duration-300 transform hover:scale-110">Skills</Link>
                    <Link href="#projects" className="hover:text-accent-green transition-all duration-300 transform hover:scale-110">Projects</Link>
                    <Link href="#workflow" className="hover:text-accent-green transition-all duration-300 transform hover:scale-110">Workflow</Link>
                    <Link href="#contacts" className="hover:text-accent-green transition-all duration-300 transform hover:scale-110">Contacts</Link>
                </div>
            </div>

            {/* Menu mobile animato */}
            <div
                /* Cosa fa il codice seguente:
                lg:hidden    Nasconde il menu su schermi grandi (desktop), mobile → visibile, desktop → nascosto
                overflow-hidden     IMPORTANTISSIMO, serve a nascondere il contenuto quando l’altezza è 0, evitare che i link “escano fuori”. Senza questo vedresti il menu anche quando è chiuso
                transition-all duration-300 ease-in-out è l'animazione applicata al contenitore del menu: transition-all → anima tutte le proprietà (altezza, opacità), duration-300 → 300ms, ease-in-out → accelerazione morbida
                
                PARTE DINAMICA ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                Quando isOpen = true (menu aperto):
                max-h-96 → altezza massima del menu, circa 384px
                opacity-100 → completamente visibile
                
                Quando isOpen = false (menu chiuso):
                max-h-0 → altezza = 0 (collassato)
                opacity-0 → invisibile
                */
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="flex flex-col items-center gap-4 pb-4 bg-[#151515]">
                    <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-accent-green transition-all duration-300 transform hover:scale-110">About</Link>
                    <Link href="#skills" onClick={() => setIsOpen(false)} className="hover:text-accent-green transition-all duration-300 transform hover:scale-110">Skills</Link>
                    <Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-accent-green transition-all duration-300 transform hover:scale-110">Projects</Link>
                    <Link href="#workflow" onClick={() => setIsOpen(false)} className="hover:text-accent-green transition-all duration-300 transform hover:scale-110">Workflow</Link>
                    <Link href="#contacts" onClick={() => setIsOpen(false)} className="hover:text-accent-green transition-all duration-300 transform hover:scale-110">Contacts</Link>
                </div>
            </div>

            {/* VECCHIA SOLUZIONE: */}
            {/* Menu mobile visibile solo se isOpen è true 
            {isOpen && (...)} → mostra il menu mobile solo quando clicchi il bottone hamburger */}
            {/* {isOpen && (
                <div className="lg:hidden flex flex-col items-center gap-4 pb-4 bg-[#151515]">
                    <Link href="#about" className="hover:text-accent-green transition-colors" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="#skills" className="hover:text-accent-green transition-colors" onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link href="#projects" className="hover:text-accent-green transition-colors" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link href="#workflow" className="hover:text-accent-green transition-colors" onClick={() => setIsOpen(false)}>Workflow</Link>
                    <Link href="#contacts" className="hover:text-accent-green transition-colors" onClick={() => setIsOpen(false)}>Contacts</Link>
                </div>
            )} */}
        </nav>
    );
}