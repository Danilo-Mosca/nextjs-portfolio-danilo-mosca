import Image from "next/image";
import Link from "next/link";
import ProfilePicture from "../assets/images/profile-danilo-mosca.webp";
import Cta from "@/components/Cta";
import Chip from "@/components/Chip";
import { SKILLS } from "@/data/skills";
import { PROJECTS } from "@/data/projects";
import Card from "@/components/Card";
import WORKFLOW from "@/data/workflow";
import Slide from "@/components/Slide";
import ContactForm from "@/components/ContactForm";
import { Download, MessageSquareCheck } from 'lucide-react';    // importo le icone Download e MessageSquareCheck da lucide-react, che è una libreria di icone SVG per React.

export default function Home() {
  return (
    // con la classe "container" di tailwind imposto una max-width in base alla viewport, come se stessi utilizzando le media query
    // Mentre la classe "mx-auto" centra il contenitore
    // Infine la classe "min-h-screen" imposta l'altezza minima di un elemento al 100% dell'altezza del viewport (min-height: 100vh)
    // La classe  min-h-screen è stata successivamente rimossa

    <main className="container mx-auto flex flex-col p-4">

      {/* Sezione Hero */}
      {/* min-h-svh = Altezza minima in Small Viewport Height (con barre browser visibili). Applica la proprietà CSS min-height: 100svh; all'elemento <section></section> così da non visualizzare l'immagine del portofolio subito in alto */}
      <section id="hero" className="flex flex-col justify-center items-center space-y-6 min-h-svh py-24">
        <div className="relative p-1 rounded-full bg-gradient-to-r from-accent-green to-accent-blue shadow-[0_0_30px_rgba(32,252,249,0.3)]">
          <Image src={ProfilePicture} alt="Danilo Mosca" width={200} height={200} className="size-[200px] object-cover rounded-full border-4 border-background" />
        </div>
        <div className="max-w-2xl space-y-6">
          <h1 className="font-title text-center md:text-3xl lg:text-4xl">Ciao 👋, sono Danilo Mosca</h1>
          <h2 className="title-gradient text-center text-4xl lg:text-6xl">Full Stack Developer</h2>
          <p className="font-text text-center text-xl">💻 Sono uno sviluppatore web con una solida formazione pratica e una forte passione per la creazione di applicazioni moderne e performanti. Ho esperienza nello sviluppo frontend e backend, utilizzando tecnologie come React, Laravel e Java per realizzare progetti completi e scalabili. </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Cta label="Contattami" link="#contacts" icon={<MessageSquareCheck />} />
            <Cta label="Download CV" link="./CV_Danilo-Mosca.pdf" target="_blank" icon={<Download />} />
          </div>
        </div>
      </section>

      {/* Sezione About ( ho tolto min-h-[70vh] e messo i padding pb-24 lg:pb-48 ) */}
      <section id="about" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="max-w-2xl space-y-6">
          <h2 className="font-title text-center text-4xl">Di più su di me 🔮</h2>
          <p className="font-text text-xl text-center">
            Mi piace lavorare su interfacce intuitive e allo stesso tempo costruire logiche backend robuste, curando sia l’esperienza utente che la qualità del codice. Attualmente sto ampliando le mie competenze a 360° in ambito informatico, approfondendo nuove tecnologie e consolidando le mie capacità nello sviluppo web.
            <br /><br />
            Sono una persona curiosa, orientata al miglioramento continuo e sempre pronta a mettersi alla prova con nuove sfide.<br /><br />
            Obiettivo? Migliorare ogni giorno e creare progetti che facciano davvero la differenza.
          </p>
        </div>
      </section>

      {/* Sezione Skills ( anche qui ho tolto min-h-[50vh] e messo i padding pb-24 lg:pb-48 )*/}
      <section id="skills" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="max-w-2xl space-y-6">
          <h2 className="font-title text-center text-4xl">Le mie competenze 🛠️</h2>

          <div className="flex flex-wrap justify-center gap-6">
            {SKILLS.map((skill, index) => (
              <Chip key={index} label={skill.name} />
            ))}
          </div>

        </div>
      </section>

      {/* {Sezione progetti} */}
      <section id="projects" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="space-y-8">
          <h2 className="font-title text-center text-4xl">I miei progetti 🚀</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <Card key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} link={project.link} />
            ))}
          </div>

        </div>
      </section>

      {/* Sezione workflow */}
      <section id="workflow" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="space-y-6">
          <h2 className="font-title text-center text-4xl">Il mio workflow 🛠️</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFLOW.map((slide, index) => (
              <div key={index} className={index === WORKFLOW.length - 1 ? "lg:col-start-2" : ""}>
                {/* Oppure solo className="last:lg:col-start-2" */}
                <Slide key={index} title={slide.title} description={slide.description} icon={<slide.icon size={30} />} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Sezione contatti */}
      <section id="contacts" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="space-y-6">
          <h2 className="font-title text-center text-4xl">Mettiamoci in contatto 📲</h2>
          <ContactForm />
        </div>
      </section>

    </main >
  );
}
