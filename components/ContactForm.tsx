"use client";
import React, { use, useRef, useState } from "react";
import emailjs from '@emailjs/browser';    // importo emailjs, una libreria che consente di inviare email direttamente dal client utilizzando i servizi di EmailJS.
import { MessageSquareCheck } from 'lucide-react';    // importo le icone MessageSquareCheck da lucide-react, che è una libreria di icone SVG per React.

function ContactForm() {

    const [status, setStatus] = useState<string>("");    // utilizzo lo stato status ("" | "success" | "error") per mostrare un messaggio di successo o errore dopo l'invio del form
    const [loading, setLoading] = useState<boolean>(false);    // utilizzo lo stato loading per modificare la label del pulsante di invio del form

    const formRef = useRef<HTMLFormElement>(null);    // creo un riferimento al form HTML utilizzando useRef. Questo riferimento sarà utilizzato per accedere ai dati del form quando si invia l'email.

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;    // se loading è true, significa che è già in corso un invio del form, quindi esco dalla funzione per evitare invii multipli
        setLoading(true);
        setStatus("");

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        // Controllo prima se le variabili d'ambiente necessarie per EmailJS sono presenti
        if (!serviceId || !templateId || !publicKey) {
            throw new Error("Variabili d'ambiente mancanti");
        }
        // Controllo se il riferimento al form è disponibile prima di procedere con l'invio dell'email. Se formRef.current è null, significa che il form non è stato montato correttamente o non è accessibile, quindi lancio un errore.
        if (!formRef.current) {
            throw new Error("Form non disponibile");
        }

        // --- Honeypot anti-spam --- 
        // controllo il campo nascosto "company", se è stato compilato, significa che la richiesta è probabilmente spam, quindi esco dalla funzione senza inviare l'email
        if (formRef.current.company.value) {
            console.log("Spam rilevato. Form non inviato");
            return;
        }

        try {
            // Invio i dati del form a EmailJS grazie al metodo sendForm, che accetta come parametri l'ID del servizio, l'ID del template, il riferimento al form HTML e la chiave pubblica. Il metodo sendForm restituisce una Promise, quindi utilizzo await per aspettare la risposta prima di procedere.
            await emailjs.sendForm(
                serviceId,    // ID del servizio EmailJS, che è definito nelle variabili d'ambiente.
                templateId,    // ID del template EmailJS, che è definito nelle variabili d'ambiente.
                formRef.current,    // Il riferimento al form HTML  che contiene i dati da inviare. L'operatore "!" viene utilizzato per indicare a TypeScript che formRef.current non sarà null al momento dell'invio.
                publicKey);    // Chiave pubblica di EmailJS, che è definita nelle variabili d'ambiente.

            setStatus("success");
            formRef.current.reset();    // Dopo un invio riuscito, resetto il form per svuotare i campi di input

        } catch (error) {
            console.error("Errore durante l'invio dell'email:", error);
            setStatus("error");
        }
        setLoading(false);

        // messaggio sparisce dopo 4 secondi
        setTimeout(() => {
            setStatus("");
        }, 4000);
    };

    return (
        <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">

                {/* Honeypot campo invisibile per lo spam */}
                {/* --- Honeypot anti-spam ---
                Metodo utilizzato per l'anti spam: Honeypot filend. Aggiungo un campo nascosto al form che i bot di spam tendono a compilare, ma che gli utenti umani
                non vedranno. Se questo campo viene compilato, posso identificare la richiesta come spam e ignorarla. Per implementare questo metodo,
                aggiungo un input nascosto al form con un nome specifico (ad esempio "honeypot") e controllo se questo campo è stato compilato
                durante la gestione dell'invio del form. Se il campo "honeypot" contiene un valore,
                posso considerare la richiesta come spam e non procedere con l'invio dell'email. */}

                {/* la proprietà tabIndex={-1} rimuove il campo dal flusso di tabulazione (il tasto TAB), rendendolo inaccessibile agli utenti che navigano con la tastiera.
                tabIndex ha i seguenti valori:
                0 → normale ordine di tabulazione, il campo sarà raggiungibile con il tasto TAB seguendo l'ordine del DOM.
                -1 → il campo è rimosso dal flusso di tabulazione, non sarà raggiungibile con il tasto TAB.
                >0 → ordine personalizzato di tabulazione, il campo sarà raggiungibile con il tasto TAB seguendo l'ordine specificato dai valori positivi.

                mentre la proprietà autoComplete="off" disabilita il completamento automatico del campo da parte dei browser, riducendo ulteriormente la probabilità che i bot di spam lo compilino.
                In sostanza dice al browser: “non suggerire valori automatici”. Serve per evitare che:
                1) Il browser compili automaticamente il campo
                2) Password manager o autofill inseriscano dati
                Senza questo: Chrome potrebbe inserire email/nome → falso positivo spam */}
                <input
                    type="text"
                    name="company"
                    // style={{ display: "none" }}  // VECCHIA SOLUZIONE: alcuni bot ignorano il CSS → lo compilano comunque. Altri bot più sofisticati saltano i campi nascosti. Con la soluzione di seguito è invisibile per l’utente ma più “credibile” per i bot
                    style={{ position: "absolute", left: "-9999px" }}
                    tabIndex={-1}
                    autoComplete="off"
                />

                <label htmlFor="name" className="font-title text-sm text-accent-blue hover:text-accent-green">
                    Il tuo nome:
                </label>
                <input type="text" id="name" name="name" className="font-text p-2 border-2 bg-transparent !text-foreground border-accent-blue hover:border-accent-green rounded-2xl" placeholder="Inserisci il tuo nome" required />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-title text-sm text-accent-blue hover:text-accent-green">
                    La tua email:
                </label>
                <input type="email" id="email" name="email" className="font-text p-2 border-2 bg-transparent !text-foreground border-accent-blue hover:border-accent-green rounded-2xl" placeholder="Inserisci la tua email" required />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-title text-sm text-accent-blue hover:text-accent-green">
                    Il tuo messaggio:
                </label>
                <textarea id="message" name="message" rows={4} className="font-text p-2 border-2 bg-transparent !text-foreground border-accent-blue hover:border-accent-green rounded-2xl" placeholder="Inserisci il tuo messaggio" required />
            </div>

            {/* Con disabled={loading} disabilito il pulsante di invio del form durante l'invio dell'email, in modo da evitare invii multipli accidentali. Quando loading è true, il pulsante sarà disabilitato e mostrerà "Invio in corso..." invece di "Invia il messaggio". */}
            <button type="submit" className="cta w-full cursor-pointer transition-transform transform hover:scale-105" disabled={loading}>
                {loading ? (
                    <span>Invio in corso...<span className="spinner">⏳</span></span>
                ) : (
                    <span className="flex">Invia il messaggio<span><MessageSquareCheck className="w-6 h-6 ml-2" /></span></span>
                )}
            </button>

            {status === "success" && (
                <p className="text-green-500 flex justify-center space-x-4">Messaggio inviato con successo! ✅</p>
            )}
            {status === "error" && (
                <p className="text-red-500 flex justify-center space-x-4">Si è verificato un errore durante l'invio del messaggio. Riprova più tardi ❌</p>)}
        </form>
    );
}

export default ContactForm;