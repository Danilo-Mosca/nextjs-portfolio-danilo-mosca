import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
    return (
        // Footer con effetto glassmorphism (backdrop-blur-md) e bordo superiore
        <footer className="relative w-full border-t border-foreground/10 bg-background/50 backdrop-blur-md pt-12 pb-8 mt-10">
            {/* Linea luminosa astratta in cima al footer */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-green to-transparent opacity-50"></div>

            <div className="container mx-auto px-4 flex flex-col items-center">
                {/* Nome stilizzato */}
                <div className="font-title text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-accent-blue">
                    DANILO
                </div>

                <p className="font-text text-center max-w-xl mb-8">
                    Sempre alla ricerca di nuove sfide per trasformare idee complesse in interfacce web incredibili, dinamiche e performanti.
                </p>

                {/* Social e Contatti con Hover 3D */}
                <div className="flex space-x-6 mb-8">
                    <Link href="https://github.com/danilo-mosca" target="_blank" title="GitHub" className="text-accent-blue hover:text-accent-green transition-all duration-300 hover:-translate-y-2 py-3 px-3 rounded-2xl border border-foreground/10 bg-foreground/5 hover:bg-accent-green/10 hover:shadow-[0_0_20px_rgba(155,255,176,0.5)] hover:border-accent-green">
                        <Github className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/danilo-mosca-706564374/" target="_blank" title="LinkedIn" className="text-accent-blue hover:text-accent-green transition-all duration-300 hover:-translate-y-2 py-3 px-3 rounded-2xl border border-foreground/10 bg-foreground/5 hover:bg-accent-green/10 hover:shadow-[0_0_20px_rgba(155,255,176,0.5)] hover:border-accent-green">
                        <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link href="#contacts" title="Contattami" className="text-accent-blue hover:text-accent-green transition-all duration-300 hover:-translate-y-2 py-3 px-3 rounded-2xl border border-foreground/10 bg-foreground/5 hover:bg-accent-green/10 hover:shadow-[0_0_20px_rgba(155,255,176,0.5)] hover:border-accent-green">
                        <Mail className="w-6 h-6" />
                    </Link>
                </div>

                {/* Separatore */}
                <div className="w-full h-[1px] bg-foreground/10 mb-8 max-w-4xl"></div>

                {/* Sezione inferiore del Footer: Copyright e "Torna Su" */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl gap-6 md:gap-0">
                    <p className="font-text text-sm">
                        &copy; {new Date().getFullYear()} Danilo Mosca. Tutti i diritti riservati.
                    </p>

                    <Link href="#hero" className="flex items-center gap-2 text-sm text-foreground hover:text-accent-green transition-colors duration-300 group">
                        Torna su
                        <span className="p-2 rounded-full border border-foreground/10 bg-foreground/5 group-hover:bg-accent-green/10 group-hover:border-accent-green transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(155,255,176,0.3)]">
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
