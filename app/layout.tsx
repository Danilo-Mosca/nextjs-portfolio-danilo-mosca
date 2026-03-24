import type { Metadata } from "next";
import "./globals.css";
// app/layout.tsx
import { IBM_Plex_Sans_Condensed, IBM_Plex_Sans } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Footer from "@/components/Footer";

// Configurazione del font
const ibm_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: '--font-ibm-plex-sans', // Utile per Tailwind
});

const ibm_sans_condensed = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: '--font-ibm-plex-sans-condensed', // Utile per Tailwind
});

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // La classe globale di seguito: scroll-smooth è una funzionalità nativa di Tailwind e CSS moderno, 
    // ogni volta che si clicca su un link del menu (#about, #skills, eccetera), 
    // la pagina scivolerà morbidamente verso quella sezione invece di teletrasportartici di scatto.
    // Invece la classe scroll-pt-24 (Scroll Padding Top): questo assicura che, quando lo scorrimento finisce, 
    // la sezione si fermi esattamente sotto la Navbar fissa, senza che il titolo venga nascosto dietro di essa.
    <html lang="it" className={`${ibm_sans.variable} ${ibm_sans_condensed.variable} antialiased scroll-smooth scroll-pt-24`}>
      <body>
        <Background />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}