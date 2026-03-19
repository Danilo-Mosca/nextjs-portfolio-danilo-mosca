import React from "react";

interface SlideProps {
    title: string,
    description: string,
    icon?: React.ReactNode;     // definisco un tipo per l'icona: React.ReactNode, così da poter passare qualsiasi tipo di icona senza dovermi preoccupare del tipo specifico.
}

export default function Slide({ title, description, icon }: SlideProps) {
    return (
        <div className="flex flex-col border-2 border-accent-blue rounded-2xl min-w-[300px] overflow-hidden hover:border-accent-green">
            <div className="flex flex-col p-10 gap-4 h-full">
                {icon && <div className="flex justify-center items-center size-20 text-background rounded-full bg-accent-blue p-4 hover:bg-accent-green">{icon}</div>}
                <h3 className="font-title text-xl !font-bold text-accent-blue hover:text-accent-green">{title}</h3>
                <p className="font-text !text-accent-blue hover:!text-accent-green">{description}</p>
            </div>
        </div>
    );
}