# Portfolio Next.js di Danilo Mosca

Un progetto portfolio personale realizzato con **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS 4** e TypeScript. Questo repository contiene componenti, pagine e dati che mostrano progetti, competenze e un modulo di contatto funzionante.

---

## 🧰 Tecnologie principali

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **ESLint**
- **EmailJS** per l'invio di email dal modulo di contatto

---

## 🚀 Avvio rapido

### 1) Installare le dipendenze

```bash
npm install
# o
# yarn
# pnpm install
# bun install
```

### 2) Avviare l'ambiente di sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser per vedere l'app in esecuzione.

### 3) Compilare per produzione

```bash
npm run build
```

### 4) Avviare il server di produzione

```bash
npm start
```

---

## 📁 Struttura del progetto

- `app/` – Router di Next.js, layout e pagine (`page.tsx` e `layout.tsx`)
- `components/` – Componenti riutilizzabili (navbar, card, form, etc.)
- `data/` – Dati statici per progetti, skill e workflow
- `public/` – Asset pubblici (icone, immagini, favicon)
- `styles/` – (Se presenti) file CSS globali o variabili

---

## ✨ Personalizzazione

- Aggiorna i dati in `data/projects.ts`, `data/skills.ts` e `data/workflow.ts` per modificare contenuti e progetti mostrati.
- Modifica `components/` per cambiare layout e componenti visivi.

### 🔐 Variabili d'ambiente (EmailJS)

Il modulo di contatto usa **EmailJS** e richiede queste variabili d'ambiente per funzionare. In Next.js devono cominciare con `NEXT_PUBLIC_` perché siano accessibili dal browser.

Crea un file `.env` (non committare nel repository) e aggiungile li:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: ID del servizio EmailJS (es. `service_abc123`)
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: ID del template EmailJS (es. `template_abc123`)
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: Public Key / User ID fornito da EmailJS

In questo repository trovi un esempio in `.env.example` con valori placeholder.

---

## 📦 Dipendenze utili

- `@emailjs/browser` – invio email dal browser (modulo contatti)
- `lucide-react` – icone SVG

---

## 📌 Note su deployment

Questo progetto è pronto per il deploy su Vercel (consigliato) o su qualsiasi piattaforma compatibile con Next.js. In Vercel basta collegare il repository e la build partirà automaticamente.

---

## 🧩 Collegamenti utili

- [Documentazione Next.js](https://nextjs.org/docs)
- [Documentazione Tailwind CSS](https://tailwindcss.com/docs)
- [EmailJS](https://www.emailjs.com/docs/)

---