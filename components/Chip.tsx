import React from "react";

interface ChipProps {
    label: string;
}

function Chip({ label }: ChipProps) {
    return (
        // Per modificare il colore sia al bordo che al testo in Tailwind CSS bisogna usare la variante "group" e "group-hover" per applicare gli stili al contenitore e al testo all'interno del contenitore. In questo modo, quando si passa il mouse sul contenitore, sia il bordo che il testo cambieranno colore.
        // group → abilita gli eventi hover per i figli
        // group-hover → applica gli stili quando il genitore (in questo caso il div) è in stato hover
        <div className="group flex justify-center items-center rounded-[64px] border-accent-blue border-2 px-8 py-2 cursor-pointer hover:border-accent-green">
            <span className="text-accent-blue font-title group-hover:text-accent-green">{label}</span>
        </div>

        // Variante 1:
        // <div className="group relative overflow-hidden flex justify-center items-center rounded-[64px] border-2 border-accent-blue px-8 py-2 cursor-pointer">
        //     <span className="absolute inset-0 bg-accent-blue scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        //     <span className="relative text-accent-blue font-title group-hover:text-black transition-colors duration-300">
        //         {label}
        //     </span>
        // </div>

        // Variante 2 Underline animata (grow from center):
        // <span className="relative cursor-pointer font-title text-accent-blue after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent-blue after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
        //     {label}
        // </span>

        // Variante 3 Slide underline (da sinistra):
        // <span className="relative cursor-pointer font-title text-accent-blue after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent-blue after:transition-all after:duration-300 hover:after:w-full">
        //     {label}
        // </span>

        // Variante 4 Highlight hover (background che appare):
        // <span className="relative cursor-pointer font-title text-accent-blue px-1 transition-colors duration-300 hover:text-white hover:bg-accent-blue">
        //     {label}
        // </span>

        // Variante 5 Versione super moderna (highlight animato):
        // <span className="relative cursor-pointer font-title text-accent-blue group">
        //     <span className="absolute inset-0 scale-x-0 origin-left bg-accent-blue transition-transform duration-300 group-hover:scale-x-100"></span>
        //     <span className="relative group-hover:text-white transition-colors duration-300">
        //         {label}
        //     </span>
        // </span>
    );
}

export default Chip;