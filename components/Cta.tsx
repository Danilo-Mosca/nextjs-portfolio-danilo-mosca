"use client";
import React from 'react';
import Link from 'next/link';

interface CtaProps {
    label: string,
    link: string,
    target?: "_self" | "_blank" | "_parent" | "_top" | "framename",      // avrei potuto inserire anche target?: React.HTMLAttributeAnchorTarget
    className?: string;
    icon?: React.ReactNode;     // definisco un tipo per l'icona: React.ReactNode
}

function Cta({ label, link, target = "_self", className, icon }: CtaProps) {
    return (
        <>
            <Link href={link} target={target} className={`cta text-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(155,255,176,0.5)] ${className ?? ""}`}>
                <span>{label}</span>
                {icon && <span className="ml-2">{icon}</span>}
            </Link>

            {/* Alternativa: */}
            {/* <Link href={link} target={target} className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-[64px] transition-transform transform hover:scale-105">
                {label}
            </Link> */}
        </>
    );
}

export default Cta;