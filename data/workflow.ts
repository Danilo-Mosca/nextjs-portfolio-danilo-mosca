import { Pencil, CodeXml, ShieldEllipsis, GlobeLock } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface workflow {
    title: string,
    description: string,
    icon: LucideIcon; // definisco un tipo per l'icona: LucideIcon, così da poter passare qualsiasi tipo di icona senza dovermi preoccupare del tipo specifico.
}

const WORKFLOW: workflow[] = [
    {
        title: "1. Progettazione",
        description: "Analizzo i requisiti e creo un piano dettagliato per lo sviluppo del progetto.",
        icon: Pencil
    },
    {
        title: "2. Sviluppo",
        description: "Implemento le soluzioni tecniche secondo i criteri di qualità e performance.",
        icon: CodeXml
    },
    {
        title: "3. Testing",
        description: "Eseguo test approfonditi per garantire la stabilità e la qualità del prodotto.",
        icon: ShieldEllipsis
    },
    {
        title: "4. Deployment",
        description: "Lancio il prodotto in ambiente di produzione e assicuro il suo corretto funzionamento.",
        icon: GlobeLock
    }
];

export default WORKFLOW;