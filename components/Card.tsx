import { StaticImageData } from "next/image";
import { ChevronRight } from 'lucide-react';    // importo l'icona ChevronRight da lucide-react, che è una libreria di icone SVG per React.
import React from "react";
import Image from "next/image";
import Cta from "./Cta";

interface CardProps {
    title: string,
    description: string,
    imageUrl: StaticImageData | string,  //In Next.js, StaticImageData è un tipo TypeScript che rappresenta i dati di un'immagine statica importata. Quando importi un'immagine in Next.js, viene convertita in un oggetto che contiene informazioni sull'immagine, come il percorso, le dimensioni e il formato. Utilizzando StaticImageData come tipo per la proprietà imageUrl, stai specificando che questa proprietà deve essere un oggetto che rappresenta un'immagine statica importata, garantendo così una corretta gestione delle immagini all'interno del componente Card.
    link: string,
}

function Card({ title, description, imageUrl, link }: CardProps) {
    return (
        <div className="flex flex-col bg-foreground text-background rounded-2xl max-w-[280px] overflow-hidden">
            {/* Imposto l'immagine responsive: */}
            <Image src={imageUrl}
                className="object-cover w-full h-[150px] rounded-2xl p-1"
                alt={title}
            />
            {/* Il comando di seguito "h-full" significa height: 100% equivale a height: 100%; 
                L'elemento prende il 100% dell'altezza del suo elemento padre. */}
            <div className="flex flex-col px-6 py-4 space-y-4 gap-4 h-full">
                <h3 className="font-title text-xl !font-bold text-background">{title}</h3>
                <p className="font-text !text-background custom-description">{description}</p>
                {/* Il comando di seguito "mt-auto" significa margin-top: auto, si usa soprattutto con flexbox per spingere un elemento verso il basso. 
                    Esempio classico (card con bottone in fondo) come di seguito: */}
                <Cta label="Scopri di più" link={link} target="_blank" className="mt-auto" icon={<ChevronRight />} />
                {/* Quindi in sostanza:
                h-full → la card occupa tutta l'altezza disponibile
                mt-auto → l'elemento finale si spinge in basso */}
            </div>
        </div>
    );
}

export default Card;