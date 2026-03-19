import { StaticImageData } from "next/image";
// Importo l'immagine direttamente nel file data/projects.ts e poi passo l'oggetto StaticImageData al componente Card, così da garantire una corretta gestione delle immagini all'interno del componente Card.
import BoolBnB from "@/assets/images/BoolBnB.webp";
import LaravelMovies from "@/assets/images/LaravelMovies.webp";
import Meteo from "@/assets/images/MeteoWebApp.webp";

interface ISProject {
    title: string,
    description: string,
    imageUrl: StaticImageData,
    link: string,
};

export const PROJECTS: ISProject[] = [
    {
        title: "Meteo Web App",
        description: "Web App full-stack per la gestione di annunci immobiliari in affitto, progettata con architettura REST e interfaccia Single Page Application. Il backend è stato sviluppato con Node.js ed Express, con implementazione di API REST per la gestione di immobili, recensioni e like, includendo validazione server-side e gestione strutturata delle risorse. Il frontend, realizzato in React, offre un’esperienza fluida grazie alla navigazione client-side senza refresh. Tra le principali funzionalità: sistema di ricerca avanzata con filtri dinamici, pagine di dettaglio con integrazione di geolocalizzazione tramite API OpenStreetMap, interazioni utente (recensioni e like), invio di email ai proprietari tramite EmailJS. L’applicazione è completamente responsive ed è stata sviluppata ponendo particolare attenzione a UX, performance e gestione delle validazioni sia lato client che lato server.",

        // Non posso importare l'immagine in questo modo:
        // imageUrl: "../assets/images/BoolBnB-Platforms.webp",
        // Perché in questo modo al componente Card arriva una stringa e non un oggetto StaticImageData, che invece è ciò che si ottiene quando si importa un'immagine in Next.js. Per risolvere questo problema, devo importare l'immagine direttamente nel file data/projects.ts e poi passare l'oggetto StaticImageData al componente Card.
        // Quindi, invece di:
        // imageUrl: "../assets/images/BoolBnB-Platforms.webp",
        // Devo fare:
        imageUrl: BoolBnB,
        link: "https://github.com/danilo-mosca"
    },
    {
        title: "Laravel Movies",
        description: "Web App full-stack a tema cinema con separazione tra area amministrativa e interfaccia pubblica. Il backend è stato sviluppato in Laravel, con implementazione di un sistema di autenticazione tramite Laravel Breeze e gestione completa delle operazioni CRUD per le entità film, accessibili esclusivamente agli utenti autenticati tramite backoffice. Il frontend, realizzato in React, è pensato per utenti non autenticati e offre le seguenti funzionalità: visualizzazione del catalogo film, sistema di ricerca e filtraggio, pagine di dettaglio con informazioni complete e strutturate. L’applicazione è progettata per garantire una chiara separazione dei ruoli, una navigazione intuitiva e una presentazione efficace dei contenuti.",
        imageUrl: LaravelMovies,
        link: "https://github.com/danilo-mosca"
    },
    {
        title: "Weather App",
        description: "Web App frontend realizzata in JavaScript Vanilla per la visualizzazione delle previsioni meteo in tempo reale. L’app integra l’API OpenWeatherMap per recuperare dati aggiornati e offre due modalità di ricerca: inserimento manuale del nome della città, utilizzo della geolocalizzazione del device per ottenere le previsioni del luogo corrente. L’interfaccia è semplice e intuitiva, ottimizzata per fornire informazioni immediate sull’andamento meteorologico, con aggiornamento dinamico dei dati.",
        imageUrl: Meteo,
        link: "https://capable-parfait-152de6.netlify.app/"
    },
];